'use client'

import { useState } from "react"
import {useMutation, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'

// Define and export the createPost component
export default function createPost() {
    // Define state variables using the useState hook
    const [title, setTitle] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)


    //Create a post
    const { mutate } = useMutation(
        async (title: string) => await axios.post('/api/posts/addPost', { title }),
        {
            onError: (error) => {
                console.log(error)
                },
            onSuccess: (data) => {
                console.log(data)
                setTitle('')
                setIsDisabled(false)
            },
        }
    )

    const submitPost = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        mutate(title)
    }

    // Render the create post form
    return (
        <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                {/* Render a textarea for the post title */}
                <textarea
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    value={title}
                    placeholder="What's going on the wall?"
                    className="p-4 text-lg rounded-md my-2 bg-gray-200"
                ></textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                {/* Render a character count with conditional text color */}
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-700"}`}>
                    {`${title.length}/300`}
                </p>
                {/* Render a button for creating the post */}
                <button
                    disabled={isDisabled}
                    className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                    type="submit"
                >
                    Create Post
                </button>
            </div>
        </form>
    )
}
