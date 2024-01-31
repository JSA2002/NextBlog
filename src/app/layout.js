import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { ThemeContextProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProviders from '@/providers/ThemeProviders';
import AuthProvider from "@/providers/AuthProviders";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextBlog - A Blog App',
  description: 'The best blog app!',
  keywords: ['Next.js', 'React', 'JavaScript'],
  creator: 'Jeet Agrawal',
  publisher: 'Jeet Agrawal',
  favicon:'/logo.png',
  icons: {
    icon: '/logo.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="../../public/favicon.ico" type="image/x-icon" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProviders>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProviders>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
