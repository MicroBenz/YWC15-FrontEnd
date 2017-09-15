import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import connect from '../../store/connect';
import colors from '../../utils/colors';
import SectionHeader from '../../component/Landing/SectionHeader';
import BannerModal from '../../component/Media/BannerModal';
import content from '../../component/Media/banner.json';
import { actions as affiliateActions } from '../../store/reducers/affiliate';

/* eslint-disable */
injectGlobal`
@font-face {
  font-family: 'supermarket';
  src: local('supermarket'),
    url('static/fonts/supermarket.ttf') format('ttf');
}

body {
  font-family: 'Supermarket';
  letter-spacing: .02em;
  -webkit-font-smoothing: antialiased;
  margin: 0 !important;
  padding: 0 !important;
  text-align: center;
}

h1, h2, h3, h4, h5, h6 {
  letter-spacing: .024681em;
}
`;
/* eslint-enable */

const Foreground = styled.div`
  background-image: url('/static/img/bg-front.png');
  background-size: 100% auto;
  padding: 40px;
`;

const Banner = styled.div`
  position: relative;
  
  &:hover {
    img {
      box-shadow: 0 0 20px ${colors.darkCyan};
    }

    &:before {
      text-shadow: 0 0 20px ${colors.darkCyan};
    }

  }

  img {
    margin: 5px 0 25px;
    box-shadow: 0 0 12px ${colors.cyan};
    transition: all .4s;
    cursor: pointer;
  }

  &:before {
    content: "${props => props.size}";
    position: absolute;
    top: -20px;
    transition: all .4s;
  }

`;

const BannerContainer = styled.div`
  .columns {
    justify-content: center;
  }
`;

@connect(
  null,
  { ...affiliateActions }
)
export default class MediaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      banner: {},
      affiliate: {
        url: '',
        name: ''
      }
    };
    this.hideModal = this.hideModal.bind(this);
    this.setAffiliateData = this.setAffiliateData.bind(this);
    this.onClickSaveAffiliate = this.onClickSaveAffiliate.bind(this);
  }

  componentDidMount() {

  }

  onOpenPopup(bannerContent) {
    console.log(content);
    this.setState({
      popup: true,
      banner: bannerContent
    });
  }

  onClickSaveAffiliate() {
    const { name, url } = this.state.affiliate;
    this.props.saveAffiliate(name, url)
      .then(() => console.log('successfully save'));
  }

  setAffiliateData(field, value) {
    this.setState({
      affiliate: {
        ...this.state.affiliate,
        [field]: value
      }
    });
  }

  hideModal() {
    this.setState({
      popup: false,
      banner: {}
    });
  }

  render() {
    return (
      <Foreground>
        { this.state.popup && (
          <BannerModal
            affiliate={this.state.affiliate}
            banner={this.state.banner}
            hideModal={this.hideModal}
            onClick={this.onClickSaveAffiliate}
            setBannerData={this.setAffiliateData}
          />
        )}
        <SectionHeader title="public relations" subtitle="ร่วมประชาสัมพันธ์กับเรา" />
        <BannerContainer className="container-fluid">
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <Banner size={'120x600'} onClick={() => this.onOpenPopup(content['120x600'])}>
                    <img src="/static/img/banner/120x600.png" alt="" />
                  </Banner>
                </div>
                <div className="column">
                  <Banner size={'160x600'} onClick={() => this.onOpenPopup(content['160x600'])}>
                    <img src="/static/img/banner/ban160-600.jpg" alt="" />
                  </Banner>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <Banner size={'300x250'} onClick={() => this.onOpenPopup(content['300x250'])}>
                  <img src="/static/img/banner/ban300-250.gif" alt="" />
                </Banner>
              </div>
              <div className="columns">
                <Banner size={'250x250'} onClick={() => this.onOpenPopup(content['250x250'])}>
                  <img src="/static/img/banner/ban250-250.jpg" alt="" />
                </Banner>
              </div>
              <div className="columns">
                <Banner size={'200x200'} onClick={() => this.onOpenPopup(content['200x200'])}>
                  <img src="/static/img/banner/ban200-200.jpg" alt="" />
                </Banner>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <Banner size={'468x60'}>
                  <img src="/static/img/banner/ban468-60.jpg" alt="" />
                </Banner>
              </div>
              <div className="columns">
                <Banner size={'500x329'}>
                  <img src="/static/img/banner/ban560-329.jpg" alt="" />
                </Banner>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner size={'728x90'}>
                <img src="/static/img/banner/ban728-90v56.gif" alt="" />
              </Banner>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner size={'960x320'}>
                <img src="/static/img/banner/ban960-320v2.jpg" alt="" />
              </Banner>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner size={'970x250'}>
                <img src="/static/img/banner/ban970-250v5.jpg" alt="" />
              </Banner>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Banner size={'970x500'}>
                <img src="/static/img/banner/ban970-500v2.jpg" alt="" />
              </Banner>
            </div>
          </div>
        </BannerContainer>
      </Foreground>
    );
  }
}

