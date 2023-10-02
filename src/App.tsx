import { Routes, Route, Link } from 'react-router-dom'

import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'

import './global.scss'

const App = () => {
  return (
    <div>
      <Link to={'/'}>Home page</Link>
      <Link to={'/about'}>About page</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
            <Route path={'/'} element={<AboutPageAsync />}/>
            <Route path={'/about'} element={<MainPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App