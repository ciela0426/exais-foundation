import "../scss/main.scss";

const Main = () => {
    return (
        <div className="container">
            {/* main box 1 */}
            <div className="main_box1">
                <div className="main_box1_inner">
                    <p>
                        Building a Web 3.0<br />
                        Blockchain Service
                    </p>
                    <p>
                        Metaverse, NFT Market, Studio..<br />
                        Create for All
                    </p>
                    <div className="arrow_button">
                        <p>WHITE Paper</p>
                        <div className="button_arrow"></div>
                    </div>
                </div>
            </div>
            {/* main box 2 */}
            <div className="main_box2">
                <div className="main_box2_inner">
                    <div className="content_box">
                        <p className="title">The fastest Growing Ecosystem</p>
                        <p className="description">EXAIS is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.</p>
                        <div className="normal_button">
                            <p>Explorer Ecosystem</p>
                        </div>
                    </div>
                    <div className="image"></div>
                </div>
            </div>
            {/* main box 3 */}
            <div className="main_box3">
                <div className="main_box3_inner">
                    <div className="image"></div>
                    <div className="content_box">
                        <p className="title">Let’s Build the Web 3.0 Ecosystem Together</p>
                        <p className="description">EXAIS Foundation is here to help bring your ideas into reality on the EXAIS network.</p>
                        <div className="normal_button">
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;