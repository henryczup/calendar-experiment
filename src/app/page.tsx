
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { Button } from "@/components/ui/button"
import Link from "next/link"
    

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    {session ? (
      <h1>You are logged in</h1>
      ) : (
        <>
      <h1>You are not logged in</h1>
      <Button><Link href='/auth'>Login</Link></Button>
      </>
        )}
    </>
  )
  }

