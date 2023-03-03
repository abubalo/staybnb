import React from 'react'

const ProfilePageInfo = ({logout, firstName, email}) => {
  return (
    <div>
         <div className="text-center max-w-lg mx-auto mt-20">
          <p>Logged in as {firstName} ({email})</p>
          <button className="w-full  bg-primary mt-4 p-4 font-medium text-white rounded-full" onClick={logout}>Log out</button>
        </div>
    </div>
  )
}

export default ProfilePageInfo