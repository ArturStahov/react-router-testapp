import React,{Component} from 'react'
import axios from 'axios'
import {
  NavLink
} from "react-router-dom";

export default class Details extends Component{

  state={
    news:[]
  }

 async componentDidMount(){
 const response=await axios.get('https://hn.algolia.com/api/v1/search?query=popular&page=1')
   this.setState({
     news:response.data.hits
   })
  }

    render(){
        console.log(this.props.match)
        return(
      <>
      <h1>DetailsNews</h1>

      <ul>
        {this.state.news.map(item=>(
          <li  key={item.objectID}>
           <NavLink to={`${this.props.match.url}/${item.objectID}`}>{item.title}</NavLink> 
          </li>
        ))}
      </ul>
      </>

        )
    }
}