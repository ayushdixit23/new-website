
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

    <html lang="en" suppressHydrationWarning={true}>
      <head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFZQDF58V2"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFZQDF58V2"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GFZQDF58V2');
          `}
        </script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <script type='text/javascript' src='//pl23597058.highrevenuenetwork.com/ad/75/8c/ad758c1a89b2fe2a3f993fa970b3fe0b.js'></script>
        <script type="text/javascript">
          {`
            atOptions = {
              'key' : 'fd5ecc061d53f251d73993c2558d0217',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `}
        </script>
        <script type="text/javascript" src="//www.topcreativeformat.com/fd5ecc061d53f251d73993c2558d0217/invoke.js"></script>
        <script async="async" data-cfasync="false" src="//pl23598840.highrevenuenetwork.com/11ae295c347d1defd67ac330430b498c/invoke.js"></script>
        <div id="container-11ae295c347d1defd67ac330430b498c"></div>
        <script type="text/javascript" src="//www.topcreativeformat.com/fd5ecc061d53f251d73993c2558d0217/invoke.js"></script>
        <script type='text/javascript' src='//pl23598873.highrevenuenetwork.com/f3/15/c8/f315c8ad164d6c3be45ba02cc28aae77.js'></script>
      </body>
    </html>

  )
}
