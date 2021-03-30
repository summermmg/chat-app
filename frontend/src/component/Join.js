import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <h2 className="">Join in to Chat!</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1" 
                            placeholder="Enter name" 
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Room</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleFormControlInput2" 
                            placeholder="Enter room" 
                            onChange={e => setRoom(e.target.value)} 
                            required
                        />
                    </div>

                    {/* set querystring to target */}
                    <Link to={`/chat?name=${name}&room=${room}`}>
                        <button type="button" className="btn btn-primary">Join In</button>
                    </Link>
                </form>
            </div>    
        </div>
    )
}

export default Join
