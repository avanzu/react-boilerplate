import React from 'react'
import { connect } from 'react-redux'
import { searchByTerm, disableSearch } from '../../actions'
import { compose, pathOr } from 'ramda'
const takeTargetValue = pathOr('', ['target', 'value'])

const Search = ({ searchByTerm, disableSearch }) => (

      <form>
        <div className="input-field">
          <input id="search" type="search" onChange={compose(searchByTerm, takeTargetValue)} required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons" onClick={ disableSearch }>close</i>
        </div>
      </form>
    
    
)

const mapDispatch = { searchByTerm, disableSearch }

export default connect(null, mapDispatch)(Search)
