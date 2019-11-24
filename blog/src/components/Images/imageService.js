import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageService = ({ imageName }) => {
    const data = useStaticQuery(graphql`
        query ImageQueries {
            officeWorker: file(relativePath: { regex: "/office_worker/" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            } 
            liveWorkCreate: file(relativePath: { regex: "/claudio-schwarz-purzlbaum-6lZgPlQ0hOU-unsplash/" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            profilePictureSmall: file(relativePath: { regex: "/profile_picture_smaller/" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <Img fluid={data[imageName].childImageSharp.fluid} />
    )
}

ImageService.propTypes = {
    imageName: PropTypes.string.isRequired,
}

export default ImageService
