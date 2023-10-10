import { classNames } from 'helpers/classNames/ClassNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import {Suspense} from 'react';
import './styles/index.scss';

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {hovered: true}, [theme, 'cl2', 'cl3'])}>
            <Suspense fallback="">
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App