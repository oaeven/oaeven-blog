import React from "react"
import { FaGithub } from "react-icons/fa"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Projects</h2>
    <p>Hope to soon be able to showcase some projects here. First project is to create this blog and a Gatsby starter template based on the code to help others get started</p>

    <p>Code for blog on GitHub <FaGithub /> at <a href="https://github.com/oaeven/oaeven-blog"> https://github.com/oaeven/oaeven-blog</a>.</p>
  </Layout>
)

export default ProjectsPage
