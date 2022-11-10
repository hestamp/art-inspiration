import React from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'

const Headers = () => {
  return (
    <>
      <div className="header">
        <h1 className="headMe">ArtInspiration</h1>
      </div>
      <RiMenuFill className="menu" />
      <VscAccount className="acc" />
    </>
  )
}

export default Headers
