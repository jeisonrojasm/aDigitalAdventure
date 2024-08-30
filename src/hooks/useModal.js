import { useEffect, useState } from 'react'

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  return [showModal, handleShow, handleClose]
}
