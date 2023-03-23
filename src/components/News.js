import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general',
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
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
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71567857be1f4570afefafb4b429a4d1&page=1&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,totalSize:parsedData.totalResults})
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalSize/this.props.pageSize)){}else{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71567857be1f4570afefafb4b429a4d1&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({
        articles:parsedData.articles,
        page:this.state.page + 1,
    })
}
  }

  handlePrevClick = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71567857be1f4570afefafb4b429a4d1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
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
        <h2 className='text-center' style={{margin:'35px 0px'}}>News Central - Top Headline</h2>

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
