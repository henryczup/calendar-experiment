'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useSession } from "@supabase/auth-helpers-react"


export default function Home() {
  const session = useSession()//tokens
  const supabase = createClientComponentClient()
  const googleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { 
        scopes: 'https://www.googleleapis.com/auth/calendar' 
      },
    })
    if (error) {
      alert("Error signing in")
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }
  
  return (
    <>
    {session ?
      <>
      <h1>Home</h1>
      <p>Session: {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
      </>
      :
      <>
      <button onClick={() => googleSignIn()}>Sign In</button>
      </>
    }
    </>
  )
}
