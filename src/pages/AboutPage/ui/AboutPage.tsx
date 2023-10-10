import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about');
  return (
    <div className='page-wrapper'> {t('About')}</div>
  )
}

export default AboutPage