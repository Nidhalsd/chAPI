import React from 'react'

const UserList = ({user}) => {
  return (
    <div>
     
      <p>Name : {user.name}</p>
      <p>E-mail : {user.email}</p>
      <p>City : {user.address.city}</p>

    </div>
  )
}

export default UserList

