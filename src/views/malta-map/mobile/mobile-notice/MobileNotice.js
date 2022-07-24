import React, { Component } from 'react'

import {
  CCol,
  CInputGroup,
  CFormInput,
  CButton,
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
  CCarousel,
  CCarouselItem,
} from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'

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

class MobileNotice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      noticelist: noticelist,
      type: noticelist.type,
      statusType: 0,
    }
  }
  noticeviewBtnClicked = () => {
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
        <MobileHeader />
        <CCarousel controls>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="/img/mobile/notice-banner-mobile1.jpg"
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="/img/mobile/notice-banner-mobile2.jpg"
              alt="slide 2"
            />
          </CCarouselItem>
        </CCarousel>
        <CCol className="text-center">
          <h2
            style={{
              fontWeight: 700,
              color: '#141414',
              fontSize: '26px',
              paddingTop: '40px',
            }}
          >
            공지사항
          </h2>
        </CCol>
        <CCol className="text-center" style={{ paddingTop: '4px' }}>
          <p style={{ fontSize: '15px', margin: 0 }}>
            말타의 업데이트 소식과
            <br />
            이벤트 정보까지 확인해보세요!
          </p>
        </CCol>

        <CCol className="text-center m-category-btn">
          <CButton
            className={`c-btn ${this.state.statusType == 0 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 0 })}
          >
            전체
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 1 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 1 })}
          >
            이벤트
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 2 })}
          >
            업데이트
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 3 })}
          >
            기타
          </CButton>
        </CCol>

        <CCol style={{ marginTop: '4px', marginBottom: '50px', padding: '4px' }}>
          <CCol className="float-right text-right">
            <CInputGroup row style={{ padding: '12px 20px 20px 20px' }} align="center">
              <CCol className="float-right text-right">
                <CFormInput className="search-input-m" placeholder="검색어를 입력해주세요" />
              </CCol>
              <CButton color="light" type="submit" className="search-input-btn-m">
                <img src="img/search.png" width="24px" />
              </CButton>
            </CInputGroup>
          </CCol>
          <CCol style={{ padding: '0px 16px' }}>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }}>
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell
                    colSpan="1"
                    scope="col"
                    style={{ fontSize: '15px', padding: '18px 0px', fontWeight: 600 }}
                  >
                    No.
                  </CTableHeaderCell>
                  {/* {this.state.statusType == 1 && (
                    <CTableHeaderCell colSpan="1" scope="col">
                      상태
                    </CTableHeaderCell>
                  )} */}
                  <CTableHeaderCell
                    colSpan="9"
                    scope="col"
                    style={{ fontSize: '15px', padding: '18px 0px', fontWeight: 600 }}
                  >
                    제목
                  </CTableHeaderCell>
                  <CTableHeaderCell
                    colSpan="2"
                    scope="col"
                    style={{ fontSize: '15px', padding: '18px 0px', fontWeight: 600 }}
                  >
                    작성일
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.tableVisibleData().map((item, index) => (
                  <CTableRow align="middle" key={item.name} hover style={{ cursor: 'pointer' }}>
                    <CTableHeaderCell
                      style={{
                        paddingRight: '20px',
                      }}
                      className="table-font-mobile-n"
                      colSpan="2"
                      scope="row"
                    >
                      {index + 1}
                    </CTableHeaderCell>
                    <CTableDataCell
                      align="middle"
                      colSpan="8"
                      className="table-font-mobile"
                      onClick={() => this.noticeviewBtnClicked()}
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
                    <CTableDataCell className="table-font-mobile-n" align="middle" colSpan="2">
                      {item.date}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
          <CPagination
            aria-label="Page navigation example"
            align="center"
            style={{ marginTop: '30px', cursor: 'pointer' }}
            size="sm"
          >
            <CPaginationItem aria-label="Previous" disabled>
              <span aria-hidden="true">
                <img
                  style={{ cursor: 'pointer' }}
                  src="img/pagination-icon-left.png"
                  width="20px"
                />
              </span>
            </CPaginationItem>
            <CPaginationItem className="page-item-m" style={{ margin: '6px 16px' }} active>
              1
            </CPaginationItem>
            <CPaginationItem style={{ padding: '6px 16px' }}>2</CPaginationItem>
            <CPaginationItem style={{ padding: '6px 16px' }}>3</CPaginationItem>
            <CPaginationItem aria-label="Next">
              <span aria-hidden="true">
                <img
                  style={{ cursor: 'pointer' }}
                  src="img/pagination-icon-right.png"
                  width="20px"
                />
              </span>
            </CPaginationItem>
          </CPagination>
        </CCol>

        <MobileFooter />
      </>
    )
  }
}

export default MobileNotice
