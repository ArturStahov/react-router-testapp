import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import HomePage from './components/HomePage'
import About from './components/About'
import Details from './components/Details'
import NotFound from './components/NotFound'
import s from './components/style.module.css'
import OneNewsView from './components/OneNewsView'

export default class App extends Component{




    render(){
        return(
         <Router> 
            <ul>
                <li> <NavLink exact className={s.NavLink} activeClassName={s.ActivLink} to="/">Home</NavLink></li>
                <li> <NavLink className={s.NavLink} activeClassName={s.ActivLink} to='/about'>About</NavLink></li>
                <li> <NavLink className={s.NavLink} activeClassName={s.ActivLink} to='/details'>Details</NavLink></li>
            </ul>
            <Switch>
              <Route exact  path="/" component={HomePage}/>
              <Route path='/about' component={About} />
              <Route path='/details/:detailsID'component={OneNewsView}/>
              <Route path='/details' component={Details}/>
              <Route component={NotFound} />
            </Switch>
        </Router>
        )
    }
}

// https://hn.algolia.com/api/v1/search?query=popular&page=1