'use client'

import { signIn } from 'next-auth/react'

// Define and export the Login component
export default function Login() {
    // Render the login button
    return (
        <li className='list-none'>
            <button onClick={() => signIn()} className='text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25'>
                Sign In
            </button>
        </li>
    )
}
