import React, { Component } from 'react'

import { CRow, CCol, CButton, CModal, CModalBody, CModalFooter, CContainer } from '@coreui/react'
import ServiceFooter from './servicefooter/ServiceFooter'

class MaltaServiceTerms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      modalOpen: false,
    }
  }

  agreeBtnClicked = () => {
    window.location.href = '#/maltaservicehelp'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
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
          <CContainer className="container-info1">
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
        <CContainer className="container-info1" style={{ paddingBottom: '140px' }}>
          <CCol style={{ textAlign: 'center' }}>
            <h2
              style={{
                paddingTop: '90px',
                paddingBottom: '50px',
                lineHeight: '46px',
                color: '#141414',
              }}
            >
              <span style={{ fontWeight: '500', fontSize: '36px', color: '#2E93F9' }}>
                고객님의 소중한 의견에 신뢰할 수 있는
                <br />
                최선의 답변
              </span>
              <span style={{ fontWeight: '200', fontSize: '36px' }}>
                을 드릴 수 있도록 노력하겠습니다.
              </span>
            </h2>
          </CCol>
          <CCol style={{ textAlign: 'left', padding: '0px 20px 0px 20px', margin: 0 }}>
            <h2 style={{ margin: '40px 0px 50px 0px', fontSize: '30px', color: '#141414' }}>
              <span style={{ fontWeight: '200' }}>말타</span>
              <span style={{ fontWeight: '500' }}> 이용약관</span>
            </h2>

            <CCol style={{ marginBottom: '50px', padding: 0 }}>
              <h4 className="terms-h4">수집하는 개인정보 항목 및 수집방법</h4>
              <p className="terms-p">
                말타 홈페이지는 서비스 이용을 위해 필요한 최소한의 개인정보만을 “문의하기”
                게시판에서 이용자가 입력한 정보에 한해 수집합니다. 귀하가 말타 홈페이지의 서비스를
                이용하기 위해서는 연락처를 입력하셔야 하며, 입력하신 정보는 서비스 제공에
                사용됩니다.
                <br />
                [수집항목] : 승마클럽 명(필수), 담당자 성함(필수), 담당자 연락처(필수)
              </p>
            </CCol>
            <CCol style={{ marginBottom: '50px', padding: 0 }}>
              <h4 className="terms-h4">[필수] 개인정보의 보유 및 이용기간</h4>
              <p className="terms-p">
                말타 홈페이지는 개인정보의 수집목적 또는 제공받은 목적이 달성된 때에는 귀하의
                개인정보를 즉시 파기합니다.
                <br />
                [보유기간] : 문의내용 처리 후 즉시 파기
              </p>
            </CCol>
            <CCol style={{ marginBottom: '50px', padding: 0 }}>
              <h4 className="terms-h4">[필수] 개인정보의 수집 및 이용목적</h4>
              <p className="terms-p">
                말타 홈페이지는 귀하의 개인정보 수집에 대한 동의를 받고 있습니다. 귀하의 개인정보
                수집과 관련하여 말타 홈페이지의 개인정보처리방침 또는 이용약관의 내용에 대해 『동의
                및 문의등록』 버튼 또는 『동의 안 함』 버튼을 클릭할 수 있는 절차를 마련하고 있으며,
                귀하가 『동의 및 문의등록』 버튼을 클릭하면 개인 정보 수집에 대해 동의한 것으로
                봅니다. <br />
                [이용목적] : 문의내용 답변 목적
              </p>
            </CCol>
          </CCol>
          <CCol style={{ textAlign: 'center' }}>
            <h4
              style={{
                fontWeight: '400',
                fontSize: '22px',
                padding: '60px 0px 0px 0px',
                color: '#141414',
              }}
            >
              위 약관에 동의하십니까?
            </h4>
          </CCol>
          <CRow>
            <CCol className="text-center">
              <CButton className="terms-btn1" onClick={() => this.agreeBtnClicked()}>
                동의 및 문의 등록
              </CButton>
              <CButton className="terms-btn2" onClick={() => this.openModal()}>
                동의 안 함
              </CButton>
            </CCol>
          </CRow>
        </CContainer>
        <CModal
          visible={this.state.modalOpen}
          onClose={() => this.setState({ modalOpen: false })}
          alignment="center"
          centered
        >
          <CModalBody
            style={{
              padding: '20px 20px 10px 20px',
              fontSize: '20px',
              fontWeight: '400',
            }}
          >
            문의 등록을 하시려면 동의 및 문의등록을 눌러주세요.
          </CModalBody>
          <CModalFooter>
            <CButton
              className="modal-footer-btn"
              onClick={() => this.setState({ modalOpen: false })}
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

export default MaltaServiceTerms
