import React, { Component } from 'react'
import { CRow, CCol, CButton, CTable, CTableBody, CTableRow, CTableDataCell } from '@coreui/react'
import MobileHeader from '../../../components/MobileHeader'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

class MobileServiceInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  termsBtnClicked = () => {
    document.location.href = '#/maltaserviceterms'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <MobileHeader />
        <CCol
          style={{
            backgroundColor: '#f0f7ff',
            width: '100%',
            padding: '50px 20px 40px 20px',
          }}
        >
          <h2
            style={{
              fontWeight: 600,
              color: '#141414',
              display: 'inline-block',
              fontSize: '28px',
              margin: 0,
            }}
          >
            편리한 승마 예약을 위한 말타
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#141414',
              fontWeight: 200,
              paddingTop: '4px',
              margin: 0,
            }}
          >
            말타의 서비스를 소개합니다
          </p>
        </CCol>
        <CCol style={{ padding: '16px' }}>
          <CCol
            style={{
              // backgroundImage: 'url(img/main/appservice-img.jpg)',
              // marginTop: '30px',
              // marginBottom: '60px',
              padding: '60px 0px 34px 0px',
              // borderRadius: '20px',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                color: '#141414',
              }}
            >
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '36px',
                  color: '#fff',
                  backgroundColor: '#0dc6ff',
                }}
              >
                베이직
              </span>
              <span style={{ fontWeight: '200', fontSize: '36px', color: '#00000' }}>과 </span>
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '36px',
                  color: '#fff',
                  backgroundColor: '#2E93F9',
                }}
              >
                프리미엄
              </span>
              <br />
              <span style={{ fontWeight: '400', fontSize: '36px', color: '#00000' }}>
                어떻게 다를까요?
              </span>
            </h2>
          </CCol>
          <CCol>
            <CRow>
              <CCol xs="12" className="service-img1">
                <img
                  style={{ margin: '30px 0px 0px 0px', width: '300px' }}
                  src="./img/main/service-1_large.png"
                />
              </CCol>

              <CCol xs="12" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: '28px',
                    color: '#141414',
                    lineHeight: '35px',
                  }}
                >
                  모든 회원 관리를
                  <br />앱 하나로 편리하게
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#141414',
                    paddingTop: '8px',
                    lineHeight: '22px',
                  }}
                >
                  기존 회원부터 신규 회원까지
                  <br />
                  예약과 쿠폰 관리를 스마트하게
                  <br />
                  관리할 수 있습니다.
                </p>
              </CCol>
            </CRow>
          </CCol>
          <CCol style={{ paddingTop: '70px' }}>
            <CRow>
              <CCol xs="12" className="service-img2" style={{ textAlign: 'center' }}>
                <img
                  style={{ margin: '30px 0px 0px 0px', width: '300px' }}
                  src="./img/main/service-2_large.png"
                />
              </CCol>
              <CCol xs="12" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: '28px',
                    color: '#141414',
                    lineHeight: '35px',
                  }}
                >
                  다양한 클럽 일정
                  <br />
                  정확하게 관리
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#141414',
                    paddingTop: '8px',
                    lineHeight: '22px',
                  }}
                >
                  말타 앱에 등록된 일정 외에도
                  <br />
                  직접 타이틀을 입력하여
                  <br />
                  더욱 정확한 일정 관리가 가능합니다.
                </p>
              </CCol>
            </CRow>
          </CCol>
          <CCol style={{ paddingTop: '70px' }}>
            <CRow>
              <CCol xs="12" className="service-img3">
                <img
                  style={{ margin: '30px 0px 0px 0px', width: '300px' }}
                  src="./img/main/service-3_large.png"
                />
              </CCol>
              <CCol xs="12" style={{ textAlign: 'center', paddingTop: '40px' }}>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: '28px',
                    color: '#141414',
                  }}
                >
                  앱과 PC의 빠른 연동
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#141414',
                    paddingTop: '8px',
                    lineHeight: '22px',
                  }}
                >
                  말타 앱의 관리 기능을
                  <br />
                  PC 웹 페이지로 더욱 편리하고
                  <br />
                  상세하게 만나보세요!
                </p>
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
            <CCol style={{ padding: '40px 0px 10px 0px' }}>
              <p
                style={{ fontSize: '28px', color: '#141414', fontWeight: 600, lineHeight: '35px' }}
              >
                사용자를 생각하는
                <br />
                합리적인 요금제
              </p>
            </CCol>
            <CCol style={{ paddingBottom: '60px' }}>
              <CCol
                style={{
                  backgroundColor: '#969696',
                  padding: '20px 10px',
                  borderRadius: '20px',
                  marginBottom: '14px',
                }}
              >
                <p style={{ color: '#fff', fontSize: '30px', margin: 0, fontWeight: '500' }}>
                  BASIC
                </p>
                <h2 style={{ fontWeight: '300', fontSize: '26px', color: '#fff' }}>무료</h2>
                <p
                  style={{
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: '20px',
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
                            className="info-price-card-txt-m table-row-pa"
                          >
                            예약관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{
                              textAlign: 'center',
                              fontSize: '18px',
                              color: '#8d8d8d',
                              padding: '20px 0',
                            }}
                          >
                            일부 가능
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            마필관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            코칭/레슨
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            일정관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{
                              textAlign: 'center',
                              fontSize: '18px',
                              color: '#8d8d8d',
                              padding: '20px 0',
                            }}
                          >
                            수기 입력 불가
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            회원관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            {' '}
                            <CIcon className="icon-sns-x" icon={cilXCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            정산
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            {' '}
                            <CIcon className="icon-sns-x" icon={cilXCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            쿠폰관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            {' '}
                            <CIcon className="icon-sns-x" icon={cilXCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CCol>
              </CCol>
            </CCol>
            <CCol>
              <CCol
                style={{
                  backgroundColor: '#2E93F9',
                  borderRadius: '20px',
                  padding: '30px 10px',
                  marginBottom: '14px',
                }}
              >
                <p style={{ color: '#fff', fontSize: '30px', margin: 0, fontWeight: '500' }}>
                  PREMIUM
                </p>
                <h2 style={{ fontWeight: '300', fontSize: '26px', color: '#fff' }}>30,000원 /월</h2>
                <p
                  style={{
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: '20px',
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
                            className="info-price-card-txt-m table-row-pa"
                          >
                            예약관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            마필관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            코칭/레슨
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            일정관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{
                              textAlign: 'center',
                              fontSize: '18px',
                              color: '#2E93F9',
                              padding: '20px 0',
                            }}
                          >
                            수기 입력 가능
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            회원관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            정산
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                        <CTableRow align="middle">
                          <CTableDataCell
                            align="middle"
                            colSpan="2"
                            className="info-price-card-txt-m table-row-pa"
                          >
                            쿠폰관리
                          </CTableDataCell>
                          <CTableDataCell
                            align="middle"
                            colSpan="10"
                            style={{ textAlign: 'center' }}
                            className="table-row-pa"
                          >
                            <CIcon className="icon-sns2" icon={cilCheckCircle} width="36px" />
                          </CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CCol>
              </CCol>
            </CCol>
          </CCol>

          <CCol style={{ textAlign: 'left', margin: '50px 10px 10px 10px' }}>
            <h3 style={{ fontSize: '14px' }}>
              * 모든 요금제의 승마체험/일일기승 프로그램의 10% 수수료가 부과됩니다.
            </h3>
            <p style={{ fontSize: '14px', color: '#757575', lineHeight: '20px' }}>
              ㆍ예약관리 : 베이직 요금제는 일일체험/일일기승 한정 예약의 확인 및 승인이 가능합니다.
              <br />
              ㆍ회원관리 : 승마클럽의 기존 회원까지 앱으로 관리할 수 있는 기능입니다.
              <br />
              ㆍ정산 : 총 결제금액, 판매 수량 등 운영에 필요한 수치를 제공하는 기능입니다.
              <br />
              ㆍ마필관리 : 마필별 장제, 구충 등의 건강/운동 내용을 기록할 수 있는 기능입니다.
              <br />
              ㆍ코칭 / 레슨 : 수업평가 기능을 통해 회원별/예약별 레슨진도를 확인할 수 있는
              기능입니다.
              <br />
              ㆍ일정관리 : 베이직 요금제는 말타 앱에서 제공되는 일정만 등록 가능하며, 프리미엄
              요금제는 수기로 자유로운 입력이 가능합니다.
              <br />
              ㆍ쿠폰관리 : 말타 앱에 회원의 쿠폰을 등록하여 유효기간, 사용 등을 자동으로 관리하는
              기능입니다.
            </p>
          </CCol>
          <CCol className="text-center" style={{ padding: '20px 0px 40px 0px' }}>
            <CButton className="help-btn1-m" onClick={() => this.termsBtnClicked()}>
              파트너스 문의
            </CButton>
          </CCol>
        </CCol>

        <CCol style={{ padding: '20px 10px 20px 10px', textAlign: 'center' }}>
          <CRow className="row-st-none">
            <CCol>
              <h6 className="footer-font-mobile">
                (주)럭스포 LUXSPO
                <br />
                Copyright © LUXSPO Corp.
                <br />
                All Rights Reserved.
              </h6>
            </CCol>
          </CRow>
        </CCol>
      </>
    )
  }
}

export default MobileServiceInfo
