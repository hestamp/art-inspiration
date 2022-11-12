import React, { useContext, useEffect } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaApple } from 'react-icons/fa'

import { ModalContext } from '../context'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import auth from '../utils/firebase'

const Login = () => {
  const { setLogSign, logSign } = useContext(ModalContext)
  const googleProvider = new GoogleAuthProvider()
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="loginPage">
      <div className="loginBlock">
        {logSign ? (
          <h2 className="joinA">Join ArtInspiration</h2>
        ) : (
          <h2 className="joinA">Sign In to ArtInspiration</h2>
        )}

        <div className="btnBlock">
          <div className="btnl">
            <FcGoogle onClick={GoogleLogin} className="iconL" />
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
        {logSign ? (
          <>
            <div className="btnBlock">
              <input className="inputMail" placeholder="Enter your email" />
              <div className="btnl_cont">Continue</div>
            </div>
            <p className="littleP">
              I agree to receive emails from ArtInpiration.
            </p>
            <hr className="hrcss" />
            <div className="regs">
              <p className="littleP">Already a member? </p>
              <p
                onClick={() => setLogSign(false)}
                className="linkLink"
                to={'/signup'}
              >
                Sign in
              </p>
            </div>
          </>
        ) : (
          <>
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
                <div className="regs">
                  <p className="linkLink" to={'/signup'}></p>
                  <p>Forgot Password?</p>
                </div>
              </div>
            </div>

            <hr className="hrcss" />
            <div className="regs">
              <p className="littleP">Not a member yet? </p>
              <p
                onClick={(prev) => setLogSign(prev)}
                className="linkLink"
                to={'/login'}
              >
                Join now
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
