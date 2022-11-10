import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Slider from './components/Slider'

import Headers from './components/Headers'
import MainApp from './components/MainApp'

function App() {
  const categ = [
    { name: 'Popular' },
    { name: 'Sea' },
    { name: 'Mountain' },
    { name: 'Architecture' },
    { name: 'Cities' },
  ]

  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [topPhoto, setTopPhoto] = useState([])
  const [topLoading, setTopLoading] = useState(true)
  const lastElement = useRef()
  const observer = useRef()

  useEffect(() => {
    setTopLoading(true)
    fetch(`https://63683148edc85dbc84e35905.mockapi.io/HestampTop`)
      .then((res) => res.json())
      .then((json) => {
        setTopPhoto(json)
      })
      .catch((err) => console.log(err))
      .finally(() => setTopLoading(false))
  }, [])

  useEffect(() => {
    const myCategory = category ? `category=${category}` : ''

    setIsLoading(true)
    fetch(
      `https://63683148edc85dbc84e35905.mockapi.io/HestampAll?page=${page}&limit=10`
    )
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json])
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [category == 0, page])

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    const checkObserv = (ent, observer) => {
      if (ent[0].isIntersecting && data.length < 34) {
        setPage(page + 1)
        console.log('see this')
      }
    }

    observer.current = new IntersectionObserver(checkObserv)
    observer.current.observe(lastElement.current)
  }, [isLoading])

  return (
    <>
      <Headers />
      <Slider topLoading={topLoading} topPhoto={topPhoto} />
      <MainApp
        categ={categ}
        setCategory={setCategory}
        category={category}
        search={search}
        setSearch={setSearch}
        data={data}
        isLoading={isLoading}
        lastElement={lastElement}
      />
    </>
  )
}

export default App
