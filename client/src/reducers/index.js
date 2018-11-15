import {combineReducers} from 'redux'
import creatureReducer from './creatureReducer'

export default combineReducers({
    creatures: creatureReducer
})