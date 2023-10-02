import { LOCAL_STORAGE_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext } from 'react'
interface UseThemeResult {
    toggleTheme : ()=> void;
    theme: Theme
} 

export function useTheme(){
    const {theme , setTheme} = useContext(ThemeContext);
  
    const togggleTheme =()=>{
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    }

    return {theme, togggleTheme}
}