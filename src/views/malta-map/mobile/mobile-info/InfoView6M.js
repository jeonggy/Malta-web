import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage, CLink } from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'
import CIcon from '@coreui/icons-react'
import { cibInstagram } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

class InfoView6M extends Component {
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
              국내 추천 외승지
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
                src="/img/info-img/36.jpg"
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
                승마의 꽃이라고 불리는 외승
                <br />
                <br />
                외승을 꿈 꾸시는 분들을 위해
                <br />
                국내 추천 외승지를
                <br />
                지금부터 소개해드릴게요!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/37.jpg"
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
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  국내 좋은 외승지
                </span>
                는 어느 지역에
                <br />
                위치하고 있는지 함께 알아보도록 해요 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/38.jpg"
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
                첫번째는
                <span style={{ color: '#2E93F9' }}>대관령 하늘목장</span>입니다
                <br />
                <br />
                그림처럼 탁 트인 들판에서
                <br />
                마음 껏 구보, 습보까지 가능하여
                <br />
                외승지로는 더할 나위없이 좋은 지역입니다!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/39.jpg"
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
                두번째는<span style={{ color: '#2E93F9' }}> 제주 광치기 해변!</span>
                <br />
                영화에서만 보던 해변가에서
                <br />
                멋있는 외승 경험을 할 수 있습니다
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/40.jpg"
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
                들판도 달리고 싶고
                <br />
                도강도 경험하고 싶다면?
                <br />
                <br />
                외승을 할 때 들판과 도강을
                <br />
                함께 경험하고 싶다면
                <br />
                <span style={{ color: '#2E93F9' }}>충주 남한강</span>을 추천해드려요 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/41.jpg"
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
                <span style={{ color: '#2E93F9' }}>해변에서 외승을 꿈 꾸는데</span>
                <br />
                제주도는 거리가 부담되신다면
                <br />
                <span style={{ color: '#2E93F9' }}>안면도 해변</span>에서 해변 외승을
                <br />
                경험해보시는 건 어떠세요 :) ?
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/42.jpg"
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
                외승을 경험하고 싶은데
                <br />
                아직 실력면에서 불안하다! 하시는 분들은
                <br />
                <span style={{ color: '#2E93F9' }}>평지, 직선길</span> 위주인
                <br />
                <span style={{ color: '#2E93F9' }}>화성 황구지천</span>을 추천드립니다 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/43.jpg"
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
                마지막으로 소개해드릴 곳은
                <br />
                <span style={{ color: '#2E93F9' }}>제주 편백나무 숲!</span>
                <br />
                <br />
                공기도 좋고 <span style={{ color: '#2E93F9' }}>승마체험</span>도 가능하여
                <br />
                승마를 접해보지 않은 분들도
                <br />
                <span style={{ color: '#2E93F9' }}>안전하게 외승 체험</span>을 할 수 있어서
                <br />
                아이들에게도 좋은 외승지입니다!
              </p>
            </CCol>
            <CCol>
              <CImage
                className="d-block w-100 cover"
                src="/img/info-img/44.jpg"
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
                승마장이 아닌 <span style={{ color: '#2E93F9' }}>다양한 외승지</span>에서
                <br />
                색다른 경험을 해보세요 :)
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

export default InfoView6M
