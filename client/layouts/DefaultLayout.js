import Head from 'next/head'

export default function defaultLayout({children, title = 'GeoSat'}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon" />
    </Head>
    <main style={{maxWidth: '1280px', margin: 'auto'}}>
      {children}
    </main>
    </>
  )
}