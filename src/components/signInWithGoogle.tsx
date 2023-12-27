'use client'
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function SignInWithGoogle() {
    return (
        <Button onClick={() => signIn('google', { callbackUrl: `${window.location.origin}` })}>Login In With Google</Button>
    )
}