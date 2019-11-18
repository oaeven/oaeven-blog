/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Menu from "./menu"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

        {/* <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> */}
        <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/themes/prism.css" rel="stylesheet" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.js"></script>
	      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/plugins/autoloader/prism-autoloader.min.js"></script> */}

        {/* if we need to have the boostrap jquery*/}
        {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> */}
        {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */}
      </Helmet>

      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {/* <div 
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      > */}
        <Menu/>
        {/* <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-fire"></span></a> */}
        {/* <i class="material-icons">face</i> */}
        <div style={{backgroundColor: "#EDF1F4"}} className="py-4">
            <main className="container" >{children}</main>
        </div>
        <Footer/>
      {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
