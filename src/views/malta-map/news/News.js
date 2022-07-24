import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CPagination,
  CPaginationItem,
  CImage,
  CContainer,
  CInputGroup,
  CFormInput,
} from '@coreui/react'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'
import AppHeaderBanner from '../../../components/AppHeaderBanner'

const infoimg = [
  {
    id: 1,
    sub_title: '함께 기부해요,',
    title: '산불 피해 지원성금',
    date: '2022-12-12',
    img: 'img/news1-1.jpg',
  },
  {
    id: 2,
    sub_title: '승마박람회,',
    title: '유치를 기원합니다',
    date: '2022-12-12',
    img: 'img/news1-2.jpg',
  },
  {
    id: 3,
    sub_title: '서비스 무료이용,',
    title: '베이직 요금제 출시',
    date: '2022-12-12',
    img: 'img/news1-3.jpg',
  },
  {
    id: 4,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-1.jpg',
  },
  {
    id: 5,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-2.jpg',
  },
  {
    id: 6,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-3.jpg',
  },
  {
    id: 7,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-4.jpg',
  },
  {
    id: 8,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-1.jpg',
  },
  {
    id: 9,
    sub_title: '한국마사회와',
    title: '업무협약 체결',
    date: '2022-12-12',
    img: 'img/news1-2.jpg',
  },
]

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      infoimg: infoimg,
    }
  }

  newsviewBtnClicked = () => {
    document.location.href = '#/newsview'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        {/* <AppHeaderBanner /> */}
        {/* <CCol style={{ backgroundImage: 'url(/img/news-view1.jpg)', height: '190px' }}> */}
        <CContainer className="container-info1">
          <CCol className="text-center">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '48px',
                paddingTop: '90px',
              }}
            >
              승마소식
            </h2>
          </CCol>
          <CCol className="text-center" style={{ paddingTop: '6px' }}>
            <p style={{ fontSize: '18px' }}>
              승마를 처음 시작할 때 필요한 정보부터
              <br />
              상급자를 위한 승마 상식까지!
            </p>
          </CCol>
          {/* </CCol> */}
        </CContainer>
        <CContainer>
          <CCol className="text-center" xs="12" style={{ paddingTop: '60px' }}>
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
              말타뉴스
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 2 })}
            >
              승마소식
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 3 })}
            >
              승마대회
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 4 })}
            >
              기타
            </CButton>
          </CCol>

          <CCol style={{ marginTop: '40px', marginBottom: '80px' }}>
            <CInputGroup row style={{ marginBottom: '16px' }} align="right">
              <CCol xs="3" className="float-right text-right">
                <CFormInput className="search-input" placeholder="검색어를 입력해주세요" />
              </CCol>
              <CButton color="light" type="submit" className="search-input-btn">
                <img src="img/search.png" width="30px" />
              </CButton>
            </CInputGroup>
            <CRow style={{ margin: 0 }}>
              {this.state.infoimg.map((item, index) => (
                <CCol
                  onClick={() => this.newsviewBtnClicked()}
                  className="clearfix"
                  display="inline-block"
                  key={item.name}
                  xs="4"
                >
                  <CCol className="news-card">
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src={item.img}
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol className="news-title-st">
                      {/* <p style={{ color: '#a3a3a3', margin: 0 }}>{item.date}</p> */}
                      <CCol className="news-title">
                        <h5>
                          {item.sub_title}
                          <br />
                          {item.title}
                        </h5>
                      </CCol>
                    </CCol>
                  </CCol>
                </CCol>
              ))}
            </CRow>
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
        <CContainer style={{ paddingTop: '30px', paddingBottom: '90px' }}>
          <CRow>
            <img
              className="container-info2"
              style={{ cursor: 'pointer' }}
              src="img/malta-banner.png"
            />
          </CRow>
        </CContainer>
        <ServiceFooter />
      </>
    )
  }
}

export default News
