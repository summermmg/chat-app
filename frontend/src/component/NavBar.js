import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ room, name, users, socket }) => {

    const disconnectHandler = () => {
        socket.disconnect()
    }

    return (
        <div>
            <ul className="nav">
                <li className="nav-item ">
                    <h5>🟢Room: {room}</h5>                    
                </li>
                <li className="nav-item">
                    <h5>🙎🏼‍♂️ {name}</h5>                    
                </li>
                <li className="nav-item">
                    <h5>current  {users.length} in room</h5>                    
                </li>

                <li className="nav-item dropdown">
                    <button className="btn btn-light btn-sm dropdown-toggle mb-2" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">👀 See who's in the room</button>
                    <ul className="dropdown-menu">
                        {
                            users.map(user => (
                                <li className="dropdown-item">{user.name}</li>
                            )) 
                        }
                    </ul>
                </li>

                <li className="nav-item">
                    <Link to={'/'}>
                        <button onClick={disconnectHandler} type="button" className="btn btn-light btn-sm">Leave chat room<i className="fas fa-sign-out-alt"></i></button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
