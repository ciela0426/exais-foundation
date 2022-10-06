import { t } from "i18next";
import "../scss/main.scss";

import NormalButton from "../components/NormalButton.js";

const Main = () => {
    
    return (
        <div className="container">
            {/* main box 1 */}
            <div className="main_box1">
                <div className="main_box1_inner">
                    <p className="title">{t('main_title')}</p>
                    <p className="description">{t('main_description')}</p>
                    <div className="arrow_button">
                        <p>{t('white_paper')}</p>
                        <div className="button_arrow"></div>
                    </div>
                </div>
            </div>
            {/* main box 2 */}
            <div className="main_box2">
                <div className="main_box2_inner">
                    <div
                        className="content_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="title">{t('main_box1_title')}</p>
                        <p className="description">{t('main_box1_description')}</p>
                        <NormalButton button={t('main_box1_button')}/>
                    </div>
                    <div
                        className="image"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    ></div>
                </div>
            </div>
            {/* main box 3 */}
            <div className="main_box3">
                <div className="main_box3_inner">
                    <div
                        className="image"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    ></div>
                    <div
                        className="content_box"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <p className="title">{t('main_box2_title')}</p>
                        <p className="description">{t('main_box2_description')}</p>
                        <NormalButton button={t('main_box2_button')} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Main;