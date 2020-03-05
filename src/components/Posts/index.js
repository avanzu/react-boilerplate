import React from 'react'
import Post from '../Post'
import { prop, isEmpty, compose } from 'ramda'
import IndicateBusy from '../IndicateBusy'
import ErrorMessage from '../ErrorMessage'
import Nothing from '../Nothing'
import Either from '../hoc/Either'

const Items = ({ of = [] }) => of.map(({ id, ...props }) => (
    <div key={id} className="col s12"><Post {...{ ...props, id }} /></div>
))

const PostCollection = ({ posts }) => (
    <div className="row">
        <Items of={posts} />
    </div>
)

const isEmptyList = compose(isEmpty, prop('posts'))
const isError = prop('error')
const isBusy  = prop('isBusy')

const PostsOrNothing = Either(isEmptyList, PostCollection, Nothing('There are no Posts :('))
const PostsOrError   = Either(isError, PostsOrNothing, ErrorMessage)
const PostsOrBusy    = Either(isBusy, PostsOrError, IndicateBusy('Loading Posts...'))




export default PostsOrBusy