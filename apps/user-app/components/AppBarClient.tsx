"use client"
import { Button } from "@repo/ui/button"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { List } from "./List"

export const AppBarClient = () => {
  const session = useSession()

  if(session.data?.user) {
    return <div>
    <LogInAppbar/>
  </div>
  }
  return <div>
    <AppBar/>
  </div>
}

function AppBar() {
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
      <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="bg-[#7132f5] hover:bg-[#6a51a6]">Sign in</Button>
      <Button onClick={() => {router.push("/api/auth/signup")}} disabled={false} colour="bg-white hover:bg-[#fffdd0] text-[#7132f5]">Sign up</Button>
  </div>
</div>
}

function LogInAppbar()  {
  const router = useRouter()
  return <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">
          EzyPay
      </div>
      <div className="flex justify-center pt-2">
          <Button onClick={() =>{router.push("/deposit")}} disabled={false}>Deposit</Button>
          <Button onClick={async () => {
          await signOut()
          router.push("/api/auth/signin")
          }} disabled={false}>Sign Out</Button>
      </div>
  </div>
}