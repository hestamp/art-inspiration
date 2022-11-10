import React from 'react'
import Loader from './loader/Loader'
import TopBox from './TopBox.jsx'

const Slider = ({ topLoading, topPhoto }) => {
  const widths = window.innerWidth

  const rendTop =
    widths > 1301
      ? 5
      : widths > 1151
      ? 4
      : widths > 901
      ? 3
      : widths > 451
      ? 2
      : 1

  const wid =
    rendTop === 5
      ? `19%`
      : rendTop === 4
      ? `24%`
      : rendTop === 3
      ? `31%`
      : rendTop === 2
      ? `48%`
      : `98%`

  return (
    <div className="topBlock">
      <div className="best">
        <h3 className="topMe">WeekTop</h3>
      </div>
      <div className="slider">
        {topLoading ? (
          <Loader />
        ) : (
          topPhoto.map(
            (one, ind) =>
              ind < rendTop && (
                <TopBox
                  avatar={one.avatar}
                  likes={one.likes}
                  views={one.views}
                  ind={ind}
                  width={wid}
                  key={one.name}
                  author={one.author}
                  photo={one.photo}
                />
              )
          )
        )}
      </div>
    </div>
  )
}

export default Slider
