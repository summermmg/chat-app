import React from 'react'

const Message = ({ message, right }) => {
    return (
<div className="messageInnerboard">
        {right ? (
            <div className="right">
            <div className="messagebox">
                <span>{message.user}: </span>
                {message.msg}
            </div>
            </div>
        ) : (
            <div className="left">
            <div className="messagebox">
                <span>{message.user}: </span>
                {message.msg}
            </div>
            </div>
        )
        }
          
</div>
    )
}

export default Message
