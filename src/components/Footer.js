import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = ({ status, setStatus }) => {
    const { i18n } = useTranslation();

    return (
        <footer>
            <p>EXAIS is Foundation 2022. All rights reserved.</p>
            <div className="footer_box1">
                <Link
                    onClick={() => {
                        setStatus("Privacy Policy");
                    }}
                    to={"/privacypolicy"}
                >
                    Privacy Policy
                </Link>
                <a href='mailto:soo@nextor.ai;'>Contact</a>
            </div>
            <div
                onClick={() => {
                    console.log(i18n.language);
                    if (i18n.language === 'en') {
                        i18n.changeLanguage('ko');
                    } else if (i18n.language === 'ko') {
                        i18n.changeLanguage('en');
                    }
                }}
            >
                <p>language</p>
            </div>
            <div className="sns_box">
                <div className="medium" onClick={() => {
                    window.open('https://www.medium.com');
                }}>
                    <p>medium</p>
                </div>
                <div className="telegram" onClick={() => {
                    window.open('https://telegram.org/');
                }}>
                    <p>telegram</p>
                </div>
                <div className="tweeter" onClick={() => {
                    window.open('https://twitter.com/');
                }}>
                    <p>tweeter</p>
                </div>
                <div className="discord" onClick={() => {
                    window.open('https://www.discord.com');
                }}>
                    <p>discord</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;