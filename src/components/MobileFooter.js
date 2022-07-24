import React, { Component } from 'react'
import { CRow, CCol, CButton, CLink } from '@coreui/react'

class MobileFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  termsBtnClicked = () => {
    document.location.href = '#/maltaserviceterms'
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <CCol style={{ marginTop: '20px', textAlign: 'center' }}>
          <CButton onClick={() => this.termsBtnClicked()} className="footer-button-mobile">
            파트너스 문의
          </CButton>
        </CCol>
        <CCol style={{ padding: '30px 10px 20px 10px', textAlign: 'center' }}>
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

export default MobileFooter
