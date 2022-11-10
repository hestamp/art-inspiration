import React from 'react'
import BigBoy from '../skeleton/BigBoy'
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
    <div>
      <div className="names">
        <h3 className="topMe">Best of the Week</h3>
      </div>
      <div className="slider">
        {topLoading ? (
          <>
            <BigBoy wid={wid} />
            <BigBoy wid={wid} />
            <BigBoy wid={wid} />
            <BigBoy wid={wid} />
          </>
        ) : (
          topPhoto.map(
            (one, ind) =>
              ind < rendTop && (
                <TopBox
                  width={wid}
                  key={one.name}
                  name={one.name}
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
