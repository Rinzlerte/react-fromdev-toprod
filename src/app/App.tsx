import {  Link } from 'react-router-dom'
import { classNames } from 'helpers/classNames/ClassNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'

const App = () => {
  const {theme, togggleTheme} = useTheme();

  return (
    <div className={classNames('app', {hovered: true}, [theme, 'cl2', 'cl3'])}>
      <button onClick={togggleTheme}>THEME CHANGGE</button>
      <Link to={'/'}>Home page</Link>
      <Link to={'/about'}>About page</Link>
      <AppRouter />
    </div>
  )
}

export default App