import { useTranslation} from "react-i18next"

const MainPage = () => {
    const {t} = useTranslation('main')
    return (
        <div className='page-wrapper'>
            {t('Main')}
        </div>
    ) 
}

export default MainPage