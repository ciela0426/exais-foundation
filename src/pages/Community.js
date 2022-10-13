import { useTranslation } from 'react-i18next';

import Content2Box from '../components/community/Content2Box';
import Content3Box from '../components/community/Content3Box';

import NormalButton from "../components/NormalButton.js";

import '../scss/community.scss';

const Community = () => {

    const { t } = useTranslation();

    return (
        <div className="community_container">
            {/* content1 */}
            <div className="content1"></div>
            {/* content2 */}
            <div className="content2">
                <p className="title">{t('community_content2_title')}</p>
                <div className="content2_inner">
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                    <Content2Box title={'The IMO of REFLECT(RFT) Alliance, INCAR'} date={'October 4, 2022'} />
                </div>
                <NormalButton button={t('community_content2_button')} arrow={true}/>
            </div>
            {/* content3 */}
            <div className="content3">
                <p 
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >{t('community_content3_title')}</p>
                <div className="content3_inner">
                    <Content3Box channel={'Medium'} hash={'@EXAIS'} />
                    <Content3Box channel={'Telegram'} hash={'@EXAIS_official'} />
                    <Content3Box channel={'Twitter'} hash={'@EXAISNetwork'} />
                    <Content3Box channel={'Discord'} hash={'@EXAIS'} />
                </div>
            </div>
        </div>
    );
}

export default Community;