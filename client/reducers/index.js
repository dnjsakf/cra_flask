import { combineReducers } from 'redux'
import counter from './counter'
import content from './content'

const rootReducer = combineReducers({
	counter
	, content
});

export default rootReducer;