import { useTranslation } from 'react-i18next';

import Content2Box from '../components/exais/Content2Box';
import Content3Box from '../components/exais/Content3Box';
import Content4Inner from '../components/exais/Content4Inner';
import Content5Dot from '../components/exais/Content5Dot';

import "../scss/exais.scss";

const Exais = () => {
    const { t } = useTranslation();

    return (
        <div className="container">

            {/* content1 */}
            <div className="content1"></div>

            {/* content2 */}
            <div className="content2">
                <Content2Box title={t('exais_content2_box1_title')} description={t('exais_content2_box1_description')} />
                <Content2Box title={t('exais_content2_box2_title')} description={t('exais_content2_box2_description')} />
            </div>

            {/* content3 */}
            <div className="content3">
                <p className="title">{t('exais_content3_title')}</p>
                <p className="description">{t('exais_content3_description')}</p>
                <div className="content3_box1">
                    <Content3Box title={t('exais_content3_box1_title')} description={t('exais_content3_box1_description')} subtitle={t('exais_content3_box1_subtitle')} />
                    <Content3Box title={t('exais_content3_box2_title')} description={t('exais_content3_box2_description')} />
                    <Content3Box title={t('exais_content3_box3_title')} description={t('exais_content3_box3_description')} />
                </div>
                <div className="content3_box2">
                    <Content3Box title={t('exais_content3_box4_title')} description={t('exais_content3_box4_description')} />
                    <Content3Box title={t('exais_content3_box5_title')} description={t('exais_content3_box5_description')} />
                    <Content3Box title={t('exais_content3_box6_title')} description={t('exais_content3_box6_description')} />
                </div>
            </div>

            {/* content4 */}
            <div className="content4">
                <Content4Inner
                    title={t('exais_content4_box1_title')}
                    title1={t('exais_content4_box1_market_cap')}
                    value1={"3,088,237"}
                    title2={t('exais_content4_box1_collateral')}
                    value2={"$1"}
                    title3={t('exais_content4_box1_accounts')}
                    value3={"4,000"}
                    title4={t('exais_content4_box1_circulating_supply')}
                    value4={"1,000,000"}
                    title5={t('exais_content4_box1_exa_price')}
                    value5={"N/A"}
                />
                <Content4Inner
                    title={t('exais_content4_box2_title')}
                    title1={t('exais_content4_box2_lasted_block')}
                    value1={"3,088,237"}
                    title2={t('exais_content4_box2_gas_price')}
                    value2={"$1"}
                    title3={t('exais_content4_box2_tps')}
                    value3={"4,000"}
                    title4={t('exais_content4_box2_block_interval')}
                    value4={"1,000,000"}
                    title5={t('exais_content4_box2_exa_price')}
                    value5={"N/A"}
                />
            </div>

            {/* content5 */}
            <div className="content5">
                <p className="title">{t('exais_content5_title')}</p>
                <p className="description">{t('exais_content5_description')}</p>
                <div className="content5_inner">
                    <Content5Dot date={'’22.09'} description={t(('exais_content5_box1_description'))} />
                    <Content5Dot date={'’22.10'} description={t(('exais_content5_box2_description'))} />
                    <Content5Dot date={'’22.11'} description={t(('exais_content5_box3_description'))} />
                    <Content5Dot date={'’22.12'} description={t(('exais_content5_box4_description'))} />
                    <Content5Dot date={'’23.02'} description={t(('exais_content5_box5_description'))} />
                    <Content5Dot date={'’23.05'} description={t(('exais_content5_box6_description'))} />
                </div>
            </div>

            {/* content6 */}
            <div className="content6">
                <Content2Box title={t('exais_content6_box1_title')} description={t('exais_content6_box1_description')} />
                <Content2Box title={t('exais_content6_box2_title')} description={t('exais_content6_box2_description')} button={t('exais_content6_box2_button')} arrow={true} />
            </div>
        </div>
    );
}

export default Exais;