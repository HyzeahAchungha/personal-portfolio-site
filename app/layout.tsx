import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Hyzeah Achungha | Full Stack Web developer and mobile Dev",
  description: "Versatile Web developer, Mobile Dev, Sales Funnel Builder and Automation",
  openGraph: {
    title: "Hyzeah Achungha | Full Stack Web developer",
    description:
      "Versatile Web developer, Mobile Dev, Sales Funnel Builder and Automation",
    url: "https://personal-portfolio-site-ipkd.onrender.com",
    siteName: "Hyzeah Achungha Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddvhiikmz/image/upload/v1770741003/WhatsApp_Image_2026-02-10_at_8.29.35_AM_lrrx66.jpg", 
        width: 1200,
        height: 630,
        alt: "Hyzeah Achungha Open Graph Image",
      },
    ],
    
  },
  keywords: [
    "Full Stack Web Developer",
    "Mobile Developer",
    "Funnel builder and Automation",
    "STEM Educator",
    "Women Empowerment",
    "Leadership Development",
     "Tech Girl/Woman",
    "Community Engagement",
    "West Africa",
    "Cameroon",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
