import React from 'react'
import { MdThumbUp } from 'react-icons/md'
import { AiTwotoneEye } from 'react-icons/ai'

const Collection = ({ views, likes, name, images }) => {
  return (
    <div className="collection">
      <img
        className="collection__big"
        src={images[0]}
        title={name}
        alt="Item"
      />

      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>

      <div className="postText">
        <div className="likeView">
          <MdThumbUp alt="likes" title="Likes" className="iconLW" />
          <h6 className="statText">{likes}</h6>
        </div>
        <h5>{name}</h5>
        <div className="likeView">
          <AiTwotoneEye alt="views" title="Views" className="iconLW" />
          <h6 className="statText">{views}</h6>
        </div>
      </div>
    </div>
  )
}

export default Collection
