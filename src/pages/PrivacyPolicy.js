import { useTranslation } from 'react-i18next';

import "../scss/privacyPolicy.scss";

const PrivacyPolicy = () => {

    const { t } = useTranslation();

    return (
        <div className="pp_container">
            <div className="content1"></div>
            <div className="content2">
                <p 
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >{t('pp_content2_title')}</p>
                <p 
                    className="description"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {t('pp_content2_description')}
                    <span className="highlight">{t('pp_content2_subtitle1')}</span>
                    {t('pp_content2_subdescription1')}
                    <span className="highlight">{t('pp_content2_subtitle2')}</span>
                    {t('pp_content2_subdescription2')}
                    <span className="highlight">{t('pp_content2_subtitle3')}</span>
                    {t('pp_content2_subdescription3')}
                    <span className="highlight">{t('pp_content2_subtitle4')}</span>
                    {t('pp_content2_subdescription4')}
                    <span className="highlight">{t('pp_content2_subtitle5')}</span>
                    {t('pp_content2_subdescription5')}
                    <span className="highlight">{t('pp_content2_subtitle6')}</span>
                    {t('pp_content2_subdescription6')}
                    <span className="highlight">{t('pp_content2_subtitle7')}</span>
                    {t('pp_content2_subdescription7')}
                    <span className="highlight">{t('pp_content2_subtitle8')}</span>
                    {t('pp_content2_subdescription8')}
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;