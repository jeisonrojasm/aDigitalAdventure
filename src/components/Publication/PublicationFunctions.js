export const onLikeClick = (alreadyLike, setAlreadyLike, setLikes) => {
  if (!alreadyLike) {
    setAlreadyLike(true)
    setLikes(prev => prev + 1)
  }
}