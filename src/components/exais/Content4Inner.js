const Content4Inner = ({title, title1, value1, title2, value2, title3, value3, title4, value4, title5, value5}) => {
    return (
        <div className="content4_inner">
            <p className="title">{title}</p>
            <div className="content4_inner_inner">
                <Content4InnerBox title={title1} value={value1} />
                <Content4InnerBox title={title2} value={value2} />
                <Content4InnerBox title={title3} value={value3} />
                <Content4InnerBox title={title4} value={value4} />
                <Content4InnerBox title={title5} value={value5} />
            </div>
        </div>
    );
}

const Content4InnerBox = ({value, title}) => {
    return (
        <div className="content4_inner_box">
            <p className="value">{value}</p>
            <p className="title">{title}</p>
        </div>
    );
}

export default Content4Inner;