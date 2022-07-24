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
} from '@coreui/react'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

class MobileOffcanvasFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionAddModalOpen: false,
      visible: false,
    }
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
    // this.setState({
    //   appdownloadModalOpen: true,
    // })
  }

  infoBtnClicked = () => {
    this.setState({
      questionAddModalOpen: true,
    })
  }
  resetBtnClicked = () => {
    this.setState({ statusType: false })
  }
  render() {
    return (
      <>
        <CButton className="side-top-btn-filter-m" onClick={() => this.setState({ visible: true })}>
          <img src="img/filter-icon-b.png" alt=" " width="23px" />
        </CButton>
        <COffcanvas
          className="offcanvas-main-bottom-back"
          placement="end"
          visible={this.state.visible}
          onHide={() => this.setState({ visible: false })}
        >
          <COffcanvasHeader
            style={{
              padding: '16px 16px 0px 16px',
              borderBottom: '0.5px solid #eeeeee',
            }}
          >
            <CCol xs="2" style={{ padding: 0 }}>
              <CCloseButton
                className="text-reset offcanvas-main-bottom-close-f"
                onClick={() => this.setState({ visible: false })}
              />
            </CCol>
            <CCol xs="8">
              <COffcanvasTitle style={{ color: '#141414', fontSize: '18px', textAlign: 'center' }}>
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
                      paddingBottom: '5px',
                    }}
                    src="img/question-mark.png"
                    alt=" "
                    width="20px"
                  />
                </CButton>
                <br />
                <p
                  style={{
                    fontSize: '12px',
                    color: '#8d8d8d',
                    fontWeight: 300,
                    marginBottom: '6px',
                  }}
                >
                  중복선택 가능
                </p>
              </COffcanvasTitle>
            </CCol>
            <CCol xs="2" style={{ padding: 0, margin: 0 }}>
              <CButton className="small-menu-reset" onClick={() => this.resetBtnClicked()}>
                초기화
              </CButton>
            </CCol>
          </COffcanvasHeader>
          <COffcanvasBody style={{ padding: 0 }}>
            <CCol style={{ padding: '2px 20px 20px 20px', borderBottom: '8px solid #f8f8f8' }}>
              <CCol className="text-center" style={{ paddingTop: '14px' }}>
                <h5 style={{ fontSize: '14px' }}>상세한 검색은 말타 앱에서!</h5>
              </CCol>
              <CCol style={{ paddingTop: '4px' }}>
                <CButton className="dow-btn1-m2-f" onClick={() => this.appdownloadBtnClicked()}>
                  말타 앱 다운받기
                </CButton>
              </CCol>
            </CCol>
            <CCol style={{ padding: 0, margin: 0, borderBottom: '8px solid #f8f8f8' }}>
              <CCol style={{ padding: '18px' }}>
                <CRow className="row-st-none">
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
                    <img src="img/small-menu-icon-1.png" alt=" " width="24px" />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        color: '#141414',
                        margin: 0,
                        paddingTop: '5px',
                        fontSize: '15px',
                      }}
                    >
                      체험 프로그램
                    </h6>
                  </CCol>
                </CRow>
                <CCol className="text-left" style={{ paddingTop: '10px' }}>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    먹이주기
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    승마장비
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    승마명언
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    승마짤
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    기타
                  </CButton>
                </CCol>
              </CCol>
            </CCol>

            <CCol style={{ padding: 0, margin: 0, borderBottom: '8px solid #f8f8f8' }}>
              <CCol style={{ padding: '18px' }}>
                <CRow className="row-st-none">
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
                    <img src="img/small-menu-icon-2.png" alt=" " width="24px" />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        color: '#141414',
                        margin: 0,
                        paddingTop: '5px',
                        fontSize: '15px',
                      }}
                    >
                      1일 기승
                    </h6>
                  </CCol>
                </CRow>
                <CCol className="text-left" style={{ paddingTop: '10px' }}>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    먹이주기
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    승마장비
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    승마명언
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    승마짤
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    기타
                  </CButton>
                </CCol>
              </CCol>
            </CCol>

            <CCol style={{ padding: 0, margin: 0, borderBottom: '8px solid #f8f8f8' }}>
              <CCol style={{ padding: '18px' }}>
                <CRow className="row-st-none">
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
                    <img src="img/small-menu-icon-3.png" alt=" " width="24px" />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        color: '#141414',
                        margin: 0,
                        paddingTop: '5px',
                        fontSize: '15px',
                      }}
                    >
                      쿠폰 프로그램
                    </h6>
                  </CCol>
                </CRow>
                <CCol className="text-left" style={{ paddingTop: '10px' }}>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    먹이주기
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    승마장비
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    승마명언
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    승마짤
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    기타
                  </CButton>
                </CCol>
              </CCol>
            </CCol>

            <CCol style={{ padding: 0, margin: 0, borderBottom: '8px solid #f8f8f8' }}>
              <CCol style={{ padding: '18px' }}>
                <CRow className="row-st-none">
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
                    <img src="img/small-menu-icon-4.png" alt=" " width="24px" />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        color: '#141414',
                        margin: 0,
                        paddingTop: '5px',
                        fontSize: '15px',
                      }}
                    >
                      월회원/연회원
                    </h6>
                  </CCol>
                </CRow>
                <CCol className="text-left" style={{ paddingTop: '10px' }}>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    먹이주기
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    승마장비
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    승마명언
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    승마짤
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    기타
                  </CButton>
                </CCol>
              </CCol>
            </CCol>

            <CCol style={{ padding: 0, margin: 0, borderBottom: '8px solid #f8f8f8' }}>
              <CCol style={{ padding: '18px' }}>
                <CRow className="row-st-none">
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
                    <img src="img/small-menu-icon-5.png" alt=" " width="24px" />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontWeight: 600,
                        color: '#141414',
                        margin: 0,
                        paddingTop: '5px',
                        fontSize: '15px',
                      }}
                    >
                      자마회원
                    </h6>
                  </CCol>
                </CRow>
                <CCol className="text-left" style={{ paddingTop: '10px' }}>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    먹이주기
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    승마장비
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    승마명언
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    승마짤
                  </CButton>
                  <CButton
                    className={`filter-btn ${
                      this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'
                    }`}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    기타
                  </CButton>
                </CCol>
              </CCol>
            </CCol>
            <CCol style={{ paddingBottom: '70px' }}></CCol>
            <CRow className="row-st-none text-center">
              <CCol className="btn-fixed">
                <CButton className="dow-btn1-w-m">적용하기</CButton>
              </CCol>
            </CRow>
          </COffcanvasBody>
        </COffcanvas>

        <COffcanvas
          className="offcanvas-main-bottom-back"
          placement="end"
          visible={this.state.questionAddModalOpen}
          onHide={() => this.setState({ questionAddModalOpen: false })}
        >
          <COffcanvasHeader>
            <CRow>
              <CCol style={{ position: 'fixed', backgroundColor: '#fff' }}>
                <CCol className="text-left" style={{ paddingBottom: '10px' }}>
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
                <CCol style={{ margin: 0, padding: 0 }}>
                  <CButton
                    style={{ bottom: 'none', border: 'none', top: 0, right: '20px' }}
                    onClick={() => this.setState({ questionAddModalOpen: false })}
                    className="btn-close"
                  ></CButton>
                </CCol>
              </CCol>
            </CRow>
          </COffcanvasHeader>
          <COffcanvasBody>
            <CCol style={{ padding: '6px' }}>
              <CCol
                style={{
                  marginBottom: '12px',
                  marginTop: '50px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
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
                  간식주기, 말타기(평균 5~20분)를 통해 말과 친해질 수 있는 프로그램
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
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
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
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
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
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
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
                  승마시설에 월/년 단위로 회비를 내고 정기적으로 이용하는 프로그램
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
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
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
                  개인 소유의 말을 승마시설에 위탁하여 정기적으로 이용하는 프로그램
                </p>
              </CCol>
            </CCol>
            <CCol style={{ textAlign: 'center' }}>
              <CButton
                style={{
                  backgroundColor: '#2E93F9',
                  color: '#fff',
                  width: '100px',
                  padding: 0,
                  marginTop: '24px',
                  borderRadius: '30px',
                  border: 0,
                  height: '46px',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
                onClick={() => this.setState({ questionAddModalOpen: false })}
              >
                닫기
              </CButton>
            </CCol>
          </COffcanvasBody>
        </COffcanvas>
      </>
    )
  }
}

export default MobileOffcanvasFilter
