import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CContainer,
  CTable,
  CTableBody,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'
import ServiceFooter from './servicefooter/ServiceFooter'
import Fade from 'react-reveal/Fade'
import AppHeaderBanner from '../../../components/AppHeaderBanner'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

class MaltaServiceInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  termsBtnClicked = () => {
    document.location.href = '#/maltaserviceterms'
    // window.scrollTo(0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <CCol
          style={{
            backgroundColor: '#f0f7ff',
            height: '190px',
            width: '100%',
          }}
        >
          <CContainer className="container-app-service-info">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                display: 'inline-block',
                fontSize: '46px',
                paddingTop: '58px',
                margin: 0,
              }}
            >
              편리한 승마 예약을 위한 말타
            </h2>
            <p style={{ fontSize: '18px', color: '#141414', fontWeight: 200, paddingTop: '4px' }}>
              말타의 서비스를 소개합니다
            </p>
          </CContainer>
        </CCol>
        <CContainer className="container-app-service-info">
          <CCol>
            <CCol
              style={{
                // backgroundImage: 'url(img/main/appservice-img.jpg)',
                marginTop: '70px',
                marginBottom: '90px',
                padding: '100px 0px 10px 0px',
                borderRadius: '24px',
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  color: '#141414',
                  lineHeight: '70px',
                }}
                className="motion1"
              >
                <span
                  style={{
                    fontWeight: '500',
                    fontSize: '56px',
                    color: '#fff',
                    backgroundColor: '#0dc6ff',
                  }}
                >
                  베이직
                </span>
                <span style={{ fontWeight: '200', fontSize: '56px', color: '#141414' }}>과 </span>
                <span
                  style={{
                    fontWeight: '500',
                    fontSize: '52px',
                    color: '#fff',
                    backgroundColor: '#2E93F9',
                  }}
                >
                  프리미엄
                </span>
                <br />
                <span style={{ fontWeight: '500', fontSize: '60px', color: '#141414' }}>
                  어떻게 다를까요?
                </span>
              </h2>{' '}
            </CCol>

            <CCol>
              <CRow>
                <CCol xs="6" className="service-img1">
                  <img
                    style={{ marginTop: '30px', width: '500px' }}
                    src="./img/main/service-1_large.png"
                  />
                </CCol>

                <CCol xs="5" style={{ textAlign: 'left', paddingTop: '160px' }}>
                  <Fade top>
                    <h2
                      style={{
                        fontWeight: '500',
                        fontSize: '50px',
                        color: '#141414',
                        lineHeight: '64px',
                      }}
                    >
                      모든 회원 관리를
                      <br />앱 하나로 편리하게
                    </h2>
                    <p
                      style={{
                        fontSize: '20px',
                        color: '#141414',
                        paddingTop: '18px',
                        paddingBottom: '10px',
                      }}
                    >
                      기존 회원부터 신규 회원까지 예약과
                      <br />
                      쿠폰 관리를 스마트하게 관리할 수 있습니다.
                    </p>{' '}
                    <CRow>
                      <img style={{ marginTop: '20px', width: '130px' }} src="./img/icon-cop.png" />
                      <img style={{ marginTop: '20px', width: '130px' }} src="./img/icon-da.png" />
                    </CRow>
                  </Fade>
                </CCol>
              </CRow>
            </CCol>
            <CCol style={{ paddingTop: '150px' }}>
              <CRow>
                <CCol
                  xs="5"
                  style={{ textAlign: 'left', paddingTop: '170px', paddingLeft: '90px' }}
                >
                  {' '}
                  <Fade top>
                    <h2
                      style={{
                        fontWeight: '500',
                        fontSize: '50px',
                        color: '#141414',
                        lineHeight: '64px',
                      }}
                    >
                      다양한 클럽 일정
                      <br />
                      정확하게 관리
                    </h2>
                    <p style={{ fontSize: '20px', color: '#141414', paddingTop: '18px' }}>
                      말타 앱에 등록된 일정 외에도 직접 <br />
                      타이틀을 입력하여 더욱 정확한
                      <br /> 일정 관리가 가능합니다.
                    </p>
                  </Fade>
                </CCol>

                <CCol xs="6" className="service-img2" style={{ textAlign: 'left' }}>
                  <img
                    style={{ marginTop: '30px', width: '600px' }}
                    src="./img/main/service-2_large.png"
                  />
                </CCol>
              </CRow>
            </CCol>
            <CCol style={{ paddingTop: '150px' }}>
              <CRow>
                <CCol xs="7" className="service-img3">
                  <img
                    style={{ margin: '30px 0px 0px 0px', width: '650px' }}
                    src="./img/main/service-3_large.png"
                  />
                </CCol>
                <CCol xs="5" style={{ textAlign: 'left', paddingTop: '190px' }}>
                  <Fade top>
                    <h2
                      style={{
                        fontWeight: '500',
                        fontSize: '50px',
                        color: '#141414',
                        lineHeight: '64px',
                      }}
                    >
                      앱과 PC의 빠른 연동
                    </h2>
                    <p style={{ fontSize: '20px', paddingTop: '18px', color: '#141414' }}>
                      말타 앱의 관리 기능을 PC 웹 페이지로 <br />
                      더욱 편리하고 상세하게 만나보세요!
                    </p>
                  </Fade>
                </CCol>
              </CRow>
            </CCol>

            <CCol
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '100px',
              }}
            >
              <CCol style={{ padding: '160px 0px 60px 0px' }}>
                <p style={{ fontSize: '50px', color: '#141414', fontWeight: 500 }}>
                  사용자를 생각하는 합리적인 요금제
                </p>
              </CCol>
              <CRow>
                <CCol style={{ padding: '20px' }}>
                  <CCol
                    style={{
                      backgroundColor: '#969696',
                      padding: '30px 10px',
                      borderRadius: '20px',
                      marginBottom: '30px',
                    }}
                  >
                    <p style={{ color: '#fff', fontSize: '44px', margin: 0, fontWeight: '500' }}>
                      BASIC
                    </p>
                    <h2 style={{ fontWeight: '300', fontSize: '28px', color: '#fff' }}>무료</h2>
                    <p
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 200,
                        margin: 0,
                      }}
                    >
                      승마체험 / 일일기승
                      <br />
                      수수료 10% (PG 별도)
                    </p>
                  </CCol>
                  <CCol className="info-price-card">
                    <CCol className="info-price-card-sub">
                      <CCol style={{ padding: '4px 20px' }}>
                        <CTable align="middle">
                          <CTableBody>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                예약관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center', fontSize: '20px', color: '#8d8d8d' }}
                              >
                                일부 가능
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                마필관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                코칭/레슨
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                일정관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center', fontSize: '20px', color: '#8d8d8d' }}
                              >
                                수기 입력 불가
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                회원관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                {' '}
                                <CIcon className="icon-sns-x" icon={cilXCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                정산
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                {' '}
                                <CIcon className="icon-sns-x" icon={cilXCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                쿠폰관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                {' '}
                                <CIcon className="icon-sns-x" icon={cilXCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CCol>
                  </CCol>
                </CCol>
                <CCol style={{ padding: '20px' }}>
                  <CCol
                    style={{
                      backgroundColor: '#2E93F9',
                      borderRadius: '20px',
                      padding: '30px 10px',
                      marginBottom: '30px',
                    }}
                  >
                    <p style={{ color: '#fff', fontSize: '44px', margin: 0, fontWeight: '500' }}>
                      PREMIUM
                    </p>
                    <h2 style={{ fontWeight: '300', fontSize: '28px', color: '#fff' }}>
                      30,000원 /월
                    </h2>
                    <p
                      style={{
                        color: '#fff',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 200,
                        margin: 0,
                      }}
                    >
                      승마체험 / 일일기승
                      <br />
                      수수료 10% (PG / VAT. 별도)
                    </p>
                  </CCol>
                  <CCol className="info-price-card">
                    <CCol className="info-price-card-sub">
                      <CCol style={{ padding: '4px 20px' }}>
                        <CTable align="middle">
                          <CTableBody>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                예약관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                마필관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                코칭/레슨
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                일정관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center', fontSize: '20px', color: '#2E93F9' }}
                              >
                                수기 입력 가능
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                회원관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                정산
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                            <CTableRow align="middle">
                              <CTableDataCell
                                align="middle"
                                colSpan="2"
                                className="info-price-card-txt"
                              >
                                쿠폰관리
                              </CTableDataCell>
                              <CTableDataCell
                                align="middle"
                                colSpan="10"
                                style={{ textAlign: 'center' }}
                              >
                                <CIcon className="icon-sns2" icon={cilCheckCircle} width="42px" />
                              </CTableDataCell>
                            </CTableRow>
                          </CTableBody>
                        </CTable>
                      </CCol>
                    </CCol>
                  </CCol>
                </CCol>
              </CRow>
            </CCol>
            <CCol style={{ textAlign: 'left', margin: '70px 0px 0px 20px' }}>
              <h3 style={{ fontSize: '16px' }}>
                * 모든 요금제의 승마체험/일일기승 프로그램의 10% 수수료가 부과됩니다.
              </h3>
              <p style={{ fontSize: '16px', color: '#757575', lineHeight: '26px' }}>
                ㆍ예 약 관 리 : 베이직 요금제는 일일체험/일일기승 한정 예약의 확인 및 승인이
                가능합니다.
                <br />
                ㆍ회 원 관 리 : 승마클럽의 기존 회원까지 앱으로 관리할 수 있는 기능입니다.
                <br />
                ㆍ정 산 : 총 결제금액, 판매 수량 등 운영에 필요한 수치를 제공하는 기능입니다.
                <br />
                ㆍ마 필 관 리 : 마필별 장제, 구충 등의 건강/운동 내용을 기록할 수 있는 기능입니다.
                <br />
                ㆍ코칭 / 레슨 : 수업평가 기능을 통해 회원별/예약별 레슨진도를 확인할 수 있는
                기능입니다.
                <br />
                ㆍ일 정 관 리 : 베이직 요금제는 말타 앱에서 제공되는 일정만 등록 가능하며, 프리미엄
                요금제는 수기로 자유로운 입력이 가능합니다.
                <br />
                ㆍ쿠 폰 관 리 : 말타 앱에 회원의 쿠폰을 등록하여 유효기간, 사용 등을 자동으로
                관리하는 기능입니다.
              </p>
            </CCol>
            <CCol className="text-center" style={{ padding: '40px 0px 90px 0px' }}>
              <CButton className="terms-btn1" onClick={() => this.termsBtnClicked()}>
                파트너스 문의
              </CButton>
            </CCol>
          </CCol>
          <CRow></CRow>
        </CContainer>
        <ServiceFooter />
      </>
    )
  }
}

export default MaltaServiceInfo
