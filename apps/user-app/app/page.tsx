import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { AUTH_CONFIG } from "./lib/auth";

export default async function Page() {
  const session = await getServerSession(AUTH_CONFIG);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
}
