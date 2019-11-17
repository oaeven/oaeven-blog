/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

const BlogCard = ({ key, blogPost }) => {
    return (
        <>
           <div key={key} className="card">
                <div className="card-body">
                    <h5 className="card-title">{blogPost.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{blogPost.date}</h6>
                    <p className="card-text">{blogPost.ingress}</p>
                    <a href={blogPost.path} className="card-link">Read more</a>
                </div>
            </div>
        </>
    )
}

BlogCard.propTypes = {
    key: PropTypes.number,
    blogPost: PropTypes.object
}

export default BlogCard 
