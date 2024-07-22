"use client"
import { Button } from "@repo/ui/button"
import { signOut, useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { List } from "./List"
import React from "react"

export const AppBarClient = () => {
  const session = useSession()
  const pathname = usePathname()
  const router = useRouter()

  if(session.data?.user) {
    return <div>
    <Appbar>
        <Button onClick={() =>{router.push("/deposit")}} disabled={false} colour="bg-[#855bfb29] 
        text-[#7132f5]">Deposit</Button>
        
        <Button onClick={async () => {
        await signOut()
        router.push("/api/auth/signin")
        }} disabled={false} colour="bg-[#855bfb29] text-[#7132f5]">Sign Out</Button>
    </Appbar>
  </div>
  }

  if (pathname === "/api/auth/signup") {
    return <div>
    <Appbar>
        <Button onClick={() => {router.push("/api/auth/signin")}} disabled={false} colour="bg-[#855bfb29] text-[#7132f5]">Sign in</Button>
    </Appbar>
  </div>
  }

  if (pathname === "/api/auth/signin") {
    return <div>
    <Appbar>
        <Button onClick={() => {router.push("/api/auth/signup")}} disabled={false} colour="bg-[#855bfb29] text-[#7132f5]">Create Account</Button>
    </Appbar>
  </div>
  }
  
  if (pathname === "/") {
    return <div>
    <MainAppBar/>
  </div>
  }
  } 

function MainAppBar() {
  const router = useRouter()
  return <div className="flex justify-between border-b py-3.5 px-12 bg-[#7132f5]">
  <div className="flex items-center">
    <div className="flex flex-col justify-center text-white text-3xl">
        EzyPay
    </div>
    <div>
      <List/>
    </div>
  </div>

  <div className="flex justify-center pt-2 gap-4">
      <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="text-white bg-[#7132f5] hover:bg-[#6a51a6] outline outline-1">Sign in</Button>
      <Button onClick={() => {router.push("/api/auth/signup")}} disabled={false} colour="bg-white hover:bg-[#fffdd0] text-[#7132f5]">Sign up</Button>
  </div>
</div>
}

function Appbar({children}: {children: React.ReactNode})  {
  return <div className="flex justify-between border-b px-4 border-slate-300">
      <div className="text-3xl flex flex-col justify-center text-[#7132f5] font-sans">
          EzyPay
      </div>
      <div className="flex justify-center pt-2">
          {children}
      </div>
  </div>
}