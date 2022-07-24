import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
import MobileFooter from '../../../components/MobileFooter'
import MobileHeader from '../../../components/MobileHeader'

class MobileHelp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  closeBtnClicked = () => {
    window.location.href = '#/maltaserviceterms'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <MobileHeader />
        <CCol
          style={{
            backgroundImage: 'url(/img/main/mobile/terms-img.jpg)',
            width: '100%',
          }}
        >
          {' '}
          <h2
            style={{
              fontWeight: 600,
              color: '#fff',
              display: 'inline-block',
              fontSize: '32px',
              padding: '50px 20px',
              margin: 0,
            }}
          >
            문의하기
          </h2>
        </CCol>
        <CCol style={{ padding: '40px 16px 40px 16px' }}>
          <CForm>
            <div className="mb-3">
              <CFormLabel style={{ fontSize: '16px' }} htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 승마클럽 명
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="mb-3">
              <CFormLabel style={{ fontSize: '16px' }} htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 담당자 성함
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="mb-3">
              <CFormLabel style={{ fontSize: '16px' }} htmlFor="exampleFormControlInput1">
                <span className="circle-input">●</span> 담당자 연락처
              </CFormLabel>
              <CFormInput type="name" id="exampleFormControlInput1" className="help-input-css" />
            </div>
            <div className="mb-3">
              <CFormLabel style={{ fontSize: '16px' }} htmlFor="exampleFormControlTextarea1">
                <span className="circle-input">●</span> 문의내용
              </CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="8"
                style={{ borderRadius: '24px' }}
              ></CFormTextarea>
              <p style={{ paddingTop: '14px', color: '#969696', fontSize: '14px' }}>
                원활한 상담을 위해 문의할 내용을 자세히 작성해주세요.
                <br />
                작성 내용을 바탕으로 친절히 답변드리겠습니다.
              </p>
            </div>
          </CForm>
          <CCol className="text-center" style={{ paddingTop: '10px' }}>
            <CRow className="row-st-none">
              <CCol>
                <CButton className="help-btn1-m">문의 등록</CButton>
                <CButton className="help-btn2-m" onClick={() => this.closeBtnClicked()}>
                  취소
                </CButton>
              </CCol>
            </CRow>
          </CCol>
        </CCol>
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
              fontWeight: '500',
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
                fontWeight: '600',
              }}
              onClick={this.toggle}
            >
              닫기
            </CButton>
          </CModalFooter>
        </CModal>
        <MobileFooter />
      </>
    )
  }
}

export default MobileHelp
