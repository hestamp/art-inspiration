import React from 'react'
import ContentLoader from 'react-content-loader'

const BigBoy = (props) => (
  <ContentLoader
    className="bigBoy"
    speed={3}
    width={300}
    height={490}
    viewBox="0 0 300 490"
    backgroundColor="#f3f3f39a"
    foregroundColor="#a7c6d8d2"
    {...props}
  >
    <rect x="0" y="0" rx="15" ry="15" width="300" height="490" />
  </ContentLoader>
)

export default BigBoy
