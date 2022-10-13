const Content2Box = ({title, date}) => {
    return(
        <div 
            className="content2_box"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="image"></div>
            <p className="title">{title}</p>
            <p className="date">{date}</p>
        </div>
    );
}

export default Content2Box;