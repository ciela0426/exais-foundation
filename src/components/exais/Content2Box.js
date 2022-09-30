const Content2Box = ({title, description}) => {
    return (
        <div className="content2_box">
            <div className="image"></div>
            <div className="content2_box_inner">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Content2Box;