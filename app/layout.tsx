import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Physics-Loving Developer Portfolio",
  description: "Personal portfolio website showcasing my work in web development and passion for physics",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-black antialiased overflow-x-hidden")}>
        {children}
      </body>
    </html>
  )
}

