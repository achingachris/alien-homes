import Head from 'next/head'

const HeadLayout = ({ title, description }) => {
  return (
    <Head>
      <title>The Mombasa Trendsetter</title>
      <meta name='description' content='The Mombasa Trendsetter' />
      <meta name='author' content='Chris Achinga' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default HeadLayout
