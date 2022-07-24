import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderNav,
  CNavLink,
  CNavItem,
  CHeaderBrand,
  CCol,
} from '@coreui/react'

function tabActive(key) {
  var address = window.location.href

  var array = address.split('/')

  if (array.lastItem == key) {
    return true
  } else {
    return false
  }
}
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  // alert(window.location.href)

  const activeStyle = {
    background: 'black',
    color: 'white',
  }

  return (
    <>
      <CHeader position="sticky" className="mb-4 mapheader" style={{ minWidth: '1280px' }}>
        <CContainer>
          <CHeaderBrand href="#home" to="/home">
            <img
              src="img/logo.png"
              alt=""
              width="auto"
              height="46"
              className="d-inline-block align-top logoimg"
            />
          </CHeaderBrand>
          <CHeaderNav>
            <CNavItem>
              <CNavLink
                active={tabActive('home')}
                style={{ margin: '0px 14px' }}
                to="/home"
                href="#home"
              >
                승마장 찾기
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={tabActive('info')}
                style={{ margin: '0px 14px' }}
                href="#info"
                to="/info"
              >
                승마정보
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink active={tabActive('news')} style={{ margin: '0px 14px' }} href="#news">
                승마소식
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink active={tabActive('notice')} style={{ margin: '0px 14px' }} href="#notice">
                공지사항
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink active={tabActive('faq')} style={{ margin: '0px 14px' }} href="#faq">
                FAQ
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={tabActive('maltaappservice')}
                style={{ margin: '0px 0px 0px 14px' }}
                href="#maltaappservice"
              >
                서비스소개
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          {/* <CHeaderNav>
            <CNavItem>
              <CNavLink href="https://www.instagram.com/malta_luxspo/">
                <CIcon icon={cibInstagram} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://blog.naver.com/luxspo">
                <div width="30px" className="blog-logo" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://www.facebook.com/malta.luxspo/">
                <CIcon icon={cibFacebook} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://www.youtube.com/channel/UCFfyX9Q7Gt1ZwHdNY8ZAY5w">
                <CIcon icon={cibYoutube} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829">
                <CIcon icon={cibApple} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US">
                <CIcon icon={cibGooglePlay} size="lg" />
              </CNavLink>
            </CNavItem>
          </CHeaderNav> */}
        </CContainer>
      </CHeader>
    </>
  )
}

export default AppHeader
