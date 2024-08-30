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
    id: 1,
    username: 'silviis_ 25',
    likes: 50,
    userProfilePic: profilePic1,
    publicationPic: publication1Pic,
    description: '¡Qué emoción! Por fin podré ver a mi banda de heavy metal favorita🤘🎸',
    comments: [
      {
        id: 1,
        text: 'Te envidioooooo!! Yo también quisiera poder ir',
        username: 'oscar.rojas5'
      },
      {
        id: 2,
        text: 'Allá estaremos',
        username: 'yodaaaa_'
      },
      {
        id: 3,
        text: 'Será que aún las estan vendiendo?',
        username: 'channelcita'
      }
    ]
  },
  {
    id: 2,
    username: 'jeison_ 29',
    likes: 20,
    userProfilePic: myProfilePic,
    publicationPic: myProfilePic,
    description: '🤘🎸',
    comments: [
      {
        id: 1,
        text: 'Jajaja qué gracioso',
        username: '___xd__'
      }
    ]
  },
  {
    id: 3,
    username: 'ultimahoracol',
    likes: 1,
    userProfilePic: profilePic1,
    publicationPic: profilePic1,
    description: 'Vas a tener todo un equipo completo trabajando para ti.',
    comments: []
  },
  {
    id: 4,
    username: 'eltiempo',
    likes: 16,
    userProfilePic: profilePic3,
    publicationPic: profilePic3,
    description: 'Descubre aquí los mejores destinos. Vuelve, tus vacaciones te están esperando!✈️ Obtén un descuento solo por hoy en la ruta bogotá - cartagena. Se aplica solo en la ruta mencionada.',
    comments: [
      {
        id: 1,
        text: 'Qué mal servicio, no les compren',
        username: '___xd__'
      }
    ]
  },
  {
    id: 5,
    username: 'versus_colombia',
    likes: 8,
    userProfilePic: profilePic4,
    publicationPic: profilePic4,
    description: 'Sígueme para más contenido 🙌🏻',
    comments: []
  },
  {
    id: 6,
    username: 'reggaetontapa',
    likes: 159,
    userProfilePic: profilePic1,
    publicationPic: profilePic1,
    description: 'Debo tomarme algo energético (8)',
    comments: [
      {
        id: 1,
        text: 'Hasta el piso',
        username: 'eltiempo'
      }
    ]
  }
]

export const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__aside'>
        <h1 className='feed__title'>A Digital Adventure</h1>
        <div className='feed__options'>
          <div className='feed__option_element'>
            <img className='feed__option' src={homeIcon} alt='Icono de inicio' />
            <p className="feed__option_txt">
              Inicio
            </p>
          </div>

          <div className='feed__option_element'>
            <img className='feed__option' src={searchIcon} alt='Icono de búsqueda' />
            <p className="feed__option_txt">
              Buscar
            </p>
          </div>

          <div className='feed__option_element'>
            <img className='feed__option' src={cameraIcon} alt='Icono de foto' />
            <p className="feed__option_txt">
              Crear publicación
            </p>
          </div>

          <div className='feed__option_element'>
            <img className='feed__option' src={envelopeIcon} alt='Icono de mensajes' />
            <p className="feed__option_txt">
              Chat
            </p>
          </div>

          <div className='feed__option_element'>
            <div className='feed__option_container'>
              <div className='feed__option_subcontainer'>
                <img className='feed__option_img' src={myProfilePic} alt='Icono de mi perfil' />
              </div>
            </div>
            <p className="feed__option_txt">
              Perfil
            </p>
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
                key={publication.id}
                username={publication.username}
                userProfilePic={publication.userProfilePic}
                publicationPic={publication.publicationPic}
                description={publication.description}
                initialLikes={publication.likes}
                comments={publication.comments}
              />
            ))
          }

        </div>
      </div>
    </div>
  )
}
