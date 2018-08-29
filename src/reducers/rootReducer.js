import {combineReducers} from 'redux'
import name_reducer from './name_reducer'
const rootReducer = combineReducers({
    name:name_reducer
})

export default rootReducer