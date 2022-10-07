import { useTranslation } from 'react-i18next';

import Content2Box from "../components/exa_foundation/Content2Box";
import Content3InnerBox from "../components/exa_foundation/Content3InnerBox";

import "../scss/exaFoundation.scss";

const ExaFoundation = () => {

    
    const { t } = useTranslation();

    return (
        <div className="exa_foundation_container"> 
            <div className="content1">
                <p className="title">{t('exa_foundation_title')}</p>
                <p className="description">{t('exa_foundation_description')}</p>
                <p className="description2">{t('exa_foundation_description2')}</p>
            </div>
            <div className="content2">
                <Content2Box description={t('exa_foundation_content1_box1_description')} />
                <Content2Box description={t('exa_foundation_content1_box2_description')} />
                <Content2Box description={t('exa_foundation_content1_box3_description')} />
            </div>
            <div className="content3">
                <p
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >{t('exa_foundation_content3_title')}</p>
                <div className="content3_inner">
                    <Content3InnerBox description={t('exa_foundation_content3_box1_description')} name={t('exa_foundation_content3_box1_name')} roll={t('exa_foundation_content3_box1_roll')} />
                    <Content3InnerBox description={t('exa_foundation_content3_box2_description')} name={t('exa_foundation_content3_box2_name')} roll={t('exa_foundation_content3_box2_roll')} />
                    <Content3InnerBox description={t('exa_foundation_content3_box3_description')} name={t('exa_foundation_content3_box3_name')} roll={t('exa_foundation_content3_box3_roll')} />
                    <Content3InnerBox description={t('exa_foundation_content3_box4_description')} name={t('exa_foundation_content3_box4_name')} roll={t('exa_foundation_content3_box4_roll')} />
                    <Content3InnerBox description={t('exa_foundation_content3_box5_description')} name={t('exa_foundation_content3_box5_name')} roll={t('exa_foundation_content3_box5_roll')} />
                    <Content3InnerBox description={t('exa_foundation_content3_box6_description')} name={t('exa_foundation_content3_box6_name')} roll={t('exa_foundation_content3_box6_roll')} />
                </div>
            </div>
        </div>
    );
}

export default ExaFoundation;