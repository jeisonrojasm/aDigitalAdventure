import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import loginImage from '../../assets/images/loginImage.jpg'
import { Button1 } from '../../components/Button1/Button1'
import { loginStrings } from '../../utils/strings'
import { onEmailChange, onPasswordChange, onSigninClick } from './LoginFunctions'

import './Login.css'

export const Login = () => {

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  return (
    <div className='login'>
      <div className='login__principal_container'>
        <img src={loginImage} alt='Imagen del login' className='login__image' />
        <form className='login__signin_form'>
          <h1 className='login__title'>{loginStrings.title}</h1>
          <input
            className='login__input'
            type='email'
            name='email'
            id='email'
            placeholder={loginStrings.inputTxt1}
            value={formValues.email}
            onChange={(e) => onEmailChange(e, formValues, setFormValues)}
          />
          <input
            className='login__input'
            type='password'
            name='password'
            id='password'
            placeholder={loginStrings.inputTxt2}
            value={formValues.password}
            onChange={(e) => onPasswordChange(e, formValues, setFormValues)}
          />
          <Button1
            text={loginStrings.buttonTxt1}
            style={'login__signin_button'}
            disabled={true}
            onClick={() => onSigninClick(navigate)}
          />
        </form>
      </div>
      <footer>
        <address
          className='login__footer_txt'>
          {loginStrings.footerTxt1}<span className='login__footer_txt--bold'>{loginStrings.footerTxt2}</span>
        </address>
      </footer>
    </div>
  )
}
