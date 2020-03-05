import Types from './types'
import {path} from 'ramda'

const isSearchEnabled = path(['search', 'enabled'])

export const enableSearch = () => ({
    type: Types.SEARCH_ENABLED
})

export const disableSearch = () => ({
    type: Types.SEARCH_DISABLED
})

export const searchByTerm = term => ({
    type: Types.SEARCH_TERM_CHANGED,
    term
})

export const clearSearchTerm = () => ({
    type: Types.SEARCH_CLEARED
})

export const toggleSearch = () => (dispatch, getState) => 
    isSearchEnabled(getState()) ?  dispatch(disableSearch()) : dispatch(enableSearch())
