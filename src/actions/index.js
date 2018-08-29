import {SET_NAME} from './type'
export function set_name(name){
    return dispatch=>{
        return dispatch({
            type:SET_NAME,
            payload:name
        })
    }
}