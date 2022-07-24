import { React, Component } from 'react'
import {
  COffcanvas,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  COffcanvasTitle,
  CButton,
  CRow,
  CCol,
  CModal,
  CModalBody,
  CFormInput,
} from '@coreui/react'
import ProgramFilter from './ProgramFilter'

class OffcanvasFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionAddModalOpen: false,
      visible: false,
      appdownloadModalOpen: false,
    }
  }

  infoBtnClicked = () => {
    this.setState({
      questionAddModalOpen: true,
    })
  }
  popupDeleted = () => {
    this.setState({ appdownloadModalOpen: false })
  }

  appdownloadBtnClicked = () => {
    this.setState({
      appdownloadModalOpen: true,
    })
  }

  render() {
    return (
      <>
        <CButton onClick={() => this.setState({ visible: true })} className="side-top-btn-filter">
          <img src="img/filter-icon-b.png" width="20px" />
        </CButton>
        <COffcanvas
          className="offcanvas-main-bottom-back-w"
          placement="bottom"
          backdrop={false}
          visible={this.state.visible}
          onHide={() => this.setState({ visible: false })}
        >
          <COffcanvasHeader style={{ padding: '16px 16px 0px 16px' }}>
            <COffcanvasTitle style={{ color: '#141414', fontSize: '18px' }}>
              프로그램 필터
              <CButton
                style={{ padding: 0, margin: 0 }}
                className="small-menu-1-m"
                onClick={() => this.infoBtnClicked()}
              >
                <img
                  style={{
                    margin: 0,
                    padding: 0,
                    display: 'inline',
                    marginLeft: '2px',
                    paddingBottom: '4px',
                  }}
                  src="img/question-mark.png"
                  alt=" "
                  width="20px"
                />
              </CButton>
              <br />
              <p style={{ fontSize: '14px', color: '#8d8d8d', fontWeight: 300 }}>중복선택 가능</p>
            </COffcanvasTitle>
            <CCloseButton
              className="text-reset offcanvas-main-bottom-close"
              onClick={() => this.setState({ visible: false })}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <ProgramFilter />
            <CCol style={{ paddingTop: '20px' }}>
              <CRow className="row-st-none text-center">
                <CCol xs="6" style={{ padding: '0px 4px' }}>
                  <CButton
                    className="dow-btn1-w-c"
                    onClick={() => this.setState({ visible: false })}
                  >
                    취소
                  </CButton>
                </CCol>
                <CCol xs="6" style={{ padding: '0px 4px' }}>
                  <CButton className="dow-btn1-w">적용하기</CButton>
                </CCol>
              </CRow>
            </CCol>
            <CCol className="text-center" style={{ paddingTop: '30px' }}>
              <h5 style={{ fontSize: '16px' }}>상세한 검색은 말타 앱에서!</h5>
            </CCol>
            <CCol style={{ padding: '4px' }}>
              <CButton className="dow-btn1-m2-w" onClick={() => this.appdownloadBtnClicked()}>
                말타 앱 다운받기
              </CButton>
            </CCol>
          </COffcanvasBody>
        </COffcanvas>
        <CModal
          alignment="center"
          centered
          visible={this.state.questionAddModalOpen}
          onClose={() => this.setState({ questionAddModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '6px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.setState({ questionAddModalOpen: false })}
                  className="btn-close"
                ></CButton>
              </CCol>
              <CCol className="text-left" style={{ paddingBottom: '20px' }}>
                <h4
                  className="highlight"
                  style={{
                    color: '#141414',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: '30px',
                    fontSize: '26px',
                  }}
                >
                  말타는
                  <br />
                  이런 프로그램이 있어요!
                </h4>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0 }}>
                    <img
                      src="img/small-menu-icon-1.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      체험프로그램
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  간식주기, 말타기(평균 5~20분)를 통해 말과 친해질 수 있는
                  <br />
                  프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0 }}>
                    <img
                      src="img/small-menu-icon-2.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      1일 기승
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  1타임(평균 40~50분) 승마수업을 받아볼 수 있는 프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0 }}>
                    <img
                      src="img/small-menu-icon-3.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      쿠폰프로그램
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  횟수별 쿠폰을 구매하여 유효기간 내 원하는 시기에 승마를 이용하는 프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0 }}>
                    <img
                      src="img/small-menu-icon-4.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      월회원/연회원
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  승마시설에 월/년 단위로 회비를 내고 정기적으로 이용하는
                  <br />
                  프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0 }}>
                    <img
                      src="img/small-menu-icon-5.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      자마회원
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  개인 소유의 말을 승마시설에 위탁하여 정기적으로 이용하는
                  <br />
                  프로그램
                </p>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>

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
              <CCol style={{ margin: 0, textAlign: 'center', paddingTop: '18px' }}>
                <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: '22px', margin: 0 }}>
                  APP 설치 URL 전송을 위해 고객님의 휴대폰 번호를 수집합니다.
                  <br />
                  수집된 정보는 문자 발송 완료 후 즉시 삭제됩니다.
                </p>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
      </>
    )
  }
}

export default OffcanvasFilter
