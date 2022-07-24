import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage, CLink } from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'
import CIcon from '@coreui/icons-react'
import { cibInstagram } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

class InfoView4M extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  infolistBtnClicked = () => {
    document.location.href = '#/info'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  android() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US'
  }
  ios() {
    window.location.href = 'https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829'
  }

  appdownloadBtnClicked = () => {
    if (isMobile && isIOS) {
      this.ios()
      // window.location.href="https://appstore-link.com";
    } else if (isMobile && isAndroid) {
      this.android()
    } else {
      alert('말타 앱은 iOS, Android 에서만 지원 가능합니다.')
    }
  }

  render() {
    return (
      <>
        <MobileHeader />
        <CCol style={{ padding: '24px 20px 40px 20px' }}>
          <CCol className="text-left" style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p style={{ fontWeight: 400, color: '#a3a3a3', fontSize: '16px', marginBottom: '6px' }}>
              승마정보
            </p>
            <h2
              style={{
                fontWeight: 700,
                color: '#141414',
                display: 'inline-block',
                paddingBottom: '24px',
                fontSize: '30px',
                lineHeight: '24px',
              }}
            >
              말타 사용방법
            </h2>
          </CCol>
          <CCol className="text-center">
            <p
              style={{
                paddingTop: '30px',
                lineHeight: '28px',
                color: '#444',
                fontSize: '16px',
                letterSpacing: '-.4px',
                paddingBottom: '10px',
              }}
            >
              말과 함께하는 모든 이들을 위한 말타입니다 :)
              <br />
            </p>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/10.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                말타에 대해서 궁금하신 분들을 위한
                <br />
                정보를 전해드리려고 하는데요 :)
                <br /> <br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  승마예약을 간편하게
                </span>{' '}
                이용할 수 있는 <br />
                말타 앱 이용 시 꼭! 지켜야 할 점은 ​<br />
                과연 무엇일까요?
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/11.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                승마를 즐기는 사람이 증가하면서
                <br />
                말타를 통한 승마장 예약이 늘어나고 있는 요즘!
                <br />
                <br />
                지금부터 말타를 통한 올바른 예약 방법을
                <br />
                함께 알아보아요! :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/12.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                승마는 동물과 교감하는 운동으로 ​<br />
                <br />
                승마장 측에서 말들의 컨디션 조절, 운동 상태 등<br />
                케어를 해야하기 때문에
                <br />
                승마 예약을 1일 전 또는 당일 예약을 한다면
                <br />
                승마장 측에서 마필 등 준비가 어려울 수 있기 때문에
                <br />
                <br />
                <span style={{ color: '#2E93F9', fontWeight: 500 }}>
                  최소 2~3일 전 예약은 필수!
                </span>
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/13.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                기승 예약신청을 한다고 해서 확정이 아니라,
                <br />​ 승마장 측에서 예약 확정을 해야하며,
                <br />​
                <br />​ 말타 앱에 <span style={{ color: '#2E93F9' }}>승인대기</span> 라고 표시가
                된다면
                <br />​ 승마장 측에서 확인이 될 때까지 ​<br />
                ​조금만 기다려주세요 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/14.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                정말 불가피한 상황에는 어쩔 수 없지만
                <br /> <br />
                <span style={{ color: '#2E93F9' }}>승마장은 당일 취소 시</span> <br />
                말들의 운동 및 승마장 일정에 대한 지장이 생기니
                <br />
                <br />​{' '}
                <span style={{ color: '#2E93F9' }}>당일, 전날 승마장 운영시간 이후 예약 취소</span>
                는<br />
                자제해주세요!! :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/15.jpg"
                alt="img 1"
                Width="auto"
                overflow="hidden"
                display="flex"
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '40px',
                  lineHeight: '28px',
                  color: '#444',
                  fontSize: '16px',
                  letterSpacing: '-.4px',
                  paddingBottom: '30px',
                }}
              >
                승마를 즐기기 좋은 요즘 계절!
                <br />
                ​<br />
                말타를 통해 더욱 간편하게​
                <br />
                승마장을 예약해볼까요 :) ?!
              </p>
            </CCol>
          </CCol>
          <CCol className="text-center">
            <p
              style={{
                paddingTop: '60px',
                lineHeight: '28px',
                color: '#444',
                fontSize: '16px',
                letterSpacing: '-.4px',
                paddingBottom: '4px',
                color: '#898989',
              }}
            >
              말타에 대해 더욱 궁금하다면?
            </p>
          </CCol>
          <CCol className="text-center" style={{ padding: '2px' }}>
            <CButton onClick={() => this.appdownloadBtnClicked()} className="info-bo-btn-1m">
              <img src="/img/clublogo-w.png" width="30px" style={{ marginRight: '10px' }} />
              말타 앱 다운받기
            </CButton>
          </CCol>
          <CCol className="text-center" style={{ padding: '2px' }}>
            <CLink href="https://pf.kakao.com/_zNxhxfK" Target="_blank">
              <CButton className="info-bo-btn-2m">
                <img src="/img/kakao-icon.png" width="24px" style={{ marginRight: '10px' }} />
                카카오톡 채널로 문의하기
              </CButton>
            </CLink>
          </CCol>
          <CCol
            className="text-center"
            style={{ padding: '2px 2px 40px 2px', borderBottom: '0.5px solid #e4e4e4' }}
          >
            <CLink href="https://www.instagram.com/malta_luxspo/" Target="_blank">
              <CButton className="info-bo-btn-3m">
                <CIcon
                  className="icon-sns-wh"
                  icon={cibInstagram}
                  width="20px"
                  style={{ marginRight: '12px' }}
                />
                인스타 팔로우
              </CButton>
            </CLink>
          </CCol>
          <CCol className="text-center">
            <CButton onClick={() => this.infolistBtnClicked()} className="news-list-btn-m">
              목록
            </CButton>
          </CCol>
        </CCol>
        <CRow className="row-st-none">
          <img
            style={{ cursor: 'pointer', width: '400px' }}
            src="img/mobile/malta-main-banner.png"
          />
        </CRow>
        <MobileFooter />
      </>
    )
  }
}

export default InfoView4M
