import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import TextBox from './TextBox'
import NavBar from './NavBar'
import MessageBoard from './MessageBoard'

let socket
const Chat = ({ location,history }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const [users, setUsers] = useState([]) 


    const ENDPOINT = "https://chat-app-demo0.herokuapp.com"
    // const ENDPOINT = "http://localhost:5000"


    useEffect(() => {
        //destructure name and room for later use as emit event parameters 
        const {name,room} = queryString.parse(location.search)
        setName(name)
        setRoom(room)

        //create socket instance and pass endpoint to connect it to backend io server.
        var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        };
        socket = io(ENDPOINT,connectionOptions)

        //after create the socket instance, we want to emit the 'join' event to io server 
        //the 'joinRoom' event includes two parameters: object {name,room} and cb   
        socket.emit('joinRoom', {name,room}, (error) => {
            history.push('/')
            alert(error)            
            //cb(fired once the callBack function in eventListener completed)
            //In this case, show the returned error message on browser 
        })

        socket.on('message', ( data ) => {
            setMessages(msg => [...msg,data])               
        }) 
        
        return () => {
            socket.off()
        }

    }, [ENDPOINT,location.search, history])

    useEffect(() => {
        socket.on('UsersInRoom', (data) => (
            setUsers(data)
        ))
    },[])

    return (
        <div>
            <div className="chatOuterContainer">
                <div className="chatInnerContainer">
                    <NavBar 
                        room={room}    
                        users={users} 
                        name={name}
                        socket={socket}
                    />

                    <MessageBoard 
                        messages={messages}
                        name={name}
                    />
                    <TextBox  
                        message={message}
                        setMessage={setMessage}
                        room={room}
                        socket={socket}
                    />
                </div>
            </div>
        </div>
    )
}

export default Chat