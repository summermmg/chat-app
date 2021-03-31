const express = require('express');
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const { addUserInRoom, getUsersInRoom, getUserById, deleteUser } = require('./userApi')
app.use(cors())
//import and call as middleware  
app.use(require("./router"));


io.on('connection', (socket) => {    
    console.log('a user connected');

    //fire the eventListener function when receive event emitted from client side
    //After finished, call the 'callBack' function to do something additional in frontend.
    //we can access socket.id now
    socket.on('joinRoom', ({name,room}, callBack) => {

        //add user here
        const {error,users} = addUserInRoom(socket.id,name,room)

        //callback(error)
        if (error) {
            callBack(error)

        } else {

            //if add user successful, emit 'message' event to frontend to show on message board
            socket.emit('message',{user: 'Room Admin', msg: `👋Hi ${name}, Welcome to room ${room}. You can chat now!`})      
            socket.to(room).emit('message', {user: 'Room Admin', msg: `${name} has just joined in.😀`})
            socket.to(room).emit('UsersInRoom', users)
            socket.emit('UsersInRoom', users)
            socket.join(room)              
        }       
    })


    socket.on('createMessage', ({room,message}, callBack) => {
        let user = getUserById(socket.id)
        //sending to all clients in the room, including sender
        io.in(room).emit('message', {user:user.name, msg: message})                
        //reset create message box
        callBack()
    })
    

    //managing this specific socket just connected  
    socket.on('disconnect', () => {
        console.log('user disconnected');
        let user = getUserById(socket.id)
        let users = deleteUser(socket.id)
        socket.to(user.room).emit('message', {user:'Room Admin', msg: `${user.name} has just left`})
        socket.to(user.room).emit('UsersInRoom', users)        
    });
});

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
