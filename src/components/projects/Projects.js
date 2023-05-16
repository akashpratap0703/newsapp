import React from 'react';
import  "../../css/projects.css"
import ProjectCard from './ProjectCard';
import project from './projectMetaData'

export default function Projects() {
  
  return (
    <div className='container  my-2'>
         <h1 className="sub-title">Projects</h1>
       <div className="row">
        {project.map((element)=>{return <div className="col-md-6"  key={element.name} >
                < ProjectCard title={element.name} description={element.description} imageUrl={element.img} techstack={element.techStack} label={element.label} codeurl={element.codeurl} visiturl={element.visiturl} isDisableVisit ={element.isDisableVisit} isDisableCode={element.isDisableCode}/>
            </div>})}
       </div>
        <div className="contianer d-flex justify-content-between">
        </div>
      </div>
  )
}
