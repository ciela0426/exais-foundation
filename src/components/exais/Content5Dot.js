const Content5Dot = ({date, description}) => {
    return (
        <div className="content5_dot">
            <div className="content5_dot_box">
                <p className="date">{date}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Content5Dot;