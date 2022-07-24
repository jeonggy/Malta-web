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

class InfoView1 extends Component {
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
              승마체험, 이렇게 준비해요!
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
                src="/img/info-img/01.jpg"
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
                처음하는 승마체험, 어떤 것을 준비해야할까?
                <br />
                <br />
                승마를 처음 접하시는 분들에게 <br />
                유익한 정보가 될 수 있는 ​<br />​<br />
                <span style={{ fontWeight: 600, fontSize: '22px', color: '#2E93F9' }}>
                  {' '}
                  승마체험 준비하는 방법!
                </span>{' '}
                <br />
                지금부터 말타와 함께 알아보아요 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/02.jpg"
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
                승마체험 시 복장은 어떻게 해야하며,
                <br />
                어떠한 점을 주의해야 하는지
                <br />
                알고 계신가요?!
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/03.jpg"
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
                <span style={{ color: '#2E93F9' }}>1. 운동화 착용</span> ​<br />
                <br />
                승마체험 시 운동화는 필수인데요! ​<br />
                크록스, 슬리퍼, 샌들은 말에게 밟히거나
                <br />
                예기치 못한 사고 시 발을 충분히 보호할 수 없으며​
                <br />
                ​<br />
                그렇다고 두꺼운 등산화같은 경우는
                <br />
                등자에 발을 넣기가 어렵기때문에
                <br />​ 운동화를 착용하시는 것이 좋습니다!
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/03-0.jpg"
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
                <span style={{ color: '#2E93F9' }}>2. 일반 상의 착용</span>
                <br />
                ​​
                <br />​ 일반적으로 일상에서 착용하는 상의는 <br />
                ​대부분 가능하지만 말을 타고 내릴 때<br />
                ​불편을 줄 수 있는 긴 길이의 상의는 <br />
                ​안전사고로 이어질 수 있기 때문에 ​<br />​<br />
                ​계절에 맞는 편안한 복장을 선택하시는 것이 좋습니다.
                <br />
                ​겨울에는 추위로 인해 경량패딩을 <br />
                ​입어주시는 것을 추천드립니다 :)
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/04.jpg"
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
                <span style={{ color: '#2E93F9' }}>3. 바지 착용</span>
                <br />​ ​<br />​ 승마는 말 위에서 진행하기 때문에
                <br />​ 레깅스처럼 미끄러운 바지, 반바지, 치마는
                <br />​ 기승 시 살이 쓸리는 등 불편할 수 있으므로 ​<br />​<br />​ 딱 붙는 청바지를
                착용하는 것이 좋습니다 :)!
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/04-0.jpg"
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
                <span style={{ color: '#2E93F9' }}>4. 장갑 착용</span>
                <br />​<br />
                고삐를 세게 잡을 경우
                <br />
                손에 ​물집이 잡힐 수 있기 때문에
                <br />
                ​장갑이 있다면 착용하고 기승하시는게 좋습니다
                <br />
                <br />
                장갑은 두껍지 않고 미끄럽지 않은​
                <br />
                장갑으로 코팅 장갑 또는 골프 장갑이 있다면​
                <br />
                가지고 가시면 좋습니다!
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/05.jpg"
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
                <span style={{ color: '#2E93F9' }}>5. 대여 가능 장비</span> ​<br />
                <br />
                승마장마다 대부분 안전조끼, 헬멧은
                <br />
                무상 대여를 진행하지만
                <br />
                혹시 모를 상황에 대비하여
                <br />
                <br />
                ​ 방문하실 승마장을 말타 앱에서 예약, 시설정보,
                <br />
                준비물 확인 등을 한번에 해결!
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/06.jpg"
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
                <span style={{ color: '#2E93F9' }}>기본 안전 사항</span>
                <br />
                ​<br />
                - 큰 소리 내지 않기
                <br />
                - 말 뒤로 이동하지 않기
                <br />
                - 승마장 내에서 뛰어다니지 않기
                <br />- 먹이체험 시 손 조심하기
              </p>
            </CCol>
            <CCol>
              <CImage
                src="/img/info-img/07.jpg"
                alt="img 7"
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
                말타와 함께 즐겁고 안전한
                <br />
                승마체험을 즐겨볼까요 :) ?!
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

export default InfoView1
