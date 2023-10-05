import { classNames } from 'helpers/classNames/ClassNames';
import cls from './navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className? : string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Home
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    About us
                </AppLink>
            </div>
    </nav>
  )
}
