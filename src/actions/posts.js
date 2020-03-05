import Types from './types'
import  { fetchPosts } from '../api'

export const fetchPostsRequested = () => ({
    type: Types.FETCH_POSTS_REQUESTED
})

export const fetchPostsSucceeded = (posts) => ({
    type: Types.FETCH_POSTS_SUCCEEDED,
    posts,
})

export const fetchPostsFailed = (error) => ({
    type: Types.FETCH_POSTS_FAILED,
    error
})

export const retrievePosts = () => dispatch => new Promise(resolve => {
    dispatch(fetchPostsRequested())
    fetchPosts()
        .then((posts = []) => dispatch(fetchPostsSucceeded(posts)))
        .catch( error => dispatch(fetchPostsFailed(error)))
        .then(resolve)
})