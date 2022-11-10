import React from 'react'

import Collection from './Collection'
import Loader from './loader/Loader'

const MainApp = ({
  categ,
  setCategory,
  category,
  search,
  setSearch,
  data,
  isLoading,
  lastElement,
}) => {
  return (
    <div className="MainApp">
      <div className="header">
        <h1>Collections</h1>
      </div>
      <hr className="hrcss" />
      <div className="tops">
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
        <div className="soInput">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="content">
        {data
          .filter((obj) => {
            return obj.name.toLowerCase().includes(search.toLowerCase())
          })
          .map((obj, id) => (
            <Collection
              views={obj.views}
              likes={obj.likes}
              key={id}
              name={obj.name}
              images={obj.photos}
            />
          ))}
        {isLoading && <Loader />}
      </div>
      <div ref={lastElement}></div>
    </div>
  )
}

export default MainApp
