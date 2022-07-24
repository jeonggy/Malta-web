import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CModalBody,
  CFormInput,
  CButton,
  CModal,
  CImage,
  CContainer,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibInstagram } from '@coreui/icons'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'

class InfoView6 extends Component {
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

  appdownloadBtnClicked = () => {
    this.setState({
      appdownloadModalOpen: true,
    })
  }
  popupDeleted = () => {
    this.setState({ appdownloadModalOpen: false })
  }

  render() {
    return (
      <>
        <CContainer className="container-news1" style={{ paddingTop: '90px' }}>
          <CCol className="text-left" style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p style={{ fontWeight: 400, color: '#a3a3a3', marginBottom: '2px', fontSize: '18px' }}>
              승마정보
            </p>
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                display: 'inline-block',
                paddingBottom: '50px',
                fontSize: '48px',
                lineHeight: '68px',
              }}
            >
              국내 추천 외승지
            </h2>
          </CCol>
          <CCol className="text-center">
            <p
              style={{
                paddingTop: '70px',
                lineHeight: '28px',
                color: '#444',
                fontSize: '24px',
                letterSpacing: '-.4px',
                paddingBottom: '10px',
              }}
            >
              말과 함께하는 모든 이들을 위한 말타입니다 :)
              <br />
            </p>
            <CCol>
              <CImage
                src="/img/info-img/36.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '50px',
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
                src="/img/info-img/37.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '40px',
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
                src="/img/info-img/38.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '40px',
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
                src="/img/info-img/39.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '60px',
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
                src="/img/info-img/40.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '60px',
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
                src="/img/info-img/41.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '60px',
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
                src="/img/info-img/42.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '60px',
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
                src="/img/info-img/43.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '60px',
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
                src="/img/info-img/44.jpg"
                alt="img 1"
                Width="820px"
                overflow="hidden"
                display="flex"
                style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
              />
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '70px',
                  lineHeight: '32px',
                  color: '#444',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '100px',
                }}
              >
                승마장이 아닌 <span style={{ color: '#2E93F9' }}>다양한 외승지</span>에서
                <br />
                색다른 경험을 해보세요 :)
              </p>
            </CCol>
            <CCol>
              <p
                style={{
                  paddingTop: '60px',
                  lineHeight: '32px',
                  color: '#898989',
                  fontSize: '20px',
                  letterSpacing: '-.4px',
                  paddingBottom: '20px',
                }}
              >
                말타에 대해 더욱 궁금하다면?
              </p>
            </CCol>
            <CCol className="text-center" style={{ padding: '4px' }}>
              <CButton onClick={() => this.appdownloadBtnClicked()} className="info-bo-btn-1">
                <img src="/img/clublogo-w.png" width="30px" style={{ marginRight: '10px' }} />
                말타 앱 다운받기
              </CButton>
            </CCol>
            <CCol className="text-center" style={{ padding: '4px' }}>
              <CLink href="https://pf.kakao.com/_zNxhxfK" Target="_blank">
                <CButton className="info-bo-btn-2">
                  <img src="/img/kakao-icon.png" width="24px" style={{ marginRight: '10px' }} />
                  카카오톡 채널로 문의하기
                </CButton>
              </CLink>
            </CCol>
            <CCol
              className="text-center"
              style={{ padding: '4px 4px 40px 4px', borderBottom: '0.5px solid #e4e4e4' }}
            >
              <CLink href="https://www.instagram.com/malta_luxspo/" Target="_blank">
                <CButton className="info-bo-btn-3">
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
          </CCol>
        </CContainer>
        <CCol className="text-center">
          <CButton onClick={() => this.infolistBtnClicked()} className="news-list-btn">
            목록
          </CButton>
        </CCol>
        <CContainer style={{ paddingTop: '50px', paddingBottom: '90px' }}>
          <CRow>
            <img
              className="container-info2"
              style={{ cursor: 'pointer' }}
              src="img/malta-banner.png"
            />
          </CRow>
        </CContainer>
        <ServiceFooter />
        <CModal
          alignment="center"
          centered
          visible={this.state.appdownloadModalOpen}
          onClose={() => this.setState({ appdownloadModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '6px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.popupDeleted()}
                  className="btn-close"
                ></CButton>
              </CCol>
              <CCol>
                <CRow>
                  <CCol xs="8">
                    <h4
                      style={{
                        color: '#141414',
                        fontWeight: 600,
                        lineHeight: '34px',
                      }}
                    >
                      편리하게 승마장 정보 얻고,
                      <br />
                      빠른 예약을 원한다면!
                    </h4>
                    <CFormInput
                      style={{ marginTop: '30px' }}
                      className="modal-input"
                      placeholder="휴대전화 번호를 입력해 주세요"
                    />
                  </CCol>
                  <CCol xs="4">
                    <img style={{ textAlign: 'right' }} src="img/app-download.png" height="160px" />
                  </CCol>
                </CRow>
              </CCol>

              <CCol style={{ margin: 0, padding: 0, textAlign: 'right', marginTop: '18px' }}>
                <CButton className="modal-input-btn">문자로 다운로드 링크받기</CButton>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
      </>
    )
  }
}

export default InfoView6
