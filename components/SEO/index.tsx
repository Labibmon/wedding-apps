import Head from 'next/head'
import { FC, ReactNode } from 'react'

type SEOPropType = {
}

const SEO: FC<SEOPropType> = ({

}) => {

  return (
    <>
      <title>The Wedding of Anggi &amp; Labib</title>

      {/* Link Tag */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="" />

      {/* Meta Tag */}
      <meta name="description" content="Wedding Event" />
      <meta name="robots" content="noindex, nofollow"></meta>
      <meta name="robots" content="index, follow" />

      {/* <meta property="og:title" content={title} key="ogtitle" />
      <meta property="twitter:title" content={title} key="twittertitle" />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} key="ogdescription" />
      <meta property="twitter:description" content={description} key="twitterdescription" />

      <meta property="og:image" content={image} key="ogimage" />
      <meta property="twitter:image" content={image} key="twitterimage" />
      <meta property="twitter:card" content="summary" />

      <meta property="og:url" content={url} key="ogurl" />
      <meta property="twitter:url" content={url} key="twitterurl" /> */}
    </>
  )

}

export default SEO

