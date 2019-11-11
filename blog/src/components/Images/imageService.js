import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageService = ({ imageName }) => {
    const data = useStaticQuery(graphql`
      fragment servicesImage on File {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  
      query {
        officeWorker: file(relativePath: { eq: "office_worker.png" }) {
          ...servicesImage
        }
  
        image2: file(relativePath: { eq: "students.jpg" }) {
          ...servicesImage
        }
  
        image3: file(relativePath: { eq: "flags.jpg" }) {
          ...servicesImage
        }
  
        image4: file(relativePath: { eq: "admission.jpg" }) {
          ...servicesImage
        }
  
        image5: file(relativePath: { eq: "support.jpg" }) {
          ...servicesImage
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
