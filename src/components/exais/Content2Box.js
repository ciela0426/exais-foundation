import NormalButton from "../NormalButton";

const Content2Box = ({ title, description, button, arrow }) => {
    
    
    if (button === null || button === undefined) {
        return (
            <div
                className="content_box"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="image"></div>
                <div className="content_box_inner">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="content_box"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="image"></div>
                <div className="content_box_inner">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    {arrow === true ? (<NormalButton button={button} arrow={arrow} />) : (<NormalButton button={button} />)}
                </div>
            </div>
        );
    }
}

export default Content2Box;