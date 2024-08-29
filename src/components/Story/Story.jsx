import React, { useState } from 'react'
import { onStoryClick } from './StoryFunctions'

import './Story.css'

export const Story = ({ picture }) => {
  const [storySeen, setStorySeen] = useState(false)
  return (
    <div className='story' onClick={() => onStoryClick(setStorySeen)}>
      <div className={`story__container ${storySeen ? 'story--seen' : ''}`}>
        <img
          src={picture}
          alt='historia'
          className={`story__img`}
        />
      </div>
    </div>
  )
}
