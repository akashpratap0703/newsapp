import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello")
    }
    
    render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props; 
    return (
      <div className='my-3'>
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}..</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
