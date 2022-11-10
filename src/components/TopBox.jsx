import React from 'react'

const TopBox = ({ width, name, photo }) => {
  console.log('box')
  return (
    <div style={{ width: width }} className="topBox">
      <img className="topBox__big" src={photo} alt="TopPhoto" />
      <div className="names">
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default TopBox
