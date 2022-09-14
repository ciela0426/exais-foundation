import { Link } from 'react-router-dom';

const Header = ({title, location, status, setStatus}) => {

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
                {data.title}
            </Link>
        </li>
    ));

    return (
        <header>
            {/* logo */}
            <div className="logo_box">
                <p>EXAIS</p>
            </div>
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