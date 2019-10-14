// Config React-init
import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './components/App/App'

// Config Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore( rootReducer );

function render( Component, flag=true ){
	Component = flag ? hot( Component ) : Component;
	ReactDOM.render( 
		<Provider store={ store }>
			<Component />
		</Provider>
	, document.getElementById('root') );
}

render( App );
