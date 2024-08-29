import React from 'react'

import profilePic1 from '../../assets/images/profilePic1.jpg'
import profilePic2 from '../../assets/images/profilePic2.jpg'
import profilePic3 from '../../assets/images/profilePic3.jpg'
import profilePic4 from '../../assets/images/profilePic4.jpg'
import profilePic5 from '../../assets/images/profilePic5.jpg'
import profilePic6 from '../../assets/images/profilePic6.jpg'
import myProfilePic from '../../assets/images/myProfilePic.jpg'
import publication1Pic from '../../assets/images/publication1Pic.jpg'
import homeIcon from '../../assets/icons/house-solid.svg'
import searchIcon from '../../assets/icons/search-solid.svg'
import cameraIcon from '../../assets/icons/camera-solid.svg'
import envelopeIcon from '../../assets/icons/envelope-solid.svg'
import { Story } from '../../components/Story/Story'
import { Publication } from '../../components/Publication/Publication'

import './Feed.css'

const profilePics = [
  profilePic1,
  profilePic2,
  profilePic3,
  profilePic4,
  profilePic5,
  profilePic6
]

const publications = [
  {
    username: 'silviis_ 25',
    userProfilePic: profilePic1,
    publicationPic: publication1Pic,
    description: '¡Qué emoción! Por fin podré ver a mi banda de heavy metal favorita🤘🎸'
  },
  {
    username: 'jeison_ 29',
    userProfilePic: myProfilePic,
    publicationPic: myProfilePic,
    description: '🤘🎸'
  },
]

export const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__aside'>
        <h1 className='feed__title'>A Digital Adventure</h1>
        <div className='feed__options'>
          <div>
            <img className='feed__option' src={homeIcon} alt='Icono de inicio' />
          </div>
          <div>
            <img className='feed__option' src={searchIcon} alt='Icono de búsqueda' />
          </div>
          <div>
            <img className='feed__option' src={cameraIcon} alt='Icono de foto' />
          </div>
          <div>
            <img className='feed__option' src={envelopeIcon} alt='Icono de mensajes' />
          </div>
          <div className='feed__option_container'>
            <div className='feed__option_subcontainer'>
              <img className='feed__option_img' src={myProfilePic} alt='Icono de mi perfil' />
            </div>
          </div>
        </div>
      </div>
      <div className='feed__principal_container'>
        <div className='feed__stories'>
          {
            profilePics.map((picture) => (
              <Story key={`story-${picture}`} picture={picture} />
            ))
          }
        </div>
        <div className='feed__friends_publications'>
          {
            publications.map(publication => (
              <Publication
                username={publication.username}
                userProfilePic={publication.userProfilePic}
                publicationPic={publication.publicationPic}
                description={publication.description}
              />

            ))
          }

        </div>
      </div>
    </div>
  )
}
