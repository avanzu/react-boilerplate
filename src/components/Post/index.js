import React from 'react'
import { connect } from 'react-redux'
import PostImage from './PostImage'

const Post = ({ title, id, body, userId, ...props }) => (

  <div key={id} className="card horizontal Post">
    <PostImage {...props} />
    <div className="card-stacked">
      <div className="card-content">
        <span className="card-title activator">{title}</span>
        
        <p className="Post-description">{body}</p>
        
      </div>
    </div>
  </div>

)

const mapState = (state, self) => ({
  
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Post)

