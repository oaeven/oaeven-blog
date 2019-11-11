import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import ImageService from '../components/Images/imageService';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>Hi, my name is Øyvind Evensen</p>

    created with gatsby static site generator
    reactjs front javascript web framework
    netlify hosting provider for static websites

    code for blog on github https://github.com/oaeven/oaeven-blog
  </Layout>
)

export default AboutPage
