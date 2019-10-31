import React from 'react'
import {FaGraduationCap,FaArrowRight} from 'react-icons/fa'
import HTML5 from "../assets/html5.svg";
import CSS3 from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import Nodejs from "../assets/nodejs.svg";
import Expressjs from "../assets/expressjs.svg";
import ReactjsIcon from "../assets/reacticon.svg";
import NPM from "../assets/npm.svg";
import Bootstrap from "../assets/bootstrap-4.svg";
import Nextjs from "../assets/next-js.svg";
import Git from "../assets/git.svg";
import MongoDB from "../assets/mongodb.svg";


function About({setProjectsActive}) {
    return (
        <section className="About">
            <div className="container">
               <div className="About-about">
                    <h2 className="title is-4">About me</h2>
                    <hr className="divider"/>
                    <p className="short-about">
                        I describe my self as someone who's hard working, fast learner, and fond of building great apps using modern tools.
                    </p>
               </div>
               <div className="About-Education">
                    <h2 className="title is-4">Education</h2>
                    <hr className="divider"/>
                    
                    
                        <h3 className="title is-6"><FaGraduationCap/>Electronics and Communication Engineering</h3>
                        <p>  2014 - 2019
                    </p>
                    <p className="short-edu">
                        Bachelor degree in engineering with honours.
                    </p>
               </div>
               <div className="About-skills">
                    <h2 className="title is-4">Skills</h2>
                    <hr className="divider"/>
                    <p className="short-about">
                    I am found of building web apps , technologies are just building blocks and I have no problem learning what ever technology necessary for the job but here is a few tools that I am already good at.
                    </p>
                    <div className="tool-icons-container">
                        <HTML5 className="tool-icon"/>
                       <CSS3 className="tool-icon"/>
                         <JS className="tool-icon"/>
                         <Bootstrap className="tool-icon"/>
                        <Nodejs className="tool-icon"/>
                       <Expressjs className="tool-icon"/> 
                       <MongoDB className="tool-icon"/>
                         <ReactjsIcon className="tool-icon"/> 
                        <Nextjs className="tool-icon"/>
                       <NPM className="tool-icon"/>
                        <Git className="tool-icon"/> 
                    </div>
                    <div className="next-page-button-container">
                        <button className="to-projects button is-danger is-medium" onClick={()=>setProjectsActive(true)}>Projects <FaArrowRight className="arrow"/></button>
                    </div>

               </div>
            </div>
        </section>
    )
}

export default About
