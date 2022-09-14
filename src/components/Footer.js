import { Link } from 'react-router-dom';

const Footer = ({status, setStatus}) => {
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
                <p>Contact</p>
            </div>
            <div className="sns_box">
                <div className="medium"></div>
                <div className="telegram"></div>
                <div className="tweeter"></div>
                <div className="discord"></div>
            </div>
        </footer>
    );
}

export default Footer;