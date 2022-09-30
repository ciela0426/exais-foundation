const Content3Box = ({title, subtitle, description}) => {
    if (subtitle === null || undefined) {
        return (
            <div className="content3_box_innerbox">
                <div className="image"></div>
                <p className="title">
                    {title}
                </p>
                <p className="description">{description}</p>
            </div>
        );
    } else {
        return (
            <div className="content3_box_innerbox">
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