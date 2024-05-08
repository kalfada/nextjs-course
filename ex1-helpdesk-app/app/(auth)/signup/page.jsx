"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import AuthForm from "../authForm";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter()
    const [errMsg, setErrMsg] = useState('')

    const handleSubmit = async (e, email, password) => {
        e.preventDefault()

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`
            }
        })
        if (error) {
            setErrMsg(error.message)
        } else {
            router.push('/verify')
        }
    }

    return (
        <main className="text-center">
            <h2 className="text-center">
                Log in
            </h2>
            <AuthForm handleSubmit={handleSubmit} />
            {errMsg && (
                <div className="error">{errMsg}</div>
            )}
        </main>
    )
}
