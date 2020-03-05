import React from 'react'
import {curry} from 'ramda'
const Maybe = curry((predicate, Right, props) => predicate(props) ?  <Right {...props} />: null)

export default Maybe
