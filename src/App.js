import React, { useState } from 'react'

import Layout from './components/layout'
import MyModal from './components/modal/MyModal'
import { AuthContext, ModalContext } from './context'
import './index.scss'
import Login from './pages/Login'
import AppRouter from './router/AppRouter'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [modal, setModal] = useState(false)
  const [logSign, setLogSign] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <ModalContext.Provider
        value={{
          modal,
          setModal,
          setLogSign,
          logSign,
        }}
      >
        <Layout>
          <AppRouter />
        </Layout>
        <MyModal visible={modal} setVisible={setModal}>
          <Login />
        </MyModal>
      </ModalContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
