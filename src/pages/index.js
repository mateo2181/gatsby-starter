import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ImagesDogs from "../components/images"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME</h1>
    <div>
      <ImagesDogs />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
