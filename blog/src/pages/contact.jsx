import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import { FaFly } from "react-icons/fa"
import ProfilePicture from "../images/profile/profile_picture_smaller.png"
// import ImageService from '../components/Images/imageService';

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Contact</h2>
    <p>Hi, my name is Øyvind Arne Evensen</p>

    <img className="py-2" src={ProfilePicture} alt="Profile" />

    <p>I have worked as a software developer for over 12 years and is proficient in both frontend and backend development. After being in a consultancy company for a decade and then inhouse for over a year, I have decided it was time to try the path of being an independent developer and try to go my own ways <FaFly /></p>

    <h6>Key skills</h6>
    <ul className="compact-list">
      <li>Solution Architect</li>
      <li>Backend development in .Net and Java</li>
      <li>Frontend development in ReactJs and Angular</li>
      <li>DevOps</li>
    </ul>

    <p>If you have a business oportunity, have an idea for a project or just want to chat about a blogpost please dont be afraid to reach out</p>

    <h6>Contact details:</h6>
    <ul className="compact-list">
      <li>Email adress: contact @ oaevensen.com</li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/oaevensen/">https://www.linkedin.com/in/oaevensen/</a></li>
    </ul>


  </Layout>
)

export default ContactPage
