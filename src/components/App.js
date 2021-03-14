import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route}  from 'react-router-dom';
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import Nav from './Nav'
import TweetPage from "./TweetPage";
import NewTweet from "./NewTweet";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className='container'>
                        <Nav/>
                        {this.props.loading === true ? null : 
                            <div>
                                <Route path='/' exact component={Dashboard}/>
                                <Route path='/tweet/:id' component={TweetPage}/>
                                <Route path='/new' exact component={NewTweet}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProp({authedUser}){
    return {
        loading : authedUser === null
    }
}

export default connect(mapStateToProp)(App);
