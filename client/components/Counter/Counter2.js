import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import axios from 'axios'

import Counter from './../Counter/Counter';

const App = memo( ({onCount}) => {
	
	const countRef = useRef();
	const [ count, setCount ] = useState( 1 );
	
	const onIncrement = useCallback( (e) => {
		setCount( count + 1 );		
	}, [ count ] );
	const onDecrement = useCallback( (e) => {
		setCount( count - 1 );		
	}, [ count ] );
	
	const sendCount = ( e ) => {
		onCount( count );
		
		const options = {
			method: 'get'
			, url: 'http://localhost:3000/data'
			, params: {
				count
			}
		}
		
		axios(options).then( ( res ) => {
			console.log( 'success', res.data );
		}).catch( ( err ) => {
			console.error( err );
		});
	}
	
	useEffect( ()=> {
		console.log( 'rendering...' );		
	}, [ count ] ); 
	
	return (
		<>
			<span ref={ countRef }>{count}</span>
			<div>
				<button onClick={ onIncrement } >increment</button>
				<button onClick={ onDecrement } >decrement</button>
				<button onClick={ sendCount } >None</button>
			</div>
		</>
	)
});

export default App