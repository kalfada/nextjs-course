"use client"

import AuthForm from "../authForm";

export default function Signup() {

    const handleSubmit = async (e, email, password) => {
        e.preventDefault()
        console.log('sign up', { email, password });
    }

    return (
        <main className="text-center">
            <h2 className="text-center">
                Log in
            </h2>
            <AuthForm handleSubmit={handleSubmit} />
        </main>
    )
}
