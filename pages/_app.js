import Container from '@/components/Container'
import Header from '@/components/Header'
import { ThemeProvider } from '@/lib/ThemeContext'
import '@/styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJs Shopping Mall</title>
        <link href='/nextIcon.ico' rel='icon' />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
