import React from 'react'
import { Link } from 'react-router-dom'

const ProfileMenu = () => {
  return (
    <div>
        <div>

        <Link>Sing up</Link>
        <Link>Login</Link>
        </div>
        <div>
            <Link>Airlmb your home</Link>
            <Link>Host experience</Link>
            <Link>Help</Link>
        </div>
    </div>
  )
}

export default ProfileMenu