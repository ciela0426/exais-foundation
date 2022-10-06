const Content3Box = ({title, subtitle, description}) => {
    if (subtitle === null || undefined) {
        return (
            <div 
                className="content3_box_innerbox"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="image"></div>
                <p className="title">
                    {title}
                </p>
                <p className="description">{description}</p>
            </div>
        );
    } else {
        return (
            <div 
                className="content3_box_innerbox"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="image"></div>
                <p className="title">
                    {title}
                    <span>{subtitle}</span>
                </p>
                <p className="description">{description}</p>
            </div>
        );
    }
}

export default Content3Box;