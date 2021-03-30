import React from 'react'

const TextBox = ({ message, setMessage,room,socket }) => {
    const onSendHandler = () => {
        //after emit sendMessage event, run the callback function 
        socket.emit('createMessage', {room, message}, ()=> setMessage(''))
    }

    return (
        <div className="text-box">
            <input 
                type="text"
                className="form-control"
                placeholder="Type a message" 
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
            />
            <button type="button" className="btn btn-primary" onClick={onSendHandler} >Send</button>
        </div>
    )
}

export default TextBox
