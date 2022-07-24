import React, { Component } from 'react'
import { CButton, CCol, CContainer } from '@coreui/react'

class AppHeaderBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isOpen: true,
    }
  }
  popupDeleted = () => {
    this.setState({ isOpen: false })
  }
  mapPageBtnClicked = () => {
    document.location.href = '#/home'
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        {this.state.isOpen && (
          <CCol className="main-pop-up" style={{ minWidth: '1280px' }}>
            <CButton
              onClick={(e) => this.popupDeleted()}
              className="card-header-action btn-close"
              style={{ position: 'absolute', right: '10px', top: '17px' }}
            ></CButton>
            <CContainer>
              <p className="main-top-p-css" onClick={() => this.mapPageBtnClicked()}>
                <img
                  src="img/horse-img.png"
                  alt=""
                  width="26px"
                  style={{ cursor: 'pointer', paddingBottom: '6px' }}
                />
                <span style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                  [승마장 찾기] 전국 승마장 위치를 한 눈에 볼 수 있도록 말타가 지도 페이지를
                  만들었어요!
                </span>
                <img
                  src="img/horse-img.png"
                  alt=""
                  width="26px"
                  style={{ cursor: 'pointer', paddingBottom: '6px' }}
                />
              </p>
            </CContainer>
          </CCol>
        )}
      </>
    )
  }
}

export default AppHeaderBanner
