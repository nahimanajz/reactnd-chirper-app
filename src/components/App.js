import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Nav from './Nav';

class App extends Component {
  componentDidMount(){
   this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
      <div> 
        <Nav />
        <LoadingBar />
        {
          this.props.loading === true ? null :
          <div>
            <Route exact path='/' component={Dashboard} />
            <Route  path='/new' component={NewTweet} />
            <Route  path='/tweet/:id' component={TweetPage} />
          </div>
           
        }
      </div>
      </BrowserRouter>
      
    )
  }
}
function mapStateToProps({authedUser}){
 
 return {loading: authedUser === null}
}

export default connect(mapStateToProps)(App);