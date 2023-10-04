import { Routes, Route, Link } from 'react-router-dom'
 
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/ClassNames'

const App = () => {
  const {theme, togggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true}, [theme, 'cl2', 'cl3'])}>
      <button onClick={togggleTheme}>THEME CHANGGE</button>
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