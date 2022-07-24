import { React, useState } from 'react'
import {
  COffcanvas,
  CNavLink,
  CNavItem,
  CNavbar,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CRow,
  CCol,
  CLink,
  CButton,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibFacebook, cibAppStoreIos, cibGooglePlay, cibYoutube } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

const android = () => {
  window.location.href =
    'https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US'
}
const ios = () => {
  window.location.href = 'https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829'
}
// const searchInputClicked = () => {
//   document.location.href = '#/searchpage'
//   window.scrollTo(0, 0)
// }

const MobileHeaderHome = ({ setTogglerVisible }) => {
  const [inputVisible, inputSetVisible] = useState(false)
  const [visible, setVisible] = useState(false)

  const togglerClicked = () => {
    setTogglerVisible()
    setVisible(!visible)
  }
  const inputClicked = () => {
    inputSetVisible(true)
  }
  // function test() {
  //   document.activeElement.blur()
  //   inputSetVisible(true)
  // }
  return (
    <>
      <CRow className="row-st-none-header">
        <CCol xs="10" style={{ padding: '6px' }} onClick={() => inputClicked()}>
          <CRow className="home-search-m">
            <CCol xs="10" style={{ margin: 0, textAlign: 'left', padding: '10px 0px 10px 14px' }}>
              <p className="home-search-input-p-m">승마장명 또는 지역명 입력</p>
            </CCol>
            <CCol xs="2" style={{ margin: 0, textAlign: 'right', padding: '10px 14px 10px 0px' }}>
              <img src="img/search-b.png" width="24px" />
            </CCol>
          </CRow>
        </CCol>
        <CCol xs="2">
          {' '}
          <CButton className="toggler-m" onClick={() => togglerClicked()}>
            <img src="img/mobile/toggler-icon-m.png" width="28px" />
          </CButton>
          {/* <CNavbarToggler
            className="toggler-m"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          /> */}
        </CCol>
      </CRow>
      <CNavbar colorScheme="light" style={{ padding: 0 }}>
        <CCol>
          <COffcanvas
            id="offcanvasNavbar"
            placement="end"
            portal={false}
            visible={visible}
            onHide={() => setVisible(false)}
          >
            <COffcanvasHeader>
              <CCloseButton
                className="text-reset close-btn-header"
                onClick={() => setVisible(false)}
              />
            </COffcanvasHeader>
            <COffcanvasBody style={{ padding: 0 }}>
              <CNavbarNav style={{ padding: '10px 16px' }}>
                <CNavItem>
                  <CNavLink
                    className="nav-m-st"
                    to="/home"
                    href="#home"
                    onClick={() => setVisible(false)}
                  >
                    승마장 찾기
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink className="nav-m-st" href="#info" onClick={() => setVisible(false)}>
                    승마정보
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink className="nav-m-st" href="#news" onClick={() => setVisible(false)}>
                    승마소식
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink className="nav-m-st" href="#notice" onClick={() => setVisible(false)}>
                    공지사항
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink className="nav-m-st" href="#faq" onClick={() => setVisible(false)}>
                    FAQ
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink
                    className="nav-m-st"
                    href="#maltaappservice"
                    onClick={() => setVisible(false)}
                  >
                    서비스소개
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
              <CCol style={{ padding: '14px 18px', margin: 0 }}>
                <CRow>
                  <CCol style={{ padding: '4px' }}>
                    <CButton className="dow-btn1-m" onClick={() => ios()}>
                      <CIcon
                        icon={cibAppStoreIos}
                        width="18px"
                        style={{ paddingTop: '2px', paddingRight: '3px', color: '#49cbff' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}> APP STORE</span>
                    </CButton>
                  </CCol>
                  <CCol style={{ padding: '4px' }}>
                    <CButton className="dow-btn1-m" onClick={() => android()}>
                      <CIcon
                        icon={cibGooglePlay}
                        width="16px"
                        style={{ paddingTop: '3px', paddingRight: '3px', color: '#49cbff' }}
                      />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}> PLAY STORE</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCol>
              <CCol>
                <img src="img/mobile/mobile-banner1.jpg" alt="" width="auto" height="" />
              </CCol>

              <CCol style={{ padding: '20px 10px 0px 10px' }}>
                <CRow className="row-st-none">
                  <CCol className="text-center" style={{ padding: '10px 0px' }}>
                    <CLink
                      href="https://blog.naver.com/luxspo"
                      Target="_blank"
                      style={{ textAlign: 'center', margin: 0 }}
                    >
                      <div className="blog-logo-m" />
                    </CLink>
                    <p className="menu-m-sns-p">블로그</p>
                  </CCol>
                  <CCol className="row-padding-none">
                    <CLink href="https://www.instagram.com/malta_luxspo/" Target="_blank">
                      <CIcon className="icon-sns" icon={cibInstagram} width="20px" />
                    </CLink>
                    <p className="menu-m-sns-p">인스타</p>
                  </CCol>
                  <CCol className="row-padding-none">
                    <CLink href="https://www.facebook.com/malta.luxspo/" Target="_blank">
                      <CIcon className="icon-sns" icon={cibFacebook} width="20px" />
                    </CLink>
                    <p className="menu-m-sns-p">페이스북</p>
                  </CCol>
                  <CCol className="row-padding-none">
                    <CLink
                      href="https://www.youtube.com/channel/UCFfyX9Q7Gt1ZwHdNY8ZAY5w"
                      Target="_blank"
                    >
                      <CIcon className="icon-sns" icon={cibYoutube} width="20px" />
                    </CLink>
                    <p className="menu-m-sns-p">유튜브</p>
                  </CCol>
                </CRow>
              </CCol>
            </COffcanvasBody>
          </COffcanvas>
        </CCol>
      </CNavbar>
      <COffcanvas
        className="offcanvas-main-bottom-back"
        placement="end"
        visible={inputVisible}
        onHide={() => inputSetVisible(false)}
      >
        <COffcanvasHeader row style={{ padding: '10px', display: 'inline-block' }}>
          <CRow className="row-st-none">
            <CCol xs="1" style={{ padding: '6px' }} onClick={() => inputSetVisible(false)}>
              <img src="img/mobile/back-icon.png" width="12px" />
            </CCol>
            <CCol xs="11" style={{ padding: '0px 6px 0px 0px' }}>
              <CCol className="float-right text-right">
                <CFormInput
                  autoFocus={inputVisible}
                  className="search-page-input-m"
                  placeholder="승마장, 주소 검색"
                />
              </CCol>
              {/* <CButton color="light" type="submit" className="search-input-btn-m">
            <img src="img/search.png" width="24px" />
          </CButton> */}
            </CCol>
          </CRow>
        </COffcanvasHeader>
        <COffcanvasBody>
          <CCol style={{ padding: '10px 0px 0px 6px' }}>
            <h5 style={{ color: '#141414', fontSize: '18px', fontWeight: 600 }}>최근검색</h5>
          </CCol>
          <CCol style={{ textAlign: 'center', paddingTop: '100px' }}>
            <img src="img/mobile/warning-icon.png" width="48px" />
            <p style={{ color: '#b7b7b7', fontSize: '15px', paddingTop: '4px', fontWeight: 500 }}>
              승마장, 주소를 검색하세요
            </p>
          </CCol>
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}

export default MobileHeaderHome

MobileHeaderHome.propTypes = {
  setTogglerVisible: Function,
} // 부모에게 가져온 파라미터를 쓰기위해 써야함 (함수를 받을 것이다 라는 걸 알려줌)
