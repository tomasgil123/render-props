import 'src/styles/globals.css'
import 'tailwindcss/tailwind.css'
import PageWithLayoutType from 'src/types/pageWithLayout'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

type AppLayoutProps = {
  Component: PageWithLayoutType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}

function MyApp({ Component, pageProps }: AppLayoutProps): JSX.Element {
  const Layout = Component.layout ? Component.layout : React.Fragment

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
