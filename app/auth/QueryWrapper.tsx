'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

// Define the Props interface which specifies the type of the "children" prop
interface Props {
    children?: ReactNode
}

// Create a new instance of QueryClient
const queryClient = new QueryClient()

// Define a functional component called QueryWrapper which takes Props as its parameter
const QueryWrapper = ({children} : Props) => (
    // Render the QueryClientProvider component and pass the queryClient instance as the "client" prop
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)

export default QueryWrapper