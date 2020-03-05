import Types from '../actions/types'
import {defaultTo, toLower, compose} from 'ramda'
const normalizeTerm = compose(toLower, defaultTo(''))

const init = {
    enabled: false,
    term: '',
}

export default when => when(init, {
    [Types.SEARCH_ENABLED]: (state) => ({
        ...state, enabled: true
    }),
    [Types.SEARCH_DISABLED]:(state) => ({
        ...state, enabled:false, term: ''
    }),
    [Types.SEARCH_TERM_CHANGED]: (state, { term }) => ({
        ...state, term: normalizeTerm(term), enabled: true
    }),
    [Types.SEARCH_CLEARED]: (state) => ({
        ...state, term: ''
    })
})