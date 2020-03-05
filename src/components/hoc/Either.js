import React from 'react'
import {curry} from 'ramda'
const Either = curry((predicate, Left, Right, props) => predicate(props) ? <Right {...props} /> : <Left {...props}/>)

export default Either
