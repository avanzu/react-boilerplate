import React from 'react'
import { Link, useRouteMatch as isActive } from 'react-router-dom'

const NavItem = ({ path, label, exact }) => (
    <li key={path} className={ isActive({path, exact}) ? 'active' : '' }>
        <Link to={path}>{label}</Link>
    </li>
)

export default NavItem
