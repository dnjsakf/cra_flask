export const SELECT = 'request/SELECT';
export const SELECT_FAILURE = 'request/SELECT_FAILURE';
export const SELECT_SUCCESS = 'request/SELECT_SUCCESS';

export const onSelect = ( payload )=>({ type: SELECT, payload: payload });

const initState = {
    res: null
    , page: 1
    , navPage: 0
    , rowsPerPage: 5
    , status: 0
    , cancleToken: null
    , list: []
    , maxLength: 0
}
const content = ( state = initState, action )=>{

    console.log('call reducer', state, action ); 

    switch( action.type ){
        case SELECT:
            return {
                ...state
                , page: action.payload.params.page
                , navPage: action.payload.params.page - 1
                , rowsPerPage: action.payload.params.rowsPerPage
                , res: null
				, status: 1
            }
        case SELECT_SUCCESS:
            return {
                ...state
                , res: action.payload
                , status: action.payload.status
                , list: action.payload.data.list
                , maxLength: action.payload.data.maxLength
            }
        case SELECT_FAILURE:
            return {
                ...state
                , res: null
                , status: action.payload.status
                , list: []
                , maxLength: 0
            }
        default:
            return state;
    }
}

export default content;