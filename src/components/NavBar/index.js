import React from 'react'
import NavItm from './NavItem'
import {connect} from 'react-redux'
import {toggleSearch} from '../../actions'
import Search from '../Search'
import Either from '../hoc/Either'
import { compose } from 'ramda'
const prevent = e => e.preventDefault()


const NavItemCollection = ({ elements }) => elements.map(NavItm)

const DefaultNav = ({ brandName, elements, toggleSearch }) => (
    <div className="nav-wrapper container">
        <a href="/" className="brand-logo">{ brandName }</a>
        <ul className="right">
            <li><a href="#!" onClick= { compose(toggleSearch, prevent)  } ><i className="material-icons">search</i></a></li>
            <NavItemCollection elements={elements} />
        </ul>
    </div>
)

const SearchNav = () => (
    <div className="nav-wrapper"><Search /></div>
)

const NavbarWithSearch = Either(({ isSearchEnabled }) => isSearchEnabled, DefaultNav, SearchNav)

const NavBar = (props) => (
    <div className="navbar-fixed">
    <nav className=" teal darken-3 z-depth-2">
        <NavbarWithSearch {...props} />
    </nav>
    </div>
)

const mapState = ({search}) => ({
    isSearchEnabled: search.enabled
})

const mapDispatch = {toggleSearch}

export default connect(mapState, mapDispatch)(NavBar)
