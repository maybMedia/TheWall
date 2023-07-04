import './globals.css'
import Nav from './auth/Nav'
import { Nunito } from "next/font/google"
import QueryWrapper from './auth/QueryWrapper'
import { Toaster } from "react-hot-toast"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
})

export const metadata = {
  title: 'The Wall',
  description: 'The next big social network.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${nunito.variable} bg-gray-200`}>
        <QueryWrapper>
          <Nav />
          <Toaster />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
