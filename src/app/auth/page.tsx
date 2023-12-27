import SignInWithGoogle from "@/components/signInWithGoogle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/');
    }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
    <Card>
        <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Please sign in to be authenticated</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col">
                <div className="flex flex-col space-y-2">
                    <SignInWithGoogle />

                </div>
            </div>
        </CardContent>
    </Card>
    </div>
  )
}