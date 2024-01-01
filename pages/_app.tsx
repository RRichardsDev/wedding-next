import { AppProps } from 'next/app';
import '../styles/globals.css'
import { Raleway, EB_Garamond } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { config } from 'dotenv';
import { useEffect } from 'react';
config();

const raleway = Raleway({ subsets: ['latin'] });
const eb = EB_Garamond({ subsets: ['latin'] });



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // const sessionObject = {
    //   id: new Date().getTime() + '-' + Math.random().toString(36).substring(7),
    //   name: '',
    //   email: '',
    //   photosTaken: []
    // }

    // localStorage.setItem('sessionData', JSON.stringify(sessionObject));
  }, [])

  return <>
    <style jsx global>{`
        :root {
          --raleway-font: ${raleway.style.fontFamily};
          --eb-font: ${eb.style.fontFamily};
        }
      `}</style>
    <Analytics />
    <Component {...pageProps} />
  </>
}

export default MyApp
