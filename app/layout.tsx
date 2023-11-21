import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Camp from '@/components/Camp';
import Guide from '@/components/Guide';
import Feature from '@/components/Feature';
import GetApp from '@/components/GetApp';


export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
        {children}

        </main>
        <Hero/>
        <Camp/>
        <Guide/>
        <Feature/>
        <Footer/>
        <GetApp/>
        </body>
    </html>
  )
}
