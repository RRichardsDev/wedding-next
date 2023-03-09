import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway,  EB_Garamond } from '@next/font/google';

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
  <Component {...pageProps} />
  </>
}

export default MyApp
