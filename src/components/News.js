import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalSize:0,
        }
    }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71567857be1f4570afefafb4b429a4d1&page=1&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,totalSize:parsedData.totalResults})
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalSize/this.props.pageSize)){}else{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71567857be1f4570afefafb4b429a4d1&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles,
        page:this.state.page + 1,
    })
}
  }

  handlePrevClick = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=71567857be1f4570afefafb4b429a4d1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles,
        page:this.state.page - 1,
    })
  }
  render() {
    return (
      <div className='container  my-3'>
        <h2>News Central - Top Headline</h2>

        <div className="row">
            {this.state.articles.map((element)=>
            {return <div className="col-md-4"  key={element.url} >
                < NewsItem title={element.title!=null?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>})}  
        </div>
        <div className="contianer d-flex justify-content-between">
            <button disabled={this.state.page<=1 } type="button" className='btn btn-dark' onClick={this.handlePrevClick }>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalSize/this.props.pageSize)}type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
