import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ room,users }) => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item ">
                    <h5>🟢Room: {room}</h5>                    
                </li>
                <li className="nav-item">
                    <h5>🙎🏼‍♂️Current users in room: {users.length}</h5>                    
                </li>
                <li className="nav-item">
                    <Link to={'/'}>
                        <button type="button" className="btn btn-light btn-sm">Leave chat room<i className="fas fa-sign-out-alt"></i></button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
