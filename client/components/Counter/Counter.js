import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { onIncrement, onDecrement, onInit } from './../../reducers/counter'
import axios from 'axios'

const Counter = memo(() => {
	
	const countRef = useRef();
	const { count } = useSelector( ( state ) => ( state.counter ) );
	const dispatch = useDispatch();
	
	const onIncrement = useCallback( (e) => {
		dispatch({type:'counter/INCREMENT'});
	}, [ dispatch ] );
	
	const onDecrement = useCallback( (e) => {
		dispatch({type:'counter/DECREMENT'});
	}, [ dispatch ] );
	
	const onInit = useCallback( (e) => {
		dispatch({type:'counter/INIT', payload: 1});
	}, [ dispatch ] );
	
	useEffect( ()=> {
		console.log( 'rendering...' );
	}, [ count ] ); 
	
	return (
		<>
			<span ref={ countRef }>{count}</span>
			<div>
				<button onClick={ onIncrement } >increment</button>
				<button onClick={ onDecrement } >decrement</button>
				<button onClick={ onInit } >init</button>
			</div>
		</>
	)
});

export default Counter