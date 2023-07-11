import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"
import MyPosts from "./MyPosts"

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session){
        redirect("/api/auth/signin")
    }
    return(
        <main>
            <div className="flex items-center text-4xl font-bold leading-normal">
                <h1 className="pr-2">Welcome back</h1>
                <h1 className="name-gradient">{session?.user?.name}</h1>
                <h1 className="">!</h1>
            </div>
            <MyPosts />
        </main>
    )
}