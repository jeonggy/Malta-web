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
  CCarousel,
  CCarouselItem,
} from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'

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

class MobileInfo extends Component {
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

  render() {
    return (
      <>
        <MobileHeader />
        <CCarousel controls>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="/img/mobile/info-banner-mobile.jpg"
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="/img/mobile/info-banner-mobile2.jpg"
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="/img/mobile/info-banner-mobile3.jpg"
              alt="slide 3"
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
            승마정보
          </h2>
        </CCol>
        <CCol className="text-center" style={{ paddingTop: '4px' }}>
          <p style={{ fontSize: '15px' }}>
            승마를 처음 시작할 때 필요한 정보부터
            <br />
            상급자를 위한 승마 상식까지!
          </p>
        </CCol>

        <CCol
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
          }}
        >
          <CRow className="row-st-none">
            <CCol
              onClick={() => this.info1BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-1-m.jpg)',
                borderRadius: '14px',
                margin: '6px',
                width: '180px',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                backgroundSize: 'cover',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#2b1f1a',
                }}
              >
                승마체험
                <br />
                이렇게 준비해요
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#574943',
                }}
              >
                승마가 처음이라면!
              </p>
            </CCol>
            <CCol
              onClick={() => this.info2BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-2-m.jpg)',
                borderRadius: '14px',
                margin: '6px',
                width: '180px',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                backgroundSize: 'cover',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#111c24',
                }}
              >
                승마장 선택하기
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#39454e',
                }}
              >
                어떤 승마장이 좋을까?
              </p>
            </CCol>
          </CRow>
          <CRow className="row-st-none">
            <CCol
              onClick={() => this.info3BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-3-m.jpg)',
                borderRadius: '14px',
                margin: '6px',
                width: '180px',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                backgroundSize: 'cover',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#221a12',
                }}
              >
                말에게
                <br />
                다가가는 방법
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#4b4540',
                }}
              >
                말과 한 걸음 가까워지는 시간
              </p>
            </CCol>

            <CCol
              onClick={() => this.info4BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-4-m.jpg)',
                borderRadius: '14px',
                margin: '6px',
                width: '180px',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                backgroundSize: 'cover',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#1a1014',
                }}
              >
                말타 사용방법
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#4b4446',
                }}
              >
                말타! 이렇게 이용해보세요
              </p>
            </CCol>
          </CRow>

          <CRow className="row-st-none">
            <CCol
              onClick={() => this.info5BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-5-m.jpg)',
                borderRadius: '14px',
                width: '100%',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                backgroundSize: 'cover',
                margin: '6px',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#10160e',
                }}
              >
                초보 승마 용품
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#3a3f38',
                }}
              >
                승마를 배우기 시작하셨나요?
              </p>
            </CCol>
            <CCol
              onClick={() => this.info6BtnClicked()}
              style={{
                backgroundImage: 'url(img/mobile/info-6-m.jpg)',
                borderRadius: '14px',
                width: '100%',
                height: '160px',
                padding: '16px',
                cursor: 'pointer',
                margin: '6px',
                backgroundSize: 'cover',
              }}
            >
              <h2
                className="m-info-h2"
                style={{
                  color: '#14120f',
                }}
              >
                국내 추천 외승지
              </h2>
              <p
                className="m-info-p"
                style={{
                  color: '#33312e',
                }}
              >
                멋진 풍경과 함께 달려보세요!
              </p>
            </CCol>
          </CRow>
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
            승마상식
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 2 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 2 })}
          >
            승마장비
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 3 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 3 })}
          >
            승마명언
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 4 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 4 })}
          >
            승마짤
          </CButton>
          <CButton
            className={`c-btn ${this.state.statusType == 5 ? 'btn-outline-info-m' : 'btn-info-m'}`}
            onClick={() => this.setState({ statusType: 5 })}
          >
            기타
          </CButton>
        </CCol>

        <CCol style={{ marginTop: '4px', marginBottom: '50px', padding: '10px' }}>
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
          <CRow className="row-st-none">
            {this.state.infoimg.map((item, index) => (
              <CCol
                className="clearfix"
                display="inline-block"
                key={item.name}
                xs="4"
                style={{ padding: '2px', overflow: 'hidden' }}
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
                <CCol style={{ textAlign: 'left', paddingTop: '8px' }}>
                  <h5 style={{ color: '#141414', margin: 0, fontSize: '15px' }}>{item.title}</h5>
                  <p style={{ color: '#a3a3a3', fontSize: '12px', paddingTop: '2px' }}>
                    {item.date}
                  </p>
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

export default MobileInfo
