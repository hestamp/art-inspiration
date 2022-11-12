import React, { useContext } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { VscAccount } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import { AuthContext, ModalContext } from '../context'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const { modal, setModal } = useContext(ModalContext)
  const logout = () => {
    setIsAuth((prev) => !prev)
    setModal((prev) => !prev)
  }
  return (
    <div className="navBar">
      <RiMenuFill className="menu" />

      <div className="header">
        <Link to={'/'}>
          <img src={logo} className="logo" />
        </Link>
      </div>

      {/* {isAuth ? (
        <VscAccount onClick={logout} className="acc" />
      ) : ()} */}
      <button onClick={logout} className="joinBtn">
        Join Now
      </button>
    </div>
  )
}

export default NavBar
