import {SET_NAME} from '../actions/type'
export default function(state=null,action){
    switch(action.type){
        case SET_NAME:{
            state = action.payload
            return state
        }
        default:return state
    }
}