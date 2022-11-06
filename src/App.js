import React, { useEffect, useRef, useState } from 'react'
import Collection from './components/Collection'
import Slider from './components/Slider'
import './index.scss'

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
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const lastElement = useRef()
  const observer = useRef()

  useEffect(() => {
    const myCategory = category ? `category=${category}` : ''

    setIsLoading(true)
    fetch(
      `https://63683148edc85dbc84e35905.mockapi.io/Names?page=${page}&limit=10&${myCategory}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json])
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [category, page])

  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()

    const checkObserv = (ent, observer) => {
      if (ent[0].isIntersecting) {
        //SET LIMIT TOMORROW
        setPage(page + 1)
        console.log('see this')
      }
    }

    observer.current = new IntersectionObserver(checkObserv)
    observer.current.observe(lastElement.current)
  }, [isLoading])

  return (
    <>
      <div className="names">
        <h1 className="headMe">ArtInspiration</h1>
      </div>
      <div className="sliderBlock">
        <Slider />
      </div>

      <div className="App">
        <div className="names">
          <h1>Collections</h1>
        </div>

        <div className="top">
          <ul className="tags">
            {categ.map((obj, ind) => (
              <li
                key={ind}
                onClick={() => setCategory(ind)}
                className={ind === category ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-input"
            placeholder="Enter the name"
          />
        </div>
        <div className="content">
          {data
            .filter((obj) => {
              return obj.name.toLowerCase().includes(input.toLowerCase())
            })
            .map((obj, id) => (
              <Collection key={id} name={obj.name} images={obj.photos} />
            ))}
          {isLoading && <h2>Loading...</h2>}
        </div>
        <div ref={lastElement}></div>
        {/* <ul className="pagination">
          {[...Array(3)].map((_, i) => (
            <li
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? 'active' : ''}
              key={i}
            >
              {i + 1}
            </li>
          ))}
        </ul> */}
      </div>
    </>
  )
}

export default App
