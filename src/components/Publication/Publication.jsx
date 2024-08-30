import React, { useState } from 'react'

import ellipsisIcon from '../../assets/icons/ellipsis-solid.svg'
import heartIcon from '../../assets/icons/heart-regular.svg'
import commentIcon from '../../assets/icons/comment-regular.svg'
import shareIcon from '../../assets/icons/share-solid.svg'
import { publicationStings } from '../../utils/strings'
import { onCommentClick, onLikeClick, onTextareaCommentChange } from './PublicationFunctions'
import { useModal } from '../../hooks/useModal'

import './Publication.css'
import { Modal } from '../Modal/Modal'
import { Button1 } from '../Button1/Button1'

export const Publication = ({
  username,
  userProfilePic,
  publicationPic,
  description,
  initialLikes,
  comments
}) => {
  const [likes, setLikes] = useState(initialLikes)
  const [alreadyLike, setAlreadyLike] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [yourComment, setYourComment] = useState('')
  console.log(comments)


  const [showAddCommentModal, handleShowAddCommentModal, closeAddCommentModal] = useModal()
  const [showSeeCommentsModal, handleShowSeeCommentsModal, closeSeeCommentsModal] = useModal()
  return (
    <>
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
            onClick={() => onCommentClick(setModalMessage, handleShowAddCommentModal)}
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
        {
          comments?.length > 0
            ? (
              <p
                className='publication__see_comments'
                onClick={handleShowSeeCommentsModal}
              >
                Ver los {comments.length} comentarios
              </p>

            )
            : (
              <p
                className='publication__see_comments'
                onClick={() => onCommentClick(setModalMessage, handleShowAddCommentModal)}
              >
                Agregar un comentario...
              </p>

            )
        }
      </div>
      <Modal isOpen={showAddCommentModal}>
        <Modal.Content>
          <p className='publication__textarea_commen_txt'>{modalMessage}</p>
          <textarea onChange={(e) => onTextareaCommentChange(e, setYourComment)} value={yourComment} className='publication__textarea_comment login__input' />
        </Modal.Content>
        <Modal.Buttons>
          <Button1
            text='Cancelar'
            onClick={closeAddCommentModal}
            style='publication__modal_btn'
          />
          <Button1
            text='Ok'
            style='publication__modal_btn'
          />
        </Modal.Buttons>
      </Modal>

      <Modal isOpen={showSeeCommentsModal}>
        <Modal.Content>
          <div className='publication__modal_content'>
            <div className='publication__modal_content--img'>
              <div className='publication__uploaded_img_container'>
                <img className='publication__uploaded_img' src={publicationPic} alt={publicationStings.icon3Alt} />
              </div>
            </div>
            <div>
              {
                comments.map(comment => (
                  <div className='comment'>
                    <span className='comment__username'>{comment.username}</span>
                    <span className='comment__'>{comment.text}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </Modal.Content>
        <Modal.Buttons>
        </Modal.Buttons>
      </Modal>
    </>
  )
}
