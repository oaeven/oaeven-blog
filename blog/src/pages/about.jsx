import React from "react"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"

import Layout from "../layouts/layout"
// import LiveWorkCreateImage from "../images/random/claudio-schwarz-purzlbaum-6lZgPlQ0hOU-unsplash.jpg"
import SEO from "../components/seo"
import ImageService from '../components/Images/imageService';

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>About</h2>

    <p>This blog and personal webpage was created to play around a bit, to be able to write some blog posts about usefull technical stuff and to also showcase a bit what i know and can do. The first few blogpost are about finding the right tools to make this website and some helpfull advice learned along the way developing this site. The first post starts here <Link to="/blog/static-site-generator-blog">Creating a blog</Link></p>

    {/* <img className="py-3 pl-0 col-10 col-sm-6" src={LiveWorkCreateImage} alt="Live Work Create" /> */}

    <div className="pb-3" >
      <ImageService imageStyle={{ maxWidth: "500px" }} imageName="liveWorkCreate" alt="Live Work Create" />
    </div>

    <h6>The website was created with the following stack<a href="https://jamstack.org/" target="_blank"  rel="noopener noreferrer">(JAM stack)</a></h6>
   
    <ul>
      <li>ReactJs font-end javascript library</li>
      <li>Gatsby static site generator</li>
      <li>Built and hosted on Netlify</li>
    </ul>

    <p className="pt-3">Complete sourcecode for this website can be found on Github <FaGithub /> at <a href="https://github.com/oaeven/oaeven-blog"> https://github.com/oaeven/oaeven-blog</a>. </p>
    
    <p>Feel free to use it for inspiration or in your own projects :) A reference back to my webpage <a href="/"> www.oaevensen.com</a> would be appreciated.</p>

  </Layout>
)

export default AboutPage
