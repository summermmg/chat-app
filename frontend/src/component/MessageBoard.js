import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message'
import { v4 as uuidv4 } from 'uuid';

const MessageBoard = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messageboard">
          
            {messages.map(message => (
                
                message.user !== name 
                ? ( 
                    <Message 
                        key={uuidv4()}
                        message={message}
                    />
                ) 
                :
                ( 
                    <Message 
                        key={uuidv4()}
                        message={message}
                        right="right"
                    />
                )
                
            )                        
            )}


        </ScrollToBottom>
    )
}

export default MessageBoard
