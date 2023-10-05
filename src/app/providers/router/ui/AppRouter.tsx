import { Routes, Route, Link } from 'react-router-dom'
 
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'

const AppRouter = () => {
  return (
    <div>
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
                {/* <Route path={'/'} element={<AboutPage />}/>
                <Route path={'/about'} element={<MainPage />}/> */}
                 {Object.values(routeConfig).map(({element, path})=>(
                    <Route path={path} key={path} element={(element)}/>
                 ))}
            </Routes>
        </Suspense>
    </div>
  )
}

export default AppRouter