import '../styles/globals.css'
import App from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import SEO from '../components/SEO'

type AppProps<P = any> = {
  Component: P
  ctx: P
}

const breakpoints = createBreakpoints({
  sm: '711px',
  md: '1024px',
  lg: '1440px',
  xl: '2000px',
  '2xl': '2001px'
})

const theme = extendTheme({ breakpoints })

class MyApp extends App {
  static async getServerSideProps({ Component, ctx }: AppProps) {
    let pageProps = { query: String };
    if (Component.getServerSideProps) {
      pageProps = await Component.getServerSideProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const {
      Component,
      router,
      pageProps: {
        session,
        ...pageProps
      }
    } = this.props

    return(
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Provider store = {store}>
            <SEO route={router.asPath} />
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </ChakraProvider>
    )
  }
}

export default MyApp
