import React, { Component } from 'react'

import { CImage, CContainer, CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'

class ServiceSlider2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <>
        <CContainer style={{ paddingTop: '200px', paddingBottom: '180px' }}>
          <h2 style={{ fontSize: '40px', textAlign: 'center', color: '#141414', fontWeight: 500 }}>
            말타 파트너스 승마클럽
          </h2>
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#141414' }}>
            말타를 통해 승마장 관리, 홍보는 물론 신규회원 유치가 쉽도록 도와드립니다!
          </p>
          <CCarousel
            controls
            indicators
            dark
            style={{ textAlign: 'center', padding: '30px 0px 50px 0px' }}
          >
            <CCarouselItem>
              <CImage
                className="slider-img"
                src="/img/main/0001-1.png"
                alt="slide 1"
                height="560px"
              />
              <CCarouselCaption className="d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  신규회원 모집은 말타에서!
                </h2>
                <p className="main-slider-p">
                  승마에 관심있는 사람들은 모두 모인 승마 플랫폼 말타!
                  <br />
                  승마장을 무료로 등록하고 신규회원이 늘어나는 홍보효과를 느껴보세요!
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="slider-img"
                src="/img/main/0002-1.png"
                alt="slide 2"
                height="560px"
              />
              <CCarouselCaption className="d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  실시간 연동 기능
                </h2>
                <p className="main-slider-p">
                  전화, 문자 등으로 일정 공유는 그만!
                  <br />
                  승마클럽과 코치, 회원이 실시간으로 일정을 확인할 수 있습니다.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="slider-img"
                src="/img/main/0003-1.png"
                alt="slide 3"
                height="560px"
              />
              <CCarouselCaption className="d-none d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  더 이상 수기로 회원 리스트를 관리하지 마세요!
                </h2>
                <p className="main-slider-p">
                  코치와 회원이 각자 쿠폰을 관리할 필요 없습니다.
                  <br />
                  자동으로 회원의 쿠폰을 차감해줌으로써 업무의 효율성은 물론 회원의 신뢰감까지 UP!
                </p>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </CContainer>
      </>
    )
  }
}

export default ServiceSlider2
