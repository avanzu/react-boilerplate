import Types from '../actions/types'
import { compose, toLower, toUpper, head } from 'ramda'

const toHexCode = num => '#'.concat((num & 0x00FFFFFF).toString(16))
const hashCode = str => str.split('').map(s => s.charCodeAt(0)).reduce((hash, num) => num + (hash << 5) - hash, 0)
const nameBasedColor = compose(toHexCode, hashCode)
const initial        = compose(toUpper, head)

const enhancePost = ({ title, ...post }) => ({
    ...post, title, color: nameBasedColor(title), searchKey: toLower(title), initial: initial(title) 
})

const init = {
    error: '',
    isBusy: false,
    posts: []

}

const projects = when => when(init, {
    [Types.FETCH_POSTS_REQUESTED]: (state) => ({
        ...state, error: '', isBusy: true
    }),
    [Types.FETCH_POSTS_SUCCEEDED]: (state, { posts }) => ({
        ...state, isBusy: false, error: '', posts: posts.map(enhancePost),
    }),
    [Types.FETCH_POSTS_FAILED]: (state, { error }) => ({
        ...state, error, isBusy: false
    })
})

export default projects