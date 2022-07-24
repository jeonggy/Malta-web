import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CInputGroup,
  CFormInput,
  CButton,
  CPagination,
  CPaginationItem,
  CImage,
  CContainer,
  CCarousel,
  CCarouselItem,
} from '@coreui/react'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'
import AppHeaderBanner from '../../../components/AppHeaderBanner'

const infoimg = [
  { id: 1, title: '갤러리제목1', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 2, title: '갤러리제목2', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 3, title: '갤러리제목3', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 4, title: '갤러리제목4', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 5, title: '갤러리제목5', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 6, title: '갤러리제목6', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 7, title: '갤러리제목7', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 8, title: '갤러리제목8', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 9, title: '갤러리제목9', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 10, title: '갤러리제목10', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 11, title: '갤러리제목11', date: '2022-12-12', img: 'img/info-insta.jpg' },
  { id: 12, title: '갤러리제목12', date: '2022-12-12', img: 'img/info-insta.jpg' },
]

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      infoimg: infoimg,
    }
  }
  info1BtnClicked = () => {
    document.location.href = '#/infoview1'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  info2BtnClicked = () => {
    document.location.href = '#/infoview2'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  info3BtnClicked = () => {
    document.location.href = '#/infoview3'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  info4BtnClicked = () => {
    document.location.href = '#/infoview4'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  info5BtnClicked = () => {
    document.location.href = '#/infoview5'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  info6BtnClicked = () => {
    document.location.href = '#/infoview6'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  cardNewsBtnClicked = () => {
    document.location.href = '#/cardnews'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        {/* <AppHeaderBanner /> */}
        <CCarousel controls style={{ minWidth: '1280px' }}>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/img/info-main-banner1.jpg" alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/img/info-main-banner2.jpg" alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src="/img/info-main-banner3.jpg" alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
        <CContainer>
          <CCol className="text-center">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '48px',
                paddingTop: '90px',
              }}
            >
              승마정보
            </h2>
          </CCol>
          <CCol className="text-center" style={{ paddingTop: '6px' }}>
            <p style={{ fontSize: '18px' }}>
              승마를 처음 시작할 때 필요한 정보부터
              <br />
              상급자를 위한 승마 상식까지!
            </p>
          </CCol>
        </CContainer>
        <CContainer style={{ paddingTop: '60px' }}>
          <CCol
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CRow>
              <CCol
                onClick={() => this.info1BtnClicked()}
                className="info-card-css"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-1.png)',
                }}
              >
                <h2 style={{ textAlign: 'left', color: '#2b1f1a' }}>
                  승마체험
                  <br />
                  이렇게 준비해요
                </h2>
                <p style={{ fontWeight: 300, textAlign: 'left', color: '#574943' }}>
                  승마가 처음이라면!
                </p>
              </CCol>

              <CCol
                onClick={() => this.info2BtnClicked()}
                className="info-card-css"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-2.png)',
                }}
              >
                <h2 style={{ color: '#111c24', textAlign: 'left' }}>승마장 선택하기</h2>
                <p style={{ color: '#39454e', fontWeight: 300, textAlign: 'left' }}>
                  어떤 승마장이 좋을까?
                </p>
              </CCol>
              <CCol
                onClick={() => this.info3BtnClicked()}
                className="info-card-css"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-3.png)',
                }}
              >
                <h2 style={{ color: '#221a12', textAlign: 'left' }}>
                  말에게
                  <br />
                  다가가는 방법
                </h2>
                <p style={{ color: '#4b4540', fontWeight: 300, textAlign: 'left' }}>
                  말과 한 걸음 가까워지는 시간
                </p>
              </CCol>
              <CCol
                onClick={() => this.info4BtnClicked()}
                className="info-card-css"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-4.png)',
                }}
              >
                <h2 style={{ color: '#1a1014', textAlign: 'left' }}>말타 사용방법</h2>
                <p style={{ color: '#4b4446', fontWeight: 300, textAlign: 'left' }}>
                  말타! 이렇게 이용해보세요
                </p>
              </CCol>
            </CRow>
          </CCol>
          <CCol style={{ paddingTop: '24px' }}>
            <CRow>
              <CCol
                onClick={() => this.info5BtnClicked()}
                className="info-card-css2"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-5.png)',
                }}
              >
                <h2 style={{ color: '#10160e', textAlign: 'left' }}>초보 승마 용품</h2>
                <p style={{ color: '#3a3f38', fontWeight: 300, textAlign: 'left' }}>
                  승마를 배우기 시작하셨나요?
                </p>
              </CCol>
              <CCol
                onClick={() => this.info6BtnClicked()}
                className="info-card-css2"
                xs="3"
                style={{
                  backgroundImage: 'url(img/info-6.png)',
                }}
              >
                <h2 style={{ color: '#14120f', textAlign: 'left' }}>국내 추천 외승지</h2>
                <p style={{ color: '#33312e', fontWeight: 300, textAlign: 'left' }}>
                  멋진 풍경과 함께 달려보세요!
                </p>
              </CCol>
            </CRow>
          </CCol>
        </CContainer>
        <CContainer>
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
              승마상식
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 2 })}
            >
              승마장비
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 3 })}
            >
              승마명언
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 4 })}
            >
              승마짤
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 5 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 5 })}
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
            <CRow>
              {this.state.infoimg.map((item, index) => (
                <CCol
                  className="clearfix"
                  display="inline-block"
                  key={item.name}
                  xs="3"
                  style={{ padding: '10px 10px 24px 10px', overflow: 'hidden' }}
                  onClick={() => this.cardNewsBtnClicked()}
                >
                  <CCol className="info-board-fixed-image-box">
                    <CImage
                      className="d-block w-100 cover info-board-fixed-image"
                      src={item.img}
                      alt="slide 1"
                      minHeight={200}
                      Width="auto"
                      overflow="hidden"
                      display="flex"
                    />
                  </CCol>
                  <CCol style={{ textAlign: 'left', paddingTop: '16px' }}>
                    <h5 style={{ color: '#141414', margin: 0, fontWeight: 400 }}>{item.title}</h5>
                    <p style={{ color: '#a3a3a3', paddingTop: '4px' }}>{item.date}</p>
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

export default Info
