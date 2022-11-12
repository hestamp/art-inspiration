import React, { useContext } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/loader/Loader'
import { publicRoutes, privateRoutes } from '../router/fileRouter'

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {
    return <Loader />
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
          ></Route>
        )
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
          ></Route>
        )
      })}
    </Routes>
  )
}

export default AppRouter
