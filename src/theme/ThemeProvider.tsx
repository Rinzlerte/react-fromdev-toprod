import {useState , useMemo, JSXElementConstructor , FC}from 'react'
import { LOCAL_STORAGE_KEY, Theme , ThemeContext} from './ThemeContext';

const defaultTheme =  localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(()=>({
    theme: theme,
    setTheme: setTheme
  }), [theme])

  // const togggleTheme =()=>{
  //   setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  // }
  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider