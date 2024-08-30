export const onLikeClick = (alreadyLike, setAlreadyLike, setLikes) => {
  if (!alreadyLike) {
    setAlreadyLike(true)
    setLikes(prev => prev + 1)
  }
}

export const onCommentClick = (setModalMessage, handleShowModal) => {
  setModalMessage('Escribe tu comentario')
  handleShowModal()
}

export const onTextareaCommentChange = (e, setYourComment) => {
  const comment = e.target.value
  setYourComment(comment)
}
