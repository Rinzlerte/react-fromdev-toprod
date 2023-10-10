import cls from './Sidebar.module.scss'
import {useState} from "react"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher"
import { classNames } from 'helpers/classNames/ClassNames'
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const SideBar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
