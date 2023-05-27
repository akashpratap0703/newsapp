import React from 'react'
import '../css/about.css'
export default function About() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    const opentab= (e,tabname)=>{
        for(var tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(var tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        e.currentTarget.classList.add('active-link');
        document.getElementById(tabname).classList.add("active-tab");

     }
  return (
    <div>
      <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={require("../images/profile.jpg")} alt="img"/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1>
                    <p>Highly skilled and reliable java developer looking to work as a junior java developer at a leading software company. My range of experience includes developing websites, and complex programs while pursuing education at university Kalinga Institute of Industrial Technology and working as a Associate Software Developer at HighRadius Technologies. I am skilled in MySQL, JavaScript, CSS, HTML, J2EE, SpringBoot ,Struts, Hibernate and more.</p>
                    <div className="tab-titles">
                        <p className="tab-links active-link" onClick={(event)=>opentab(event,"skills")}>Skills</p>
                        <p className="tab-links " onClick={(event)=>opentab(event,'experience')}>Experience</p>
                        <p className="tab-links" onClick={(event)=>opentab(event,'education')}>Education</p>
                    </div>
                    <div className="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Frontend</span><br></br>Create Web interfaces using HTML,CSS,Extjs,Reactjs</li>
                            <li><span>Backend</span><br></br>J2EE,Spring,Struts,Hibernate,SpringBoot</li>
                            <li><span>Database</span><br></br>Snowflake,MySql</li>
                            <li><span>IDE/Tools</span><br></br>VS Code,Eclipse,Git,Postman</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="experience">
                        <ul>
                            <li><span>2022 - Current</span><br></br>Associate Software Developer</li>
                            <li><span>2021 - 2022</span><br></br>Software Intern</li>
                        </ul>
                    </div>
                    <div className="tab-contents" id="education">
                        <ul>
                            <li><span>2018 - 2022</span><br/>Btech. at Kalinga Institute of Industrial Technology,Bhubaneshwar,Orissa.</li>
                            <li><span>2017 - 2018</span><br/>12th at Army Public School, Lucknow, UP.</li>
                            <li><span>2015 - 2016</span><br/>10th at Army Public School, Lucknow, UP.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
