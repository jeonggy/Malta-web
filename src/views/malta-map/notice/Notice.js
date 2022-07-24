import React, { Component } from 'react'

import {
  CCol,
  CContainer,
  CInputGroup,
  CFormInput,
  CButton,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
  CBadge,
  CImage,
} from '@coreui/react'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'
import AppHeaderBanner from 'src/components/AppHeaderBanner'

const noticelist = [
  //type 0:이벤트 1:업데이트 2:기타
  { id: 1, type: 0, completed: '종료', title: '2022년도 자격증반 모집', date: '2022-12-12' },
  { id: 2, type: 1, title: '설날 정상운영 안내', date: '2022-12-12' },
  { id: 3, type: 2, title: '2022년도 정기반 모집', date: '2022-12-12' },
  { id: 4, type: 1, title: '2022년도 기승반 모집', date: '2022-12-12' },
  { id: 5, type: 0, completed: '진행중', title: '정기 점검일', date: '2022-12-12' },
  { id: 6, type: 2, title: '3월 수업 안내', date: '2022-12-12' },
  { id: 7, type: 0, completed: '종료', title: '4월 수업 안내', date: '2022-12-12' },
  { id: 8, type: 1, title: '5월 수업 안내', date: '2022-12-12' },
  { id: 9, type: 2, completed: '진행중', title: '6월 수업 안내', date: '2022-12-12' },
  { id: 10, type: 1, title: '7월 수업 안내', date: '2022-12-12' },
]

function badgeColor(completed) {
  if (completed == '종료') {
    return 'light'
  }
  if (completed == '진행중') {
    return 'info'
  }
}

/*
우선 전체보기인경우 this.state.statusType==0일때는 바로 noticeList를 리턴해준다.

빈 배열을 만들 후 (var newList = [])
기본 리스트(noticeList)를 반복문을 돌려서 하나하나 확인을 해서 
this.state.statusType의 값에 맞는 하나의 객체 (noticeList의 각 객체)의 type값에 따라 
새로 만든 배열(newList)에 값을 넣어주고
반복문을 다 돌린 후에 새로 만든 배열을 리턴해줘야한다.
*/

class Notice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      noticelist: noticelist,
      type: noticelist.type,
      statusType: 0,
    }
  }
  noticelistBtnClicked = () => {
    document.location.href = '#/noticeview'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  tableVisibleData = () => {
    let list = JSON.parse(JSON.stringify(noticelist)) // 새로운 배열을 만들어줌 (기존 배열이 수정되지 않게 하기 위해서)

    const statustype = this.state.statusType

    if (statustype == 0) {
      //전체 리스트 보여줌
      //
      return list
    }

    var newList = [] //새 리스트를 만들어서 담는다
    const type = this.state.type

    for (let index = 0; index < list.length; index++) {
      //반복문
      const element = list[index]
      if (statustype == 1 && element.type == 0) {
        newList.push(element)
      } else if (statustype == 2 && element.type == 1) {
        newList.push(element)
      } else if (statustype == 3 && element.type == 2) {
        newList.push(element)
      }
    }
    // alert(JSON.stringify(newList));
    return newList
  }

  render() {
    return (
      <>
        {/* <AppHeaderBanner /> */}
        <CContainer className="container-nt">
          <CCol className="text-center">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '48px',
                paddingTop: '90px',
              }}
            >
              공지사항
            </h2>
          </CCol>
          <CCol className="text-center" style={{ paddingTop: '6px' }}>
            <p style={{ fontSize: '18px' }}>
              말타의 업데이트 소식과
              <br />
              이벤트 정보까지 확인해보세요!
            </p>
          </CCol>

          <CCol style={{ paddingTop: '60px' }}>
            <CRow>
              <CCol xs="6">
                <CImage
                  style={{ borderRadius: '8px', cursor: 'pointer' }}
                  className="d-block w-100"
                  src="/img/notice-banner1.jpg"
                  alt="banner1"
                />
              </CCol>
              <CCol xs="6">
                <CImage
                  style={{ borderRadius: '8px', cursor: 'pointer' }}
                  className="d-block w-100"
                  src="/img/notice-banner2.jpg"
                  alt="banner2"
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol className="text-center" xs="12" style={{ paddingTop: '90px' }}>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 0 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 0 })}
            >
              전체
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 1 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 1 })}
            >
              이벤트
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 2 })}
            >
              업데이트
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 3 })}
            >
              기타
            </CButton>
          </CCol>

          <CCol style={{ marginTop: '40px', marginBottom: '80px' }}>
            <CCol className="float-right text-right">
              <CInputGroup row style={{ marginBottom: '16px' }} align="right">
                <CCol xs="3" className="float-right text-right">
                  <CFormInput className="search-input" placeholder="검색어를 입력해주세요" />
                </CCol>
                <CButton color="light" type="submit" className="search-input-btn">
                  <img src="img/search.png" width="30px" />
                </CButton>
              </CInputGroup>
            </CCol>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }}>
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell colSpan="2" scope="col" className="table-font">
                    No.
                  </CTableHeaderCell>
                  {/* {this.state.statusType == 1 && (
                    <CTableHeaderCell colSpan="1" scope="col">
                      상태
                    </CTableHeaderCell>
                  )} */}
                  <CTableHeaderCell colSpan="8" scope="col" className="table-font">
                    제목
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan="2" scope="col" className="table-font">
                    작성일
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.tableVisibleData().map((item, index) => (
                  <CTableRow align="middle" key={item.name} hover style={{ cursor: 'pointer' }}>
                    <CTableHeaderCell
                      className="table-font"
                      colSpan="2"
                      scope="row"
                      style={{ color: '#888', textAlign: 'center', paddingRight: '20px' }}
                    >
                      {index + 1}
                    </CTableHeaderCell>
                    <CTableDataCell
                      align="middle"
                      colSpan="8"
                      className="table-font"
                      onClick={() => this.noticelistBtnClicked()}
                    >
                      {this.state.statusType == 1 && (
                        <CBadge
                          style={{ paddingRight: '8px', marginRight: '10px' }}
                          color={badgeColor(item.completed)}
                        >
                          {item.completed}
                        </CBadge>
                        //   <CBadge color={item.completed == 1 ? 'secondary' : 'danger'}>
                        //   {item.completed}
                        // </CBadge>
                      )}
                      {item.title}
                    </CTableDataCell>
                    <CTableDataCell
                      className="table-font"
                      align="middle"
                      colSpan="2"
                      style={{ textAlign: 'center', color: '#888' }}
                    >
                      {item.date}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <CPagination
              aria-label="Page navigation example"
              align="center"
              style={{ marginTop: '40px', cursor: 'pointer' }}
              size="lg"
            >
              <CPaginationItem aria-label="Previous" disabled>
                <span aria-hidden="true">
                  <span aria-hidden="true">
                    <img
                      style={{ cursor: 'pointer' }}
                      src="img/pagination-icon-left.png"
                      width="30px"
                    />
                  </span>
                </span>
              </CPaginationItem>
              <CPaginationItem className="page-item-w" active>
                1
              </CPaginationItem>
              <CPaginationItem>2</CPaginationItem>
              <CPaginationItem>3</CPaginationItem>
              <CPaginationItem aria-label="Next">
                <span aria-hidden="true">
                  <img
                    style={{ cursor: 'pointer' }}
                    src="img/pagination-icon-right.png"
                    width="30px"
                  />
                </span>
              </CPaginationItem>
            </CPagination>
          </CCol>
        </CContainer>
        <ServiceFooter />
      </>
    )
  }
}

export default Notice
