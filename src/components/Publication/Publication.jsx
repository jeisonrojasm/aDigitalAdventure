import React, { useState } from 'react'

import ellipsisIcon from '../../assets/icons/ellipsis-solid.svg'
import heartIcon from '../../assets/icons/heart-regular.svg'
import commentIcon from '../../assets/icons/comment-regular.svg'
import shareIcon from '../../assets/icons/share-solid.svg'
import { publicationStings } from '../../utils/strings'
import { onLikeClick } from './PublicationFunctions'

import './Publication.css'

export const Publication = ({
  username,
  userProfilePic,
  publicationPic,
  description,
  initialLikes
}) => {
  const [likes, setLikes] = useState(initialLikes)
  const [alreadyLike, setAlreadyLike] = useState(false)
  return (
    <div className='publication'>
      <div className='publication__header'>
        <div className='publication__user_data'>
          <div className='publication__user_img_container'>
            <div className='publication__user_img_subcontainer'>
              <img className='publication__user_img' src={userProfilePic} alt={publicationStings.icon1Alt} />
            </div>
          </div>
          <h2 className='publication__username'>{username}</h2>
        </div>
        <img className='feed__option' src={ellipsisIcon} alt={publicationStings.icon2Alt} />
      </div>

      <div className='publication__uploaded_img_container'>
        <img className='publication__uploaded_img' src={publicationPic} alt={publicationStings.icon3Alt} />
      </div>

      <div className='publication__reaction_options'>
        <img
          className='feed__option'
          src={heartIcon}
          alt={publicationStings.icon4Alt}
          onClick={() => onLikeClick(alreadyLike, setAlreadyLike, setLikes)}
        />
        <img
          className='feed__option'
          src={commentIcon}
          alt={publicationStings.icon5Alt}
        />
        <img
          className='feed__option'
          src={shareIcon}
          alt={publicationStings.icon6Alt}
        />
      </div>

      <p className='publication__likes'>{likes} {publicationStings.likesTxt}</p>

      <span className='publication__username'>{username}</span>
      <p className='publication__description'>
        {description}
      </p>
    </div>
  )
}
