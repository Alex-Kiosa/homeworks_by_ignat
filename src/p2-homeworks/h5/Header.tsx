import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

function Header() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <NavLink className="nav-item" activeClassName="nav-item-active" to={PATH.PRE_JUNIOR}>pre-junior </NavLink>
                <NavLink className="nav-item" activeClassName="nav-item-active" to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className="nav-item" activeClassName="nav-item-active" to={PATH.JUNIOR_PLUS}>junior +</NavLink>
            </div>
            <div className="nav-title button">Select level</div>
        </div>
    )
}

export default Header
