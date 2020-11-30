import React,{Component} from 'react'
import axios from 'axios'

export default class About extends Component{

  state={
      newsItem:null
  }

//  async componentDidMount(){
//  const response=await axios.get(`http://hn.algolia.com/api/v1/items/:${this.props.match.params.detailsID}`)
//  console.log(response.data)
// //    this.setState({
// //      authors:response.data. делаем запрос за одной новостью по ид новости на бекенд
// //    })
//   }

    render(){
        return(
      <>
      <h1>One news Page</h1>

        <p>News id :{this.props.match.params.detailsID}</p>
      </>

        )
    }
}