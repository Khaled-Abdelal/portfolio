import React,{useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideComponent from "../components/SideComponent"
import About from "../components/About"
import Projects from "../components/Projects"


const IndexPage = () => {
  const [projectsActive, setProjectsActive] = useState(false)
  
  return (<Layout>
    <SEO title="Khaled Abdelal" />
      <SideComponent/>
      {
       projectsActive?
        <Projects setProjectsActive={setProjectsActive}/> 
        :
        <About setProjectsActive={setProjectsActive}/>
      }  
  </Layout>
)}

export default IndexPage


