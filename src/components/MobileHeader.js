import { React, useState } from 'react'
import {
  COffcanvas,
  CNavbarBrand,
  CNavLink,
  CNavItem,
  CNavbarToggler,
  CNavbar,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CRow,
  CCol,
  CLink,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibFacebook, cibAppStoreIos, cibGooglePlay, cibYoutube } from '@coreui/icons'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

function android() {
  window.location.href =
    'https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US'
}
function ios() {
  window.location.href = 'https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829'
}

const MobileHeader = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CNavbar colorScheme="light" style={{ padding: '8px' }}>
        <CCol>
          <CRow className="row-st-none-header">
            <CCol>
              <CNavbarBrand href="#home" to="/home">
                <img
                  src="img/logo-m.png"
                  alt=""
                  width="auto"
                  height="42"
                  className="d-inline-block align-top logoimg"
                />
              </CNavbarBrand>
            </CCol>
            <CCol style={{ textAlign: 'right' }}>
              <CNavbarToggler
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                onClick={() => setVisible(!visible)}
              />
            </CCol>
          </CRow>

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
    </>
  )
}

export default MobileHeader
