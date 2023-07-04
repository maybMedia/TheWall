import Link from "next/link"
import Login from "./Login"
import Logged from "./Logged"
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

// Define and export an asynchronous function component called Nav
export default async function Nav() {
    // Retrieve the session using getServerSession and authOptions
    const session = await getServerSession(authOptions)

    // Render the navigation bar
    return(
        <nav className="flex justify-between items-center py-8">
            {/* Render a link to the home page */}
            <Link href={"/"}>
                <h1 className="font-bold text-lg">The Wall</h1>
            </Link>
            <ul className="flex items-center gap-6">
                {/* Render the Login component if there is no session user */}
                {!session?.user && <Login />}
                {/* Render the Logged component if there is a session user, passing the user's image */}
                {session?.user && <Logged image={session.user?.image || ""} />}
            </ul>
        </nav>
    )   
}
