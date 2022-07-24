import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
import ServiceFooter from './servicefooter/ServiceFooter'

class MaltaServiceHelp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  closeBtnClicked = () => {
    window.location.href = '#/maltaserviceterms'
    // window.scrollTo(0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <CCol
          style={{
            backgroundImage: 'url(/img/main/terms-img.jpg)',
            height: '190px',
            width: '100%',
          }}
        >
          <CContainer>
            <h2
              style={{
                fontWeight: 500,
                color: '#fff',
                display: 'inline-block',
                fontSize: '50px',
                paddingTop: '66px',
                margin: 0,
              }}
            >
              문의하기
            </h2>
          </CContainer>
        </CCol>
        <CContainer style={{ paddingTop: '80px' }}>
          <CForm>
            <div className="help-input-g">
              <CFormLabel htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 승마클럽 명
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="help-input-g">
              <CFormLabel htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 담당자 성함
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="help-input-g">
              <CFormLabel htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 담당자 연락처
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="help-input-g">
              <CFormLabel htmlFor="exampleFormControlTextarea1">
                <span className="circle-input">●</span> 문의내용
              </CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="8"
                className="help-input-css"
              ></CFormTextarea>
              <p style={{ paddingTop: '14px', color: '#969696' }}>
                원활한 상담을 위해 문의할 내용을 자세히 작성해주세요.
                <br />
                작성 내용을 바탕으로 친절히 답변드리겠습니다.
              </p>
            </div>
          </CForm>
          <CRow>
            <CCol className="text-center" style={{ padding: '40px 0px 90px 0px' }}>
              <CButton className="terms-btn1">문의 등록</CButton>
              <CButton className="terms-btn2" onClick={() => this.closeBtnClicked()}>
                취소
              </CButton>
            </CCol>
          </CRow>
        </CContainer>
        <CModal
          isOpen={this.state.modal}
          fade={true}
          toggle={this.toggle}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <CModalBody
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px 0px 0px 24px',
              fontSize: '18px',
              fontWeight: '400',
            }}
          >
            문의 등록을 하시려면 동의 및 문의등록을 눌러주세요.
          </CModalBody>
          <CModalFooter style={{ height: '70px', borderTopColor: '#fff' }}>
            <CButton
              style={{
                backgroundColor: '#12AFDC',
                color: '#fff',
                width: '100px',
                padding: 0,
                margin: 0,
                height: '46px',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '400',
              }}
              onClick={this.toggle}
            >
              닫기
            </CButton>
          </CModalFooter>
        </CModal>
        <ServiceFooter />
      </>
    )
  }
}

export default MaltaServiceHelp
