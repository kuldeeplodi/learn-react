import React from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = React.useContext(UserContext)
    if(!user) return <h1>please login</h1>
    return <div>welcome {user.username}</div>
 
}

export default Profile
