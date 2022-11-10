import React from 'react'
import ContentLoader from 'react-content-loader'

const BigBoy = (props) => {
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

  //310 - 1700
  //255 - 1500
  //215 - 1300
  //230 - 1100

  return (
    <ContentLoader
      className="bigBoy"
      speed={3}
      width={300}
      height={440}
      backgroundColor="#f3f3f39a"
      foregroundColor="#a7c6d8d2"
      {...props}
    >
      <rect x="0" y="0" rx="15" ry="15" width="260" height="440" />
    </ContentLoader>
  )
}

export default BigBoy
