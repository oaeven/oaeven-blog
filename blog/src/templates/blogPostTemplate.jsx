import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"

//represents the blogpost pages under /blog/path
export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h2>{frontmatter.title}</h2>
        <h5 className="text-muted pb-3">{frontmatter.date}</h5>
        <div dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`