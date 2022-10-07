import { useTranslation } from 'react-i18next';
import Content2Box from "../components/exais/Content2Box";

import "../scss/ecosystem.scss";

const Ecosystem = () => {

    const { t } = useTranslation();

    return (
        <div className="ecosystem_container">
            <div className="content1">
                <Content2Box title={t('ecosystem_content1_title')} description={t('ecosystem_content1_description')} button={t('ecosystem_content1_button')} arrow={true}/>
            </div>
            <div className="content2">
                <Content2Box title={t('ecosystem_content1_title')} description={t('ecosystem_content1_description')} button={t('ecosystem_content1_button')} arrow={true}/>
                <Content2Box title={t('ecosystem_content1_title')} description={t('ecosystem_content1_description')} button={t('ecosystem_content1_button')} arrow={true}/>
            </div>
        </div>
    );
}

export default Ecosystem;