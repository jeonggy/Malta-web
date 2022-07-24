import React, { Component } from 'react'

import { CRow, CCol, CButton } from '@coreui/react'

function clubBtnClicked() {
  document.location.href = '#/horseclubpage'
}

class ProgramFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  render() {
    return (
      <>
        <CCol style={{ padding: '0px 0px 20px 0px', margin: 0 }}>
          <CRow className="row-st-none">
            <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
              <img src="img/small-menu-icon-1.png" alt=" " width="24px" />
            </CCol>
            <CCol xs="9" style={{ margin: 0, padding: 0 }}>
              <h6 style={{ fontWeight: 600, color: '#141414', margin: 0, paddingTop: '5px' }}>
                체험 프로그램
              </h6>
            </CCol>
          </CRow>
          <CCol className="text-left" style={{ paddingTop: '10px' }}>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 0 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 0 })}
            >
              전체
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 1 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 1 })}
            >
              먹이주기
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 2 })}
            >
              승마장비
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 3 })}
            >
              승마명언
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 4 })}
            >
              승마짤
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 5 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 5 })}
            >
              기타
            </CButton>
          </CCol>
        </CCol>

        <CCol style={{ padding: '20px 0px 20px 0px', margin: 0 }}>
          <CRow className="row-st-none">
            <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '4px' }}>
              <img src="img/small-menu-icon-2.png" alt=" " width="24px" />
            </CCol>
            <CCol xs="9" style={{ margin: 0, padding: 0 }}>
              <h6 style={{ fontWeight: 600, color: '#141414', margin: 0, paddingTop: '5px' }}>
                1일 기승
              </h6>
            </CCol>
          </CRow>
          <CCol className="text-left" style={{ paddingTop: '10px' }}>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 0 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 0 })}
            >
              전체
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 1 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 1 })}
            >
              먹이주기
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 2 })}
            >
              승마장비
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 3 })}
            >
              승마명언
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 4 })}
            >
              승마짤
            </CButton>
            <CButton
              style={{
                borderRadius: '30px',
                padding: '4px 14px',
                margin: '6px 4px',
                fontSize: '14px',
              }}
              className={this.state.statusType == 5 ? 'btn-outline-info' : 'btn-info'}
              onClick={() => this.setState({ statusType: 5 })}
            >
              기타
            </CButton>
          </CCol>
        </CCol>
      </>
    )
  }
}

export default ProgramFilter
