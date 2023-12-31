import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../scss/footer.scss';
import { useState } from 'react';
import { t } from 'i18next';

const Footer = ({ status, setStatus }) => {
    const { i18n } = useTranslation();

    const [languageOpen, setLanguageOpen] = useState(false);
    
    /** 잘 동작하지 않아 차후 연구 필요 */
    const LanguageMap = i18n.languages.map((data) => (
        <li
            key={data}
            className={data === i18n.language ? "on" : ""}
            onClick={() => {
                // if (data === "en") {
                //     i18n.changeLanguage('en');
                // } else if (data === "ko") {
                //     i18n.changeLanguage('ko');
                // } else {
                //     i18n.changeLanguage('en');
                // }
                i18n.changeLanguage('ko');
            }}
        >
            {data === "en" ? "English" : "Korean"}
        </li>
    ));

    return (
        <footer className="footer">
            <div className="footer_inner">
                
                <div className="footer_box1">
                    <div className="footer_box1_inner">
                        <Link
                            onClick={() => {
                                window.scrollTo(0, 0);
                                setStatus("Privacy Policy");
                            }}
                            to={"/privacypolicy"}
                        >
                            {t('privacy_policy')}
                        </Link>
                        <a href='mailto:soo@nextor.ai;'>{t('contact')}</a>
                    </div>
                    <p className="copyright">EXAIS is Foundation 2022. All rights reserved.</p>
                </div>
                
                <div className="footer_box2">
                    {/* SNS */}
                    <div className="sns_box">
                        <div className="medium" onClick={() => {
                            window.open('https://www.medium.com/EXAIS');
                        }}></div>
                        <div className="telegram" onClick={() => {
                            window.open('https://telegram.org/EXAIS_official');
                        }}></div>
                        <div className="discord" onClick={() => {
                            window.open('https://www.discord.com/EXAIS');
                        }}></div>
                        <div className="twitter" onClick={() => {
                            window.open('https://twitter.com/EXAISNetwork');
                        }}></div>
                    </div>

                    {/* language */}
                    <div
                        className={languageOpen ? "language_box on": "language_box"}
                        // onClick={() => {
                        //     console.log(i18n.language);
                        //     if (i18n.language === 'en') {
                        //         i18n.changeLanguage('ko');
                        //     } else if (i18n.language === 'ko') {
                        //         i18n.changeLanguage('en');
                        //     }
                        // }}
                        onClick={() => {
                            setLanguageOpen(!languageOpen);
                        }}
                    >
                        <ul className="language_box_inner">
                            {/* {LanguageMap} */}
                            <li
                                className={i18n.language === "ko" ? "on" : ""}
                                onClick={() => {
                                    i18n.changeLanguage('ko');
                                }}
                            >
                                Korean
                            </li>
                            <li
                                className={i18n.language === "en" ? "on" : ""}
                                onClick={() => {
                                    i18n.changeLanguage('en');
                                }}
                            >
                                English
                            </li>
                        </ul>
                        <p>
                            {
                                i18n.language === 'ko' ? "Korean" : 
                                i18n.language === 'en' ? "English" : "Language"
                            }
                        </p>
                        <div className={languageOpen ? "language_arrow on" : "language_arrow"}></div>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;