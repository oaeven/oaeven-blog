import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"
import BlogCard from './../components/blogcard/blogCard';

//represents the blog frontpage with url /blog
export default function BlogPageTemplate(data) {
    const blogPostList = data.pageContext.posts;

    const blogPostElements = blogPostList.map((blogPost, key) => {
        return (
            <BlogCard key={key} blogPost={blogPost.frontmatter}></BlogCard>
        )
    });

    return (
        <Layout>
            <SEO title="Home" />
            <h2>Blogposts</h2>
            <div className="mt-3">{blogPostElements}</div>
        </Layout>
    )
}
