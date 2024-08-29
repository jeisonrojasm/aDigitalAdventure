import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './views/Login/Login'
import { Feed } from './views/Feed/Feed'

import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
