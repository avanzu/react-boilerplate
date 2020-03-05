import React from 'react'
import Maybe from '../hoc/Maybe'
import {prop} from 'ramda' 

const Message = ({ message }) => (<div className="col s12 right-align">{message}</div>)
const MaybeMessage = Maybe(prop('message'), Message)

export default defaultMessage =>  ({ message = defaultMessage  }) => (
  <div className="card-panel z-depth-0">
    <div className="row">
      <div className="col s12">
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      </div>
      <MaybeMessage message={ message } />
    </div>
  </div>

)
