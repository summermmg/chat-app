import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import TextBox from './TextBox'
import NavBar from './NavBar'

let socket
const Chat = ({ location }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const [users, setUsers] = useState([]) 


    const ENDPOINT = "localhost:5000"

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
            alert(error)
            //cb(fired once the callBack function in eventListener completed)
            //In this case, show the returned error message on browser 
        })

        // return () => {
        //     socket.emit('disconnect')

        //     socket.off()
        // }

    }, [ENDPOINT,location.search])

    useEffect(() => {

        socket.on('message', (data) => {
            messages.push(data)
            setMessages(messages)
            console.log(messages)
        })

        //existing users only add once at the time of join
        socket.on('ExistingUsersInRoom', ExistingUsers => {
            if (users.length === 0 && ExistingUsers.length !== 0) {
                ExistingUsers.map(el => (
                    users.push(el)
                ))                              
               
                setUsers(users)  
            }
        })  
    
        socket.on('UsersInRoom', newUser => {
            users.push(newUser)
            setUsers(users)  
            console.log(users.length)
        })  
            
        socket.on('UsersLeftRoom', id => {
            let found = users.find(user => user.id === id) 
            let index = users.indexOf(found)
            users.splice(index,1)
            setUsers(users)  
            console.log(users)
        })        
    }, []) 
          

    return (
        <div>
            <div className="chatOuterContainer">
                <div className="chatInnerContainer">
                    {/* <NavBar 
                        room={room}    
                        users={users} 
                    /> */}
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