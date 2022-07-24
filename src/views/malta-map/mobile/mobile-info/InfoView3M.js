import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage, CLink } from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'
import CIcon from '@coreui/icons-react'
import { cibInstagram } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

class InfoView3M extends Component {
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
              말에게 다가가는 방법
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
                src="/img/info-img/24.jpg"
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
                안녕하세요!
                <br />
                말과 함께하는 모든 이들을 위한
                <br />
                말타입니다
                <br />
                <br />
                오늘은 승마장에 처음 방문 하셨을 때<br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  {' '}
                  말에게 다가가는 방법
                </span>
                을 알려드릴게요​
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/25.jpg"
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
                승마장에 방문하기 전 또는 방문하였을 때
                <br />
                말을 처음 보게된다면
                <br />
                낯설기도하고 모르는 부분이 많으실거예요
                <br />
                <br />
                하나하나 같이 알아볼까요?
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/26.jpg"
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
                말을 처음 보고 큰 크기에 놀라
                <br />
                소리를 지르거나! 뛰어가는 분들이 있답니다
                <br />
                ​<br />
                <br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  말은 크기와 달리
                  <br />
                  겁이 많은 초식동물입니다
                </span>
                <br />
                그래서 큰 소리와 동작은 말을
                <br />
                긴장시키고 불안하게 만듭니다
                <br />
                <br />
                <br />
                특히
                <br />​ 승마장 안에서 뛰어다니면 나뿐만 아니라
                <br />​ 다른 기승자를 떨어트리는
                <br />
                사고로 이어질 수 있어서
                <br />​ 주의해야합니다!
                <br />​
                <br />
                아이들과 말이 좋은 첫 인사를
                <br />할 수 있도록 도와주세요 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/27.jpg"
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
                말은 포유류 중에 눈의 크기가
                <br />
                제일 큰 동물이라고 할 수 있는데요
                <br />​ <br />​ 눈의 크기가 커서 잘 보기도 하지만
                <br />​ 말의 눈은 머리의 앞이 아닌 옆에 있기 때문에
                <br />
                <br />​
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  350도로 주변을 볼 수 있답니다!
                </span>
                <br />​
                <br />​ 말이 볼 수 없는 부분인 엉덩이 쪽으로는
                <br />​ 다가가지 않도록 항상 조심해야 해요
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/28.jpg"
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
                말의 귀를 가만히 관찰하면
                <br />
                앞뒤로 왔다 갔다 하는 것을 볼 수 있을거예요
                <br />
                ​<br />
                ​ 말에게 인사하려고 다가가기 전에
                <br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  말의 귀가 뒤로 힘껏 젖혀있다면
                </span>
                <br />
                <br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  지금 기분이 좋지 않아 다가오지마!
                </span>
                <br />
                <br />
                라는 뜻이기 때문에
                <br />
                다가가지 않고 떨어져서 인사해주세요
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/29.jpg"
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
                말과 인사하기 전 ​<br />
                <br />
                몇 가지만 지켜주신다면
                <br />
                더욱 안전하고 즐거운 추억을 만드실 수 있을거예요 :)
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

export default InfoView3M
