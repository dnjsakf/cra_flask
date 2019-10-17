export const SELECT = 'request/SELECT';
export const SELECT_FAILURE = 'request/SELECT_FAILURE';
export const SELECT_SUCCESS = 'request/SELECT_SUCCESS';

export const onSelect = ( reqOption )=>({ type: SELECT, payload: reqOption });

const initState = {
    res: null
    , status: 0
    , cancleToken: null
    , list: []
    , maxLength: 0
}
const content = ( state = initState, action )=>{

    console.log('call reducer', action ); 

    switch( action.type ){
        case SELECT:
            return {
                ...state
                , status: 1
                , list: []
                , maxLength: 0
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