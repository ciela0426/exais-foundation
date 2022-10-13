import '../scss/componentStyle/normalButton.scss';

const NormalButton = ({ button, arrow }) => {
    if (arrow === null || arrow === undefined || arrow === false) {
        return (
            <div 
                className="normal_button"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p>{button}</p>
            </div>
        );
    } else {
        return (
            <div 
                className="normal_button"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p>{button}</p>
                <div className="arrow"></div>
            </div>
        );
    }
}

export default NormalButton;