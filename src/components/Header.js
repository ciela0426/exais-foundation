import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ title, location, status, setStatus }) => {
    
    const { t, i18n } = useTranslation();

    const navMap = title.map((data) => (
        <li
        className={location === data.link ? "on" : ""}
        key={data.id}
        >
            <Link
                onClick={() => {
                    setStatus(data.title);
                }}
                to={data.link}
            >
                {
                    data.title === "Exais 1.0" ? t("exais_1.0") : 
                    data.title === "Exa Foundation" ? t("exa_foundation") : 
                    data.title === "Ecosystem" ? t("community") : 
                    data.title === "Community" ? t("ecosystem") :  t("explorer")
                }
            </Link>
        </li>
    ));

    return (
        <header>
            {/* logo */}
            <Link
                onClick={() => {
                    setStatus("Home");
                }}
                to="/"
            >
                <div className="logo_box" ></div>
            </Link>
            {/* gnb */}
            <div id="gnb">
                <ul className="gnb_box">
                    {navMap}
                </ul>
            </div>
        </header>
    );
}

export default Header;