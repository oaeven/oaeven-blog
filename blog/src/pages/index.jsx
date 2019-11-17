import React from "react"

import { graphql } from "gatsby"

import Layout from "../layouts/layout"
// import { OfficeWorkerImage } from "../components/image"
import SEO from "../components/seo"
import ImageService from '../components/Images/imageService';
import BlogCard from './../components/blogcard/blogCard';

const IndexPage = ({data}) => {

  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark

  // debugger;

  console.log(allMarkdownRemark);

  const blogPostList = allMarkdownRemark.nodes;

  const blogPostElements = blogPostList.map((blogPost, key) => {
      return (
          <BlogCard key={key} blogPost={blogPost.frontmatter}></BlogCard>
      )
  });

  console.log(data);
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Øyvind Arne Evensen</h1>
      <p>Independent Fullstack Software Developer / Solution Architect</p>
      <div style={{ maxWidth: "500px" }}>
        <ImageService imageName="officeWorker" />
      </div>

      <h5>Most recent blogposts</h5>
      <div className="mt-3">{blogPostElements}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {  
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    limit: 2,
    filter: {frontmatter: {draft: {ne:true}}}      
  ) {
      nodes {
        frontmatter {
          title
          path
          date
          ingress
        }
      }
    }
  }
`
