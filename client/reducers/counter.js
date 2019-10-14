const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const INIT = 'counter/INIT';

export const onIncrement = ( ) => ( { type: INCREMENT } );
export const onDecrement = ( ) => ( { type: DECREMENT } );
export const onInit = ( init ) => ( { type: INIT, payload: init } );


const initState = {
	count: 0
}

const counter = ( state = initState, action ) => {
	switch( action.type ){
		case INCREMENT:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - 1
			}
		case INIT:
			return {
				...state,
				count: action.payload
			}
		default:
			return state;
	}
}

export default counter;