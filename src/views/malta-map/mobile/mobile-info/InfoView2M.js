import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage, CLink } from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'
import CIcon from '@coreui/icons-react'
import { cibInstagram } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

class InfoView2M extends Component {
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
              승마장 선택하기
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
                src="/img/info-img/16.jpg"
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
                어떤 승마장을 선택해야 할까?
                <br />
                <br />
                승마 수업을 시작하려고 했다면 <br />
                가장 먼저 궁금하셨을텐데요!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/17.jpg"
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
                다양해도 너무 다양한 승마장!
                <br />
                <br />
                어떤 사항을 체크해야 할지
                <br />
                말타와 함께 확인해볼까요?
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/18.jpg"
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
                꾸준히 다니고 싶은 승마장이 있다면
                <br />
                승마장에 방문하여 간단하지만 중요한
                <br />
                <span style={{ color: '#2E93F9', fontSize: '22px', fontWeight: 500 }}>
                  말의 상태를 체크
                </span>
                해보아야 합니다!
                <br />
                <br />
                건강하고 좋은 관리를 받은 말과
                <br />
                함께하는 수업이 더 좋겠죠?
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/19.jpg"
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
                자주 수업을 받을수록
                <br />
                실력이 쑥쑥 향상되고
                <br />
                말과도 더욱 친해질 수 있으니
                <br />
                다니기 편한{' '}
                <span style={{ color: '#2E93F9', fontSize: '22px', fontWeight: 500 }}>
                  가까운 승마장
                </span>
                을 찾아보세요!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/20.jpg"
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
                승마장을 편리하게 이용하실 수 있도록
                <br />​ 말타에서는 여러분들의 위치에 맞는
                <br />​
                <span style={{ color: '#2E93F9', fontSize: '22px', fontWeight: 500 }}>
                  가까운 승마장을 추천
                </span>
                해드립니다 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/21.jpg"
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
                가까운 승마장을 선택하셨다면
                <br />​{' '}
                <span style={{ color: '#2E93F9', fontSize: '22px', fontWeight: 500 }}>
                  승마장에서 운영하는 프로그램
                </span>{' '}
                중
                <br />​ 어떤 수업이 나와 잘 맞는지 체크해보세요!
                <br />​
                <br />​ 물론, 말타에서 승마장 별 운영 프로그램도
                <br />​ 확인하실 수 있답니다 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/22.jpg"
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
                이외에도 여러가지 선택 사항이 있겠죠? ​<br />
                <br />
                - 수업을 배우고 이용하기에 현리한 시설인가?
                <br />
                - 난이도에 맞는 다양한 강사진이 있는가?
                <br />
                - 후기가 나쁘지 않은가?
                <br />
                ...
                <br />
                <br />
                다양한 사항들을
                <br />
                말타와 함께 확인해보시면
                <br />
                <br />
                여러분들에게 딱! 맞는
                <br />
                승마장을 선택할 수 있을거에요!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/23.jpg"
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
                여러분들의 승마가 <br />
                즐겁고 행복할 수 있도록
                <br />
                <br />
                말타는 <br />
                더욱 좋은 서비스와 이야기로 찾아오겠습니다 :)
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

export default InfoView2M
