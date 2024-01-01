import { AppProps } from 'next/app';
import '../styles/globals.css'
import { Raleway, EB_Garamond } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { config } from 'dotenv';
config();

const raleway = Raleway({ subsets: ['latin'] });
const eb = EB_Garamond({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {

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
