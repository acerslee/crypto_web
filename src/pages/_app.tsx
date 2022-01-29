import '../styles/globals.css'
import App from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import { SessionProvider } from 'next-auth/react'

type AppProps<P = any> = {
  Component: P
  ctx: P
}

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
    const { Component, pageProps: { session, ...pageProps} } = this.props

    return(
      <SessionProvider session={session}>
        <Provider store = {store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    )
  }
}

export default MyApp
