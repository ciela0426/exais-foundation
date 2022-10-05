import NormalButton from "../NormalButton";

const Content2Box = ({ title, description, button, arrow }) => {
    if (button === null || button === undefined) {
        return (
            <div className="content_box">
                <div className="image"></div>
                <div className="content_box_inner">
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="content_box">
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