import express from "express";
import prisma from "@repo/db/client";

const app = express();

interface PaymentInformation {
  token: string;
  user_id: string;
  amount: number;
}
app.post("/hdfcWebhook", async (req, res) => {
  const paymentInformation: PaymentInformation = {
    token: req.body.token,
    user_id: req.body.user_identifier,
    amount: req.body.amount,
  }

  try {
    await prisma.balance.update({
      where: {
        userId: Number(paymentInformation.user_id)
      },
      data: {
        balance: {
          increment: paymentInformation.amount
        }
      }
    })

    await prisma.onRampTransaction.update({
      where: {
        token: paymentInformation.token
      },
      data: {
        status: "Success"
      }
    })

    res.status(200).json({message: "Captured"})
  } catch (error) {
    console.log(error);  
    res.status(411).json({message: "Error while processing webhook"})
  }
})