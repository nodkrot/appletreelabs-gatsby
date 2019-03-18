import React from "react"
import Helmet from "react-helmet"
import favicon from "src/images/favicon.ico"

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Appletreelabs - The Product Laboratory</title>
      <meta name="description" content="The Product Laboratory" />
      <meta name="keywords" content="digital, agency, product, laboratory, html, website" />
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
  )
}
