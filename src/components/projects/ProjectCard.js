import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className='my-3'>
    <div className="card" >
    <span className ="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{props.label}</span>
        <img src={`${props.imageUrl}`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.codeurl} disabled={true} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mx-3">View Source Code</a>
            <a href={props.visiturl} disabled={props.isDisableVisit} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mx-3">View Demo</a>
        </div>
    </div>
  </div>
  )
}
