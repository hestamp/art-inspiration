import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { AiTwotoneEye } from 'react-icons/ai'

const TopBox = ({ avatar, likes, views, ind, width, author, photo }) => {
  return (
    <div
      style={{ width: width }}
      className={`topBox ${
        ind === 0
          ? 'topboxA'
          : ind === 1
          ? 'topboxB'
          : ind === 2
          ? 'topboxC'
          : ''
      }`}
    >
      <img className="topBox__big" src={photo} alt="TopPhoto" />
      <div className="names">
        <div className="likeView">
          <MdThumbUp alt="likes" title="Likes" className="iconLW" />
          <h6 className="statText">{likes}</h6>
        </div>
        <div className="likeView">
          <AiTwotoneEye alt="views" title="Views" className="iconLW" />
          <h6 className="statText">{views}</h6>
        </div>
      </div>
      <div className="names">
        <h2>{`#${ind + 1}`}</h2>
        <div className="likeView">
          <h5 className="iconLW">{author}</h5>
          <img className="avatar" src={avatar} />
        </div>
      </div>
    </div>
  )
}

export default TopBox
