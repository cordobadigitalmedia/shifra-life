import '@/css/tailwind.css'

import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { SEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import MDXComponents from '@/components/MDXComponents'

import { Provider } from "react-redux"
import store from "../store/index"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <MDXProvider components={MDXComponents}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
          </Head>
          <DefaultSeo {...SEO} />
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </MDXProvider>
      </Provider>
    </ThemeProvider>
  )
}
