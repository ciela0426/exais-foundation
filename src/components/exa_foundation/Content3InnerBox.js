const Content3InnerBox = ({ description, name, roll }) => {
    
    return (
        <div
            className="content3_inner_box"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="img">
                <div className="img_inner">
                    <p>{description}</p>
                </div>
            </div>
            <p className="name">{name}</p>
            <p className="roll">{roll}</p>
        </div>
    );
}

export default Content3InnerBox;