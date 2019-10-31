import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"
import { FaArrowLeft } from 'react-icons/fa'

const projectsData = [
  { title:'Eventk',
    description:'Eventk is a real time web app for events based on a map',
    img:'./',
    onGithub:{link:'https://github.com/Khaled-Abdelal/eventk',disabled:false},
    visit:{link:'https://eventk-client.herokuapp.com/',diabled:false}  
  },
  { title:'BookTrade',
    description:'BookTrade is a trading club based on google book api built with mern stack',
    img:'./',
    onGithub:{link:'https://github.com/Khaled-Abdelal/book-trade',disabled:false},
    visit:{link:'https://kheled-book-trade.herokuapp.com/',diabled:false}  
  },
  { title:'Portfolio',
    description:'Portfolio page based on react gatsby static site generator',
    img:'./',
    onGithub:{link:'link',disabled:false},
    visit:{link:'link',disabled:true}  
  }
]

function Projects({setProjectsActive}) {
  const data = useStaticQuery(graphql`
    query {
     Eventk: file(relativePath: { eq: "eventk.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    BookTrade: file(relativePath: { eq: "bookTrade.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          }
        }
      }
    Portfolio: file(relativePath: { eq: "portfolio.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <section className="Projects">
        <div className="container">
          <h3 className="title is-4">Projects</h3>
          <hr className="divider"/>
          <div className="columns">
            {
              projectsData.map((project)=>{
                
                return(
                  <div className="column is-4" key={project.title}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <Img fluid={data[project.title].childImageSharp.fluid} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{project.title}</p>
                        </div>
                      </div>
      
                      <div className="content">
                          {project.description}
                        <br/>
                          </div>
                        </div>
                          <footer className="card-footer">
                            <a href={project.onGithub.link} className="card-footer-item button is-success" 
                              disabled={project.onGithub.disabled}>See Code</a>
                            <a href={project.visit.link} className="card-footer-item button is-link " disabled={project.visit.disabled}>Visit</a>
                        </footer>
                      </div>
                      
                  </div>
                )
              })
            }
            
        </div>
            <div className="next-page-button-container">
             <button onClick={()=>{setProjectsActive(false)}} className="to-about button is-danger is-medium"><FaArrowLeft className="arrow"/> About</button>
            </div>
        </div>
 
    </section>
    )
}

export default Projects
