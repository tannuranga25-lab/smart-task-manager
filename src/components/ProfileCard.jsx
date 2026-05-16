
import React from 'react'


function ProfileCard({name,age}) {
  return (<div className='profile-card'>
    <h3>Profile Section</h3>
    <p><strong>Name: </strong>{name}</p> 
    <p><strong>Age:</strong>{age}</p>


      
    </div>
  )
}

export default ProfileCard
