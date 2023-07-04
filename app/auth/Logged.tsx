'use client'

import Image from "next/image"
import { signOut } from 'next-auth/react'
import Link from 'next/link'

// Define the User interface with the image property of type string
type User = {
    image: string
}

// Define and export the Logged component, which receives the User object as props
export default function Logged({ image }: User) {
    // Render the logged-in user component
    return (
        <li className="flex gap-8 items-center">
            {/* Render a button for signing out */}
            <button onClick={() => signOut()} className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25">
                Sign Out
            </button>
            {/* Render an Image component as a link to the dashboard */}
            <Link href={"/dashboard"}>
                <Image width={64} height={64} src={image} className="w-14 rounded-full" alt="" priority />
            </Link>
        </li>
    )
}
