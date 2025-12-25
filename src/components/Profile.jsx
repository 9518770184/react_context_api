import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Profile</h1>
      <h4> Name : {user?.userName}</h4>
      <h5> Password : {user?.password}</h5>
    </div>
  )
}

export default Profile