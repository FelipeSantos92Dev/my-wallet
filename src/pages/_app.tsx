import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/globalStyles'
import Layout from 'components/Layout'
import dark from 'styles/themes/dark'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Head>
          <title>My Wallet</title>
          <link rel="shortcut icon" href="/wallet.svg" />
          <link rel="apple-touch-icon" href="/wallet.svg" />
          <meta name="description" content="A financial dashboard project" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
