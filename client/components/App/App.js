import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import Controller from './../Controller/Controller'
import Container from './../List/Container'

const ACTIVE_STYLE = {
    color: 'red'
}

class App extends Component {
    state = {
        count: 1
    }

    componentWillMount(){
        console.log('[componentWillMount]');
    }
    componentDidMount(){
        console.log('[componentDidMount]');
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

    onClick = (e)=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <BrowserRouter>
                <span>{this.state.count}</span><button onClick={this.onClick}></button>
                <Link to="/">Home</Link>
                <ul>
                    <li><NavLink exact to="/" activeStyle={ ACTIVE_STYLE }>Home</NavLink></li>
					<li><NavLink exact to="/list" activeStyle={ ACTIVE_STYLE }>page1</NavLink></li>
					<li><NavLink exact to="/list/2" activeStyle={ ACTIVE_STYLE }>page2</NavLink></li>
                    <li><NavLink exact to="/controller" activeStyle={ ACTIVE_STYLE }>controller</NavLink></li>
                </ul>
                <div>
                    <Switch>
                        <Route exact path="/controller" render={(props)=><Controller {...props}/>}/>
                        <Route exact path="/controller/:charType" render={(props)=><Controller {...props}/>}/>
						
                        <Route path="/list/:page" render={( props )=><Container {...props}/>} />
						<Route path="/list" render={( props )=><Container {...props}/>} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
};

export default App;