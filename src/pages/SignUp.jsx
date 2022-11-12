import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import { FcGoogle } from 'react-icons/fc'

import { FaFacebook, FaApple } from 'react-icons/fa'
const SignUp = () => {
  return (
    <div className="loginPage">
      <div className="bgOverlay">
        <div className="loginBlock">
          <h2 className="joinA">Sign In to ArtInspiration</h2>
          <div className="btnBlock">
            <div className="btnl">
              <FcGoogle className="iconL" />
              <h4 className="loginP">Continue with Google</h4>
            </div>
            <div className="btnl">
              <FaFacebook className="iconL__fb" />
              <h4 className="loginP">Continue with Facebook</h4>
            </div>
            <div className="btnl">
              <FaApple className="iconL" />
              <h4 className="loginP">Continue with Apple</h4>
            </div>
          </div>
          <div className="orBlock">
            <hr className="hrcss" />
            <h4 className="loginP">OR</h4>
            <hr className="hrcss" />
          </div>

          <div className="btnBlock">
            <input className="inputMail" placeholder="Email / Username" />
            <input
              type="password"
              className="inputMail"
              placeholder="Password"
            />
            <div className="btnl_cont">Continue</div>
            <div className="rememberForgot">
              <div className="rememberBox">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value="Remember"
                />
                <label className="littleP">Remember Me</label>
              </div>
              <Link className="linkLink" to={'/signup'}>
                <p>Forgot Password?</p>
              </Link>
            </div>
          </div>

          <hr className="hrcss" />
          <p className="littleP">
            Not a member yet?{' '}
            <Link className="linkLink" to={'/login'}>
              Join now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
