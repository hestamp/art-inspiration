import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout'

import MainMap from './MainMap'

function Main() {
  const categ = [
    { name: 'Popular', pos: 1 },
    { name: 'Sea', pos: 2 },
    { name: 'Mountain', pos: 3 },
    { name: 'Architecture', pos: 4 },
    { name: 'Cities', pos: 5 },
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
  }, [page])

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    const checkObserv = (ent) => {
      if (ent[0].isIntersecting && data.length < 24) {
        setPage(page + 1)

        console.log('see this')
      }
    }

    if (!isLoading) {
      observer.current = new IntersectionObserver(checkObserv)
      observer.current.observe(lastElement.current)
    }
  }, [isLoading])

  return (
    <MainMap
      topLoading={topLoading}
      topPhoto={topPhoto}
      categ={categ}
      setCategory={setCategory}
      category={category}
      search={search}
      setSearch={setSearch}
      data={data}
      isLoading={isLoading}
      lastElement={lastElement}
    />
  )
}

export default Main
