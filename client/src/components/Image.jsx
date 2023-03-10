import React from 'react'

if(!place) return ""

if(!className){
    className = "object-cover"
}
const Image = ({place, className=null, index=0}) => {
  return (
    <img src={`http://localhost:5000/uploads/${item.photos[0]}`} alt="" />
  )
}

export default Image