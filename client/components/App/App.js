import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Counter from './../Counter/Counter';
import Counter2 from './../Counter/Counter2';

const App = memo(() => {
	
	const countRef = useRef();
	const [ count, setCount ] = useState( 1 );
	const reduxCount = useSelector( ( { counter } ) => ( counter.count ) );
	
	useEffect( ()=> {
		console.log( '[root][rendering...]', count, reduxCount );
	}, [ count, reduxCount ] ); 
	
	return (
		<>
			<span>root count: {reduxCount}/{count}</span>
			<div>
				<h4>redux</h4>
				<Counter />
				<h4>state</h4>
				<Counter2 onCount={setCount}/>
			</div>
		</>
	)
});

export default App