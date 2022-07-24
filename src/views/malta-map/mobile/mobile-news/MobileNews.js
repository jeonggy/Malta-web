import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CButton,
  CPagination,
  CPaginationItem,
  CImage,
  CInputGroup,
  CFormInput,
} from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'

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
]

class MobileNews extends Component {
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
        <MobileHeader />
        <CCol className="text-center">
          <h2
            style={{
              fontWeight: 700,
              color: '#141414',
              fontSize: '26px',
              paddingTop: '30px',
            }}
          >
            승마소식
          </h2>
        </CCol>
        <CCol className="text-center" style={{ paddingTop: '4px' }}>
          <p style={{ fontSize: '15px', margin: 0 }}>
            승마를 처음 시작할 때 필요한 정보부터
            <br />
            상급자를 위한 승마 상식까지!
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
            말타뉴스
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 2 })}
          >
            승마소식
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 3 })}
          >
            승마대회
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 4 })}
          >
            기타
          </CButton>
        </CCol>

        <CCol style={{ marginTop: '4px', marginBottom: '50px', padding: '4px' }}>
          <CCol className="float-right text-right">
            <CInputGroup row style={{ padding: '12px 20px 20px 20px' }} align="center">
              <CCol>
                <CFormInput className="search-input-m" placeholder="검색어를 입력해주세요" />
              </CCol>
              <CButton color="light" type="submit" className="search-input-btn-m">
                <img src="img/search.png" width="24px" />
              </CButton>
            </CInputGroup>
          </CCol>
          <CRow className="news-row">
            {this.state.infoimg.map((item, index) => (
              <CCol
                onClick={() => this.newsviewBtnClicked()}
                className="clearfix news-padding"
                display="inline-block"
                key={item.name}
                xs="6"
              >
                <CCol className="news-card-mobile">
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
                  <CCol className="news-title-st-mobile">
                    {/* <p style={{ color: '#a3a3a3', margin: 0, fontSize: '12px' }}>{item.date}</p> */}
                    <CCol className="news-title-mobile">
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

        <CRow className="row-st-none">
          <img
            style={{ cursor: 'pointer', width: '400px' }}
            src="img/mobile/malta-main-banner.png"
          />
        </CRow>

        <MobileFooter />
      </>
    )
  }
}

export default MobileNews
