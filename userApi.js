//users array contains all users in all rooms
const users = []

const addUserInRoom = (socketId,name,room) => {
    name1 = name.trim().toLowerCase();
    room1 = room.trim().toLowerCase();

    if(!name || !room) {
        return { error: 'Username and room are required.' }
    }

    const existingUser = users.find((user) => user.room === room1 && user.name === name1);
    if(existingUser) return { error: 'Username is taken in this room.' };

    //else, add user to users list
    users.push({id: socketId, name, room}) 
    return {users: users.filter(user => user.room === room)}
}

// const getUsersInRoom = (room) => {

//     return users.filter(user => user.room === room)
// }

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