import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
// import { OfficeWorkerImage } from "../components/image"
import SEO from "../components/seo"
import ImageService from '../components/Images/imageService';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: "1200px", marginBottom: "1.45rem" }}>
      <OfficeWorkerImage />
    </div> */}
    <div style={{maxWidth: "500px"}}>
      <ImageService imageName="officeWorker" />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
