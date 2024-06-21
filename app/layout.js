import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './redux/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Willow Wave',
  description: 'Created by Willow Wave',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>{children}</Providers>
        <script type='text/javascript' src='//pl23597058.highrevenuenetwork.com/ad/75/8c/ad758c1a89b2fe2a3f993fa970b3fe0b.js'></script>
      </body>
    </html>
  )
}
