/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const blogPageTemplate = path.resolve(`src/templates/blogPageTemplate.jsx`)

  const blogPageResult = await graphql(`
    {  
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 1000,
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
  `)

  // const result = await graphql(`
  //   {
  //     allMarkdownRemark(sort: {order:DESC, fields: [frontmatter___date]}) {
  //       totalCount
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             path
  //             date
  //           }
  //         }
  //         previous {
  //           frontmatter {
  //             title
  //             path
  //             date
  //           }
  //         }
  //         next {
  //           frontmatter {
  //             date
  //             path
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //create blogposts
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  //create blog frontpage
  createPage({
    path: "/blog",
    component: blogPageTemplate,
    context: {posts: blogPageResult.data.allMarkdownRemark.nodes}
  });
}