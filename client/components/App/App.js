import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Controller from './../Controller/Controller'
import Container from './../List/Container'
import Layout from './../Layout/Layout'
import Header from './../Layout/Header'
import Section from './../Layout/Section'

const stylesheet = {
    header: {
        'height': "30%"
        , 'width': "100%"
    },
    section: {
        'height': "auto"
        , 'width': '100%'
    },
    list: {
        'list-style': 'none'
        , 'padding': '0'
        , 'margin': '0'
        , '& li': {
            'margin-right': '10px;'
        }
        , '& li:last-child': {
            'display': 'block'
        }
        , '& li:hover': {
            'font-size': '25px'
        }
    },
    layout: {
        
    }
};

const ACTIVE_STYLE = {
    color: 'red'
};

function handleKeyPress( e ){
    e.preventDefault();

    console.log( e );
}

class App extends Component {
    
    classes = this.props.classes

    componentWillMount(){
        console.log('[componentWillMount]');
    }
    componentDidMount(){
        const html = document.querySelector('html')
        html.removeEventListener('keypress', handleKeyPress);
        html.addEventListener('keypress', handleKeyPress);
    }
    componentDidUpdate(prevState, curtState, a, b){
        console.log('[componentDidUpdate]', prevState, curtState, a, b);
    }

    shouldComponentUpdate(prevProps, prevState){
        console.log('[shouldComponentUpdate]', prevProps, prevState);
        return true;
    }

    componentWillUnmount(){
        console.log('[componentWillUnmount]');
    }

    render(){
        return (
            <Layout className={ this.classes.layout }>
                <Router>
                    <Header className={ this.classes.header }>
                        <ul className={ this.classes.list }>
                            <li><NavLink exact to="/" activeStyle={ ACTIVE_STYLE }>Home</NavLink></li>
                            <li><NavLink exact to="/list" activeStyle={ ACTIVE_STYLE }>page1</NavLink></li>
                            <li><NavLink exact to="/list/2" activeStyle={ ACTIVE_STYLE }>page2</NavLink></li>
                            <li><NavLink exact to="/controller" activeStyle={ ACTIVE_STYLE }>controller</NavLink></li>
                        </ul>
                    </Header>
                    <Section className={ this.props.classes.section }>
                        <Switch>
                            <Route exact path="/controller" render={(props)=>(<Controller {...props}/>)}/>
                            <Route exact path="/controller/:charType" render={(props)=>(<Controller {...props}/>)}/>
                            <Route exact path="/list" render={( props )=>(<Container {...props}/>)}/>
                            <Route path="/list/:page" render={( props )=>(<Container {...props}/>)}/>
                        </Switch>
                    </Section>
                </Router>
            </Layout>
        )
    }
};

App.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(stylesheet)(App);