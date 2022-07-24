import React, { Component } from 'react'
import { CRow, CCol, CButton, CContainer, CLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibFacebook, cibAppStoreIos, cibGooglePlay, cibYoutube } from '@coreui/icons'

class ServiceFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  termsBtnClicked = () => {
    document.location.href = '#/maltaserviceterms'
  }

  render() {
    return (
      <>
        <CContainer style={{ padding: '90px 10px' }}>
          <CRow>
            <CCol xs="3">
              <h6 className="footer-font">
                (주)럭스포 LUXSPO
                <br />
                사업자등록번호 : 392-87-01758
                <br />
                대표자 : 김아라
              </h6>
            </CCol>
            <CCol xs="3">
              <h6 className="footer-font">
                대표전화 : 02-567-0543
                <br />
                이메일 : help@luxspo.com
                <br />
                FAX : 070-4659-0969
              </h6>
            </CCol>
            <CCol xs="3">
              <h6 className="footer-font">
                Copyright © LUXSPO Corp.
                <br />
                All Rights Reserved.
              </h6>
            </CCol>
            <CCol xs="3" style={{ textAlign: 'right' }}>
              <CButton onClick={() => this.termsBtnClicked()} className="footer-button">
                파트너스 문의
              </CButton>
              <CRow>
                <CCol>
                  <CLink href="https://www.instagram.com/malta_luxspo/" Target="_blank">
                    <CIcon className="footer-icon" icon={cibInstagram} width="24px" />
                  </CLink>
                </CCol>
                <CCol style={{ paddingTop: '26px' }}>
                  <CLink href="https://blog.naver.com/luxspo">
                    <div className="blog-logo-footer" width="20px" />
                  </CLink>
                </CCol>
                <CCol>
                  <CLink href="https://www.facebook.com/malta.luxspo/" Target="_blank">
                    <CIcon className="footer-icon" icon={cibFacebook} width="24px" />
                  </CLink>
                </CCol>
                <CCol>
                  <CLink
                    href="https://www.youtube.com/channel/UCFfyX9Q7Gt1ZwHdNY8ZAY5w"
                    Target="_blank"
                  >
                    <CIcon className="footer-icon" icon={cibYoutube} width="26px" />
                  </CLink>
                </CCol>
                <CCol>
                  <CLink
                    href="https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829"
                    Target="_blank"
                  >
                    <CIcon className="footer-icon" icon={cibAppStoreIos} width="26px" />
                  </CLink>
                </CCol>
                <CCol>
                  <CLink
                    href="https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US"
                    Target="_blank"
                  >
                    <CIcon className="footer-icon" icon={cibGooglePlay} width="24px" />
                  </CLink>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
      </>
    )
  }
}

export default ServiceFooter
