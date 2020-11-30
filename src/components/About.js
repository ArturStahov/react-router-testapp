import React,{Component} from 'react'
import axios from 'axios'
import {
    NavLink,
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import AuthorView from './AuthorViews'

export default class About extends Component{

  state={
    authors:[]
  }

 async componentDidMount(){
 const response=await axios.get('https://hn.algolia.com/api/v1/search?query=popular&page=1')
   this.setState({
     authors:response.data.hits
   })
  }

    render(){
        return(
      <>
      <h1>About news authors</h1>

      <ul>
        {this.state.authors.map(item=>(
          <li  key={item.objectID}>
        <NavLink to={`${this.props.match.url}/${item.objectID}`}>{item.author}</NavLink>    
          </li>
        ))}
      </ul>
      
      {this.state.authors.length>0&&<Route path={`${this.props.match.path}/:authorID`} 
          render={(props)=>{
               const newsID=props.match.params.authorID
               console.log(newsID)
               const news=this.state.authors.find(item=>item.objectID===newsID)
               console.log(news)
               
               return <AuthorView {...props} news={news} />
           }}/>}
          
      
      </>

        )
        // обезательно делать проверку на заполнение стейта 
      //потому как асинхронный код в рендере роутера выведет underfined
    }
}