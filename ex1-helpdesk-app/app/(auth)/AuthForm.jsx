"use client"

import { useState } from 'react'

export default function AuthForm({ handleSubmit }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form onSubmit={e => handleSubmit(e, email, password)}>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                <span>Password:</span>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </label>
            <input className="btn-primary" type='submit' value="Submit" />
        </form>
    )
}
