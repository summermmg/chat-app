//users array contains all users in all rooms
const users = []

const addUserInRoom = (socketId,name,room) => {

    if(!name || !room) {
        return { error: 'Username and room are required.' }
    }

    const found = users.find(user => user.id === socketId )
    if (found) {
        return { error: 'User already exists'}
    }
    //else, add user to users list
    users.push({id: socketId, name, room}) 
    return {users: users.filter(user => user.room === room)}
}

const getUsersInRoom = (room) => {

    return users.filter(user => user.room === room)
}

const getUserById = (socketId) => {
    const found = users.find(user => user.id === socketId )
    if (found) {
       return found
    } else {
        return { error: `No user with the id of ${socketId}`}
    }
} 

const deleteUser = (socketId) => {
    const found = users.find(user => user.id === socketId )

    if (found) {
        users.splice(users.indexOf(found),1)
        return users
    } else {
        return { error: `No user with the id of ${socketId}`}
    }
}

module.exports = { addUserInRoom, getUsersInRoom, getUserById, deleteUser };