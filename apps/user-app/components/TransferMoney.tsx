"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { initiateTransfer } from "../app/lib/actions/initiateTransfer";

export const TransferMoney = () => {

  const [amount, setAmount] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false)

    async function handleMoney() {
        try {
            setLoading(true)
            await initiateTransfer(amount * 100, phoneNumber)   
            window.location.reload(); 
            setLoading(false)
        } catch (error) {
            console.log("Error creating transaction", error);           
        }    
    }

    
  return <Card title="Send Money" className="max-h-fit">
  <div className="w-full">

      <TextInput label={"Phone Number"} placeholder="1234567890" onChange={(val) => {
        setPhoneNumber(val);
      }}/>

      <TextInput label={"Amount"} placeholder={"Amount"} onChange={(val) => {
          setAmount(Number(val));
      }} />

      <div className="flex justify-center pt-4">  
            <Button onClick={() => {handleMoney}} disabled={loading} colour="bg-[#855bfb29] text-[#7132f5]">
            Send Money
            </Button>
        </div>
  </div>
</Card>
}