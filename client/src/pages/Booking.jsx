import React from 'react'

const Booking = () => {
    const {id} = useParams()
  return (
    <div>
        {id}
    </div>
  )
}

export default Booking