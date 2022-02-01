import Head from 'next/head'
import React from 'react'

type Props = {
  route: string
}

const SEO: React.FC<Props> = ({ route }) => {

  const dynamicTitle = (route: string) => {
    if (route === '/') return "Welcome to the Crypto App"
    // if (route.includes('/brand')) return route.charAt(13).toUpperCase() + route.slice(14) + " | Hype Kicks"
  };

  return(
    <Head>
      <title>{dynamicTitle(route)}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Everyone's new favorite crypto platform"></meta>
        <meta charSet="UTF-8"></meta>
        <meta name="msapplication-TileColor" content="#1A1E22" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

export default SEO
