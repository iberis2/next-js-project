import Head from 'next/head'
import { Noto_Sans_KR } from 'next/font/google'
import Container from '@/components/Container'
import Header from '@/components/Header'
import { ThemeProvider } from '@/lib/ThemeContext'
import '@/styles/global.css'

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJs Shopping Mall</title>
        <link href='/nextIcon.ico' rel='icon' />
      </Head>
      <main className={notoSansKR.className}>
        <ThemeProvider>
          <Header />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </main>
    </>
  )
}
