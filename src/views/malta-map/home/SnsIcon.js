import { React, Component } from 'react'
import { CCol, CLink, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibFacebook, cibAppStoreIos, cibGooglePlay, cibYoutube } from '@coreui/icons'

class SnsIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <CCol style={{ padding: '10px 0px' }}>
        <CRow className="row-padding-none-w">
          <CLink href="https://www.instagram.com/malta_luxspo/" Target="_blank">
            <CIcon className="icon-sns" icon={cibInstagram} width="19px" />
          </CLink>
        </CRow>
        <CRow className="row-padding-none-b">
          <CLink
            href="https://blog.naver.com/luxspo"
            Target="_blank"
            style={{ padding: '0px 9px' }}
          >
            <div className="blog-logo" />
          </CLink>
        </CRow>
        <CRow className="row-padding-none-w">
          <CLink href="https://www.facebook.com/malta.luxspo/" Target="_blank">
            <CIcon className="icon-sns" icon={cibFacebook} width="19px" />
          </CLink>
        </CRow>
        <CRow className="row-padding-none-w">
          <CLink href="https://www.youtube.com/channel/UCFfyX9Q7Gt1ZwHdNY8ZAY5w" Target="_blank">
            <CIcon className="icon-sns" icon={cibYoutube} width="19px" />
          </CLink>
        </CRow>
        <CRow className="row-padding-none-w">
          <CLink href="https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829" Target="_blank">
            <CIcon className="icon-sns" icon={cibAppStoreIos} width="20px" />
          </CLink>
        </CRow>
        <CRow className="row-padding-none-w">
          <CLink
            href="https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US"
            Target="_blank"
          >
            <CIcon className="icon-sns" icon={cibGooglePlay} width="18px" />
          </CLink>
        </CRow>
      </CCol>
    )
  }
}

export default SnsIcon
