"use server"
import { getServerSession } from "next-auth"
import { AUTH_CONFIG } from "../auth"
import prisma from "@repo/db/client";

export const createOnrampTransactions = async (provider: string, amount: number) => {
  const session = await getServerSession(AUTH_CONFIG);
  if (!session || !session.user?.id) {
    return {
      message: "User not authenticated"
    }
  }

    await prisma.onRampTransaction.create({
      data: {
        status: "Processing",
        provider: provider || "",
        amount: amount,
        userId: Number(session?.user?.id),
        token: Date.now().toString(),
        startTime: new Date()
    }
  })
  return {
    message: "Done"
  }
}