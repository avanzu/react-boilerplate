import { combineReducers } from 'redux'
import posts from './posts'
import search from './search'

const when = (init, pattern) => (state = init, {type, ...payload}) => pattern[type] ? pattern[type](state, payload) : state

export default combineReducers({ 
    posts: posts(when),
    search: search(when)
})