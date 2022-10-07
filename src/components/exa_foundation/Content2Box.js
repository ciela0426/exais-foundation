const Content2Box = ({description}) => {
    return (
        <div
            className="content2_box"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="image"></div>
            <p className="description">{description}</p>
        </div>
    );
}

export default Content2Box;