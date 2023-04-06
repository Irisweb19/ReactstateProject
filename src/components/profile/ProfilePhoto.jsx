import React from 'react'
import iris from '../picture/iris.jpg'

const ProfilePhoto = () => {
  return (
    <div>
        <img src={iris} alt='image of iris' style={{width: 300, height: 400}}/>
    </div>
  )
}

export default ProfilePhoto