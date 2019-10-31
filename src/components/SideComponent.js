import React from 'react'
import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import Img from "gatsby-image"
import { graphql,useStaticQuery } from "gatsby"


function SideComponent() {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "profile-pic.jpg" }) {
          childImageSharp {
            fixed(width: 128, height: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
  `)
    
    return (
        <section className="SideComponent">
            <div className="container">
                <figure className="image is-128x128 profile-pic">
                    <Img style={{borderRadius:'50%'}} fixed={data.file.childImageSharp.fixed} />
                </figure>
                <h3 className="title is-4 name"><span className="first-name">Khaled</span> Abdelal</h3>
                <p className="job">web developer</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/khaled-abdelal-a73b3a125/"><FaLinkedinIn /></a>
                    <a href="https://github.com/Khaled-Abdelal"><FaGithub/></a>
                    
                </div>
                <a href = "mailto: kh.fyeo@gmail.com" className="button is-info is-block is-rounded emailme">Email me</a>
            </div>
        </section>
    )
}

export default SideComponent


