import { classNames } from 'helpers/classNames/ClassNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'

import './styles/index.scss';

const App = () => {
  const {theme} = useTheme();
  return (
    <div className={classNames('app', {hovered: true}, [theme, 'cl2', 'cl3'])}>
      <Navbar />
      <div className='content-page'>
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App