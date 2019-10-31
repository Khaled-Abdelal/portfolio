import React,{useState} from "react"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import SideComponent from "../components/SideComponent"
import About from "../components/About"
import Projects from "../components/Projects"

const IndexPage = () => {
  const [projectsActive, setProjectsActive] = useState(false)
  
  return (<Layout>
    <SEO title="Home" />
      <SideComponent/>
      {
       projectsActive?
        <Projects setProjectsActive={setProjectsActive}/> :<About setProjectsActive={setProjectsActive}/>
      }  
  </Layout>
)}

export default IndexPage


