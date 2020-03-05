import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { retrievePosts } from '../actions'
import PostCollection from '../components/Posts'

const Index = ({ retrievePosts, ...props }) => {
    
    useEffect(() => { document.title = 'DEMO // ' })
    useEffect(() => { retrievePosts() }, [retrievePosts])

    return (
        <div className="container">
            <PostCollection {...props} />
        </div>
    )
}
const mapState = ({ posts, search }) => ({
    isBusy  : posts.isBusy,
    groupIds: posts.groupIds,
    posts: posts.posts.filter(Post => Post.searchKey.includes(search.term)),
    error   : posts.error
})

const mapDispatch = {
    retrievePosts: retrievePosts
}

export default connect(mapState, mapDispatch)(Index)
