import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Wallet</title>
        <link rel="shortcut icon" href="/wallet.svg" />
        <link rel="apple-touch-icon" href="/wallet.svg" />
        <meta name="description" content="A financial dashboard project" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
