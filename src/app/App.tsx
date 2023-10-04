import { Routes, Route, Link } from 'react-router-dom'
 
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import { Suspense } from 'react'
import { classNames } from 'helpers/classNames/ClassNames'
import { useTheme } from 'app/providers/ThemeProvider'

const App = () => {
  const {theme, togggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true}, [theme, 'cl2', 'cl3'])}>
      <button onClick={togggleTheme}>THEME CHANGGE</button>
      <Link to={'/'}>Home page</Link>
      <Link to={'/about'}>About page</Link>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
            <Route path={'/'} element={<AboutPage />}/>
            <Route path={'/about'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App