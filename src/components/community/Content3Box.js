const Content3Box = ({channel, hash}) => {
    return(
        <div 
            className="content3_box" 
            onClick={() => {
                if(channel === 'Medium') {
                    window.open('https://www.medium.com/EXAIS');
                } else if (channel === 'Telegram') {
                    window.open('https://telegram.org/EXAIS_official');
                } else if (channel === 'Twitter') {
                    window.open('https://twitter.com/EXAISNetwork');
                } else if (channel === 'Discord') {
                    window.open('https://www.discord.com/EXAIS');
                } else {
                    return false;
                }
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
        > 
            <div className="image"></div>
            <div className="content3_box_inner">
                <p className="channel">{channel}</p>
                <p className="hash">{hash}</p>
            </div>
        </div>
    );
}

export default Content3Box;