import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(_, { params }) {
    const { id } = params
    const res = await fetch(`http://localhost:4000/tickets/${id}`)

    if (!res.ok) {
        return NextResponse.json({ error: 'cannot find the ticket' }, { status: 404 })
    }

    const ticket = await res.json()

    return NextResponse.json(ticket, {
        status: 200
    })
}