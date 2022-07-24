import React, { Component } from 'react'

import { CImage, CContainer, CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'

class ServiceSlider1 extends Component {
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
            회원용 앱 서비스
          </h2>
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#141414' }}>
            말타 이용 시 유용한 점을 소개합니다
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
                src="/img/main/0001.png"
                alt="slide 1"
                height="560px"
              />
              <CCarouselCaption className="d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  승마장 별 다양한 정보
                </h2>
                <p className="main-slider-p">
                  말타는 승마장 별 강사진 및 마필을 볼 수 있으며,
                  <br />
                  프로그램 별 정확한 가격 확인이 가능
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="slider-img"
                src="/img/main/0002.png"
                alt="slide 2"
                height="560px"
              />
              <CCarouselCaption className="d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  터치 몇 번으로 예약 완료
                </h2>
                <p className="main-slider-p">
                  번거로운 전화 및 메세지가 아니더라도 예약 날짜와
                  <br />
                  시간, 기승 인원 등을 터치 몇 번으로 예약 완료
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="slider-img"
                src="/img/main/0003.png"
                alt="slide 3"
                height="560px"
              />
              <CCarouselCaption className="d-none d-md-block">
                <h2 className="main-slider-h2" style={{ textAlign: 'center' }}>
                  과거 강습 내역 확인
                </h2>
                <p className="main-slider-p">
                  현재까지 받았던 강습에 대한 정보 확인이 가능하며
                  <br />
                  담당 코치께서 해당 수업 내용 및 피드백 평가 제공
                </p>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </CContainer>
      </>
    )
  }
}

export default ServiceSlider1
