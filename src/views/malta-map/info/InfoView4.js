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

class InfoView4 extends Component {
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
              말타 사용방법
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
                src="/img/info-img/10.jpg"
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
                src="/img/info-img/11.jpg"
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
                src="/img/info-img/12.jpg"
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
                src="/img/info-img/13.jpg"
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
                src="/img/info-img/14.jpg"
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
                src="/img/info-img/15.jpg"
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
                승마를 즐기기 좋은 요즘 계절!
                <br />
                ​<br />
                말타를 통해 더욱 간편하게​
                <br />
                승마장을 예약해볼까요 :) ?!
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

export default InfoView4
