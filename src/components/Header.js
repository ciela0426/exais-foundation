import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// import { useEffect } from 'react';

const Header = ({ title, location, status, setStatus, handleScroll }) => {
    
    const { t } = useTranslation();

    const [gnbOpen, setGnbOpen] = useState(false);

    const navMap = title.map((data) => (
        <li
        className={location === data.link ? "on" : ""}
        key={data.id}
        >
            <Link
                onClick={() => {
                    window.scrollTo(0, 0);
                    setStatus(data.title);
                    setGnbOpen(false);
                }}
                to={data.link}
            >
                {
                    data.title === "Exais 1.0" ? t("exais_1.0") : 
                    data.title === "Exa Foundation" ? t("exa_foundation") : 
                    data.title === "Ecosystem" ? t("ecosystem") : 
                    data.title === "Community" ? t("community") :  t("explorer")
                }
            </Link>
        </li>
    ));

    // useEffect(() => {
    //     handleScroll(gnbOpen);
    // }, [gnbOpen]);

    return (
        <header className={gnbOpen ? "header on" : "header"}>
            
            {/* logo */}
            <Link
                onClick={() => {
                    window.scrollTo(0, 0);
                    setStatus("Home");
                }}
                to="/"
            >
                <div className="logo_box" ></div>
            </Link>

            {/* gnb */}
            <div className="gnb">
                {gnbOpen ? (
                    <div className='blur_box'></div>
                ) : null}
                <div className={gnbOpen ? "gnb_mobile_button on" : "gnb_mobile_button"}
                    onClick={() => {
                        setGnbOpen(!gnbOpen);
                    }}
                >
                    <div className="gnb_mobile_button_bar"></div>
                </div>
                
                <ul className={gnbOpen ? "gnb_box on" : "gnb_box"}>
                    {navMap}
                </ul>
                <div className="wallet"></div>
            </div>
            
        </header>
    );
}

export default Header;