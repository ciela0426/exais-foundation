import { useTranslation } from 'react-i18next';

const Exais = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <p>{t('exais')}</p>
        </div>
    );
}

export default Exais;