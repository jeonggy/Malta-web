import React, { Component } from 'react'
import {
  CRow,
  CCol,
  CButton,
  CImage,
  CContainer,
  CLink,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'
import AppHeaderBanner from '../../../components/AppHeaderBanner'

import CIcon from '@coreui/icons-react'
import ServiceSlider1 from './ServiceSlider1'
import ServiceSlider2 from './ServiceSlider2'
import ServiceFooter from './servicefooter/ServiceFooter'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { cibAppStoreIos, cibGooglePlay } from '@coreui/icons'
import Fade from 'react-reveal/Fade'

const clubListImg = [
  //type 0:경기도 1:충청도 2:전라도 3:경상도 4:제주도
  {
    id: 1,
    type: 0,
    title: 'JB스테이블',
    img: 'img/main/club_list/club-01.png',
  },
  {
    id: 2,
    type: 0,
    title: '디원호스승마클럽',
    img: 'img/main/club_list/club-02.png',
  },
  {
    id: 3,
    type: 0,
    title: '승마클럽 영풍',
    img: 'img/main/club_list/club-03.png',
  },
  {
    id: 4,
    type: 0,
    title: '말달리자 승마클럽',
    img: 'img/main/club_list/club-04.png',
  },
  {
    id: 5,
    type: 0,
    title: '김포스테이블',
    img: 'img/main/club_list/club-05.png',
  },
  {
    id: 6,
    type: 2,
    title: '웨스턴스프링스',
    img: 'img/main/club_list/club-06.png',
  },
  {
    id: 7,
    type: 0,
    title: '덕소승마클럽',
    img: 'img/main/club_list/club-07.png',
  },
  {
    id: 8,
    type: 3,
    title: '서라벌대학교대승마장',
    img: 'img/main/club_list/club-08.png',
  },
  {
    id: 9,
    type: 0,
    title: '동서울승마클럽',
    img: 'img/main/club_list/club-09.png',
  },
  {
    id: 10,
    type: 0,
    title: '화성홀스파크',
    img: 'img/main/club_list/club-10.png',
  },
  {
    id: 11,
    type: 3,
    title: '바모스승마클럽',
    img: 'img/main/club_list/club-11.png',
  },
  {
    id: 12,
    type: 0,
    title: '용인포니승마클럽',
    img: 'img/main/club_list/club-12.png',
  },
  {
    id: 13,
    type: 0,
    title: '파밀리에승마클럽',
    img: 'img/main/club_list/club-13.png',
  },
  {
    id: 14,
    type: 0,
    title: '에이원승마클럽',
    img: 'img/main/club_list/club-14.png',
  },
  {
    id: 15,
    type: 1,
    title: '충남승마클럽',
    img: 'img/main/club_list/club-15.png',
  },
  {
    id: 16,
    type: 0,
    title: 'GR인천승마장',
    img: 'img/main/club_list/club-16.png',
  },
  {
    id: 17,
    type: 2,
    title: '고창해변승마클럽',
    img: 'img/main/club_list/club-17.png',
  },
  {
    id: 18,
    type: 0,
    title: '연천승마공원',
    img: 'img/main/club_list/club-18.png',
  },
  {
    id: 19,
    type: 0,
    title: '궁평캠프',
    img: 'img/main/club_list/club-19.png',
  },
  {
    id: 20,
    type: 0,
    title: 'SSB승마센터',
    img: 'img/main/club_list/club-20.png',
  },
  {
    id: 21,
    type: 1,
    title: '중원대학교 승마교육원',
    img: 'img/main/club_list/club-21.png',
  },
  {
    id: 22,
    type: 0,
    title: '서울승마클럽',
    img: 'img/main/club_list/club-22.png',
  },
  {
    id: 23,
    type: 3,
    title: '말보르승마클럽',
    img: 'img/main/club_list/club-23.png',
  },
  {
    id: 24,
    type: 0,
    title: '킴스승마클럽',
    img: 'img/main/club_list/club-24.png',
  },
  {
    id: 25,
    type: 4,
    title: '제주운주승마클럽',
    img: 'img/main/club_list/club-25.png',
  },
  {
    id: 26,
    type: 1,
    title: '세종스테이블',
    img: 'img/main/club_list/club-26.png',
  },
  {
    id: 27,
    type: 3,
    title: '홍진팜승마클럽',
    img: 'img/main/club_list/club-27.png',
  },
  {
    id: 28,
    type: 3,
    title: '김해승마클럽',
    img: 'img/main/club_list/club-28.png',
  },
  {
    id: 29,
    type: 0,
    title: '포스런승마클럽',
    img: 'img/main/club_list/club-29.png',
  },
  {
    id: 30,
    type: 0,
    title: '인덕원승마스쿨',
    img: 'img/main/club_list/club-30.png',
  },
  {
    id: 31,
    type: 0,
    title: '월드승마학교',
    img: 'img/main/club_list/club-31.png',
  },
  {
    id: 32,
    type: 0,
    title: '이후국제승마클럽',
    img: 'img/main/club_list/club-32.png',
  },
  {
    id: 33,
    type: 0,
    title: '운악호스랜드',
    img: 'img/main/club_list/club-33.png',
  },
  {
    id: 34,
    type: 0,
    title: '레이크밸리승마클럽',
    img: 'img/main/club_list/club-34.png',
  },
  {
    id: 35,
    type: 0,
    title: '청초원승마장',
    img: 'img/main/club_list/club-35.png',
  },
  {
    id: 36,
    type: 0,
    title: '솔밭승마클럽',
    img: 'img/main/club_list/club-36.png',
  },
  {
    id: 37,
    type: 3,
    title: '여수힐링승마파크',
    img: 'img/main/club_list/club-37.png',
  },
  {
    id: 38,
    type: 0,
    title: '황대웅스포츠홀스승마클럽',
    img: 'img/main/club_list/club-38.png',
  },
  {
    id: 39,
    type: 0,
    title: '호포승마스쿨',
    img: 'img/main/club_list/club-39.png',
  },
  {
    id: 40,
    type: 3,
    title: '동백승마클럽',
    img: 'img/main/club_list/club-40.png',
  },
  {
    id: 41,
    type: 1,
    title: '보은승마장',
    img: 'img/main/club_list/club-41.png',
  },
  {
    id: 42,
    type: 3,
    title: '칸승마아카데미',
    img: 'img/main/club_list/club-42.png',
  },
]

class MaltaAppService extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      clubListImg: clubListImg,
      type: clubListImg.type,
      statusType: 0,
    }
  }
  termsBtnClicked = () => {
    document.location.href = '#/maltaserviceterms'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  serviceinfoBtnClicked = () => {
    document.location.href = '#/maltaserviceinfo'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  tableVisibleData = () => {
    let list = JSON.parse(JSON.stringify(clubListImg)) // 새로운 배열을 만들어줌 (기존 배열이 수정되지 않게 하기 위해서)

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
      } else if (statustype == 4 && element.type == 3) {
        newList.push(element)
      } else if (statustype == 5 && element.type == 4) {
        newList.push(element)
      }
    }
    // alert(JSON.stringify(newList));
    return newList
  }

  animateHTML = () => {
    var items, winH

    var initModule = function () {
      items = document.querySelectorAll('.text')
      winH = window.innerHeight
      _addEventHandlers()
    }

    var _addEventHandlers = function () {
      window.addEventListener('scroll', _checkPosition)
      window.addEventListener('load', _checkPosition)
      window.addEventListener('resize', initModule)
    }

    var _checkPosition = function () {
      for (var i = 0; i < items.length; i++) {
        var posFromTop = items[i].getBoundingClientRect().top
        if (winH > posFromTop) {
          items[i].classList.add('active')
        }
      }
    }

    return {
      init: initModule,
    }
  }

  topBtnClicked = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  render() {
    return (
      <CCol style={{ position: 'relative' }}>
        <CCol onClick={() => this.topBtnClicked()} className="top-btn-w">
          <CButton className="top-btn">
            <div className="top-btn-icon" />
          </CButton>
        </CCol>
        <CCol
          style={{ backgroundColor: '#f0f7ff', height: '100%', width: '100%', minWidth: '1280px' }}
        >
          <CContainer className="container-main">
            <CRow>
              <CCol style={{ paddingTop: '250px' }} className="motion1">
                <h6 style={{ fontSize: '20px', color: '#141414' }}>
                  기승 예약, 스케쥴 관리 플랫폼
                </h6>
                <h2
                  style={{
                    fontWeight: 700,
                    color: '#141414',
                    display: 'inline-block',
                    fontSize: '54px',
                    margin: 0,
                    lineHeight: '68px',
                    letterSpacing: '1px',
                  }}
                >
                  말타와 함께 승마장의
                  <br />
                  영업효과를 증명해보세요!
                </h2>
                <p
                  style={{
                    fontSize: '20px',
                    paddingTop: '10px',
                    color: '#141414',
                    fontWeight: 300,
                    paddingBottom: '20px',
                  }}
                >
                  힐링의 시작, 말타
                </p>
                <CRow>
                  <CCol xs="4">
                    <CButton
                      onClick={() => this.serviceinfoBtnClicked()}
                      className="service-main-button"
                    >
                      서비스 소개
                    </CButton>
                  </CCol>
                  <CCol xs="4">
                    <CButton onClick={() => this.termsBtnClicked()} className="service-main-button">
                      파트너스 문의
                    </CButton>
                  </CCol>
                </CRow>
              </CCol>
              <CCol>
                <img className="service-main-img" src="img/service-app-main.png" />
              </CCol>
            </CRow>
          </CContainer>
        </CCol>
        <CContainer className="container-main" style={{ paddingTop: '80px' }}>
          <CCol className="service-main-btn">
            {this.state.index == 0 ? (
              <CRow>
                <CCol xs="6">
                  <CButton
                    className="service-main-btn1"
                    style={{ width: '400px' }}
                    onClick={(e) => this.setState({ index: 0 })}
                  >
                    회원 앱 기능보기
                  </CButton>
                </CCol>
                <CCol xs="6">
                  <CButton
                    className="service-main-btn2"
                    style={{ width: '400px' }}
                    onClick={(e) => this.setState({ index: 1 })}
                  >
                    코치 앱 기능보기
                  </CButton>
                </CCol>
              </CRow>
            ) : (
              <CRow>
                <CCol xs="6">
                  <CButton
                    className="service-main-btn2"
                    style={{ width: '400px' }}
                    onClick={(e) => this.setState({ index: 0 })}
                  >
                    회원 앱 기능보기
                  </CButton>
                </CCol>
                <CCol xs="6">
                  <CButton
                    className="service-main-btn1"
                    style={{ width: '400px' }}
                    onClick={(e) => this.setState({ index: 1 })}
                  >
                    코치 앱 기능보기
                  </CButton>
                </CCol>
              </CRow>
            )}
          </CCol>
        </CContainer>

        {this.state.index == 0 ? (
          <>
            <CCol style={{ margin: '150px 0px 70px 0px', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: '40px',
                  textAlign: 'center',
                  color: '#141414',
                  fontWeight: '100',
                }}
              >
                편리하고 빠르게
                <br />
                <span style={{ fontWeight: '500' }}>기승예약</span>을 할 수 있습니다
              </h2>
            </CCol>

            <CContainer style={{ marginBottom: '160px' }}>
              <CRow>
                <CCol xs="7" style={{ textAlign: 'center' }}>
                  <img className="main-mockup-img" src="img/main/member-mockup.png" />
                </CCol>
                <CCol xs="5" style={{ textAlign: 'left', paddingTop: '170px' }}>
                  <h2
                    style={{
                      fontSize: '34px',
                      fontWeight: 500,
                      color: '#141414',
                    }}
                  >
                    기승자를 위한 맞춤 추천
                  </h2>
                  <p style={{ fontSize: '20px', color: '#141414', fontWeight: 300 }}>
                    말타는 가까운 위치의 승마장을 상단에
                    <br />
                    띄워 기승자가 보다 편리하게 실시간 예약이 <br />
                    가능한 기반의 서비스입니다.
                  </p>
                </CCol>
              </CRow>
            </CContainer>
            <Fade top>
              <CCol
                style={{
                  padding: 0,
                  margin: 0,
                  backgroundColor: '#f0f7ff',
                  height: '270px',
                  width: '100%',
                  minWidth: '1280px',
                }}
              >
                <CContainer style={{ padding: '0px 30px' }}>
                  <CRow>
                    <CCol xs="8" style={{ paddingTop: '80px' }}>
                      <CCol>
                        <h2 className="highlight">말타는</h2>
                      </CCol>
                      <CCol style={{ marginTop: '4px' }}>
                        <h2 className="highlight">이런 분들께</h2>
                      </CCol>
                      <CCol style={{ marginTop: '4px' }}>
                        <h2 className="highlight">추천 드립니다!</h2>
                      </CCol>
                    </CCol>

                    <CCol xs="4" className="justify-content-right">
                      <img
                        style={{ textAlign: 'right' }}
                        src="img/service-app-1.png"
                        height="360px"
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>

              <CContainer style={{ padding: '10px 60px' }}>
                <CRow className="align-middle" style={{ display: 'flex' }}>
                  <CCol className="main-01-1" style={{ width: '200px' }}>
                    <img
                      style={{ width: '80px', height: '80px', float: 'left', marginLeft: '-40px' }}
                      src="img/main/circle1.png"
                    />
                    <h5 className="main-h5-font">전화 상담 및 예약이 번거로우신 분</h5>
                  </CCol>
                  <CCol className="main-02-1" style={{ width: '200px' }}>
                    <img
                      style={{ width: '80px', height: '80px', float: 'left', marginLeft: '-40px' }}
                      src="img/main/circle2.png"
                    />
                    <h5 className="main-h5-font">가까운 승마장을 찾고 싶으신 분</h5>
                  </CCol>
                </CRow>
                <CRow style={{ display: 'flex' }}>
                  <CCol className="main-01-1" style={{ width: '200px' }}>
                    <img
                      style={{ width: '80px', height: '80px', float: 'left', marginLeft: '-40px' }}
                      src="img/main/circle3.png"
                    />
                    <h5 className="main-h5-font">맞는 승마 프로그램을 찾고 싶으신 분</h5>
                  </CCol>
                  <CCol className="main-02-1" style={{ width: '200px' }}>
                    <img
                      style={{ width: '80px', height: '80px', float: 'left', marginLeft: '-40px' }}
                      src="img/main/circle4.png"
                    />
                    <h5 className="main-h5-font">승마 관련 여러 정보를 알고 싶으신 분</h5>
                  </CCol>
                </CRow>
              </CContainer>
            </Fade>

            <ServiceSlider1 />

            <CCol xs="12" style={{ padding: 0 }}>
              <CCol
                style={{
                  backgroundColor: `#f0f7ff`,
                  width: '100%',
                  backgroundSize: 'cover',
                  padding: 0,
                  minWidth: '1280px',
                }}
              >
                <CContainer style={{ padding: '0px 40px' }}>
                  <CRow>
                    <CCol xs="6">
                      <h2
                        style={{
                          paddingTop: '80px',
                          fontWeight: 500,
                          color: '#141414',
                          fontSize: '40px',
                        }}
                      >
                        이제 말타로
                        <br />
                        승마를 시작해보세요!
                      </h2>
                      <p
                        style={{
                          color: '#141414',
                          fontSize: '18px',
                          fontWeight: 200,
                        }}
                      >
                        보다 편리한 승마 서비스를 제공합니다.
                      </p>

                      <CRow>
                        <CCol xs="5">
                          <CLink
                            href="https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829"
                            Target="_blank"
                            className="links"
                          >
                            <CButton className="main-app-store">
                              <CIcon icon={cibAppStoreIos} size="lg" />
                              <span style={{ fontSize: '18px', paddingLeft: '6px' }}>
                                {' '}
                                APP STORE
                              </span>
                            </CButton>
                          </CLink>
                        </CCol>
                        <CCol xs="5">
                          <CLink
                            href="https://play.google.com/store/apps/details?id=com.timehive.marlta"
                            Target="_blank"
                            className="links"
                          >
                            <CButton className="main-app-store">
                              <CIcon icon={cibGooglePlay} size="lg" />
                              <span style={{ fontSize: '18px', paddingLeft: '6px' }}>
                                {' '}
                                PLAY STORE
                              </span>
                            </CButton>
                          </CLink>
                        </CCol>
                      </CRow>
                    </CCol>

                    <CCol xs="6" style={{ textAlign: 'right' }}>
                      <img
                        style={{
                          width: 'auto',
                          height: '320px',
                          marginTop: '40px',
                        }}
                        src="img/main-bg-1.png"
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>
            </CCol>

            <CContainer style={{ padding: 0, textAlign: 'center' }}>
              <h2
                style={{
                  margin: '190px 0px 70px 0px',
                  fontSize: '36px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>말타</span>
                <span style={{ fontWeight: '500' }}> 뉴스</span>
              </h2>
              <CRow style={{ justifyContent: 'center', alignItems: 'center' }}>
                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/91dca7f059c15e24"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-1.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>서비스 무료 이용</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        베이직 요금제 출시
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2021.05.31
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/527b95a6c4222b68"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-2.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>한국마사회와</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        업무협약(MOU) 체결
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2021.03.24
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/d9175a6a18eafb56"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-3.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>승마 산업 활성화</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        승마장 5곳과 협약 체결
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2020.12.18
                      </CCol> */}
                      {/* 
                      <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.edaily.co.kr/news/read?newsId=01380886625864696&mediaCodeNo=257&OutLnkChk=Y"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-4.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>2020 농림축산식품</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        창업경진대회 최우수상
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2020.08.06
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        이데일리
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>
              </CRow>
            </CContainer>

            <CContainer
              style={{ paddingTop: '190px', textAlign: 'center', marginBottom: '190px' }}
              className="malta-partners"
            >
              <h2
                style={{
                  paddingBottom: '40px',
                  fontSize: '36px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>말타</span>
                <span style={{ fontWeight: '500' }}> 파트너스</span>
              </h2>
              <CCol
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CRow>
                  <CCol xs="3" style={{ padding: '20px 10px 10px 14px' }}>
                    <img src="img/main/notice3.jpg" height="54px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '0px 10px 10px 14px' }}>
                    <img src="img/main/notice4.jpg" height="74px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '20px 14px 10px 14px' }}>
                    <img src="img/main/notice2.jpg" height="56px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '26px 10px 10px 14px' }}>
                    <img src="img/main/notice1.jpg" height="45px" />
                  </CCol>
                </CRow>
              </CCol>
            </CContainer>

            <CCol
              className="text-center"
              style={{ backgroundColor: '#f3f5f7', minWidth: '1280px' }}
            >
              <CContainer style={{ paddingTop: '66px', paddingBottom: '46px' }}>
                <CCol>
                  <h2
                    style={{
                      fontWeight: '100',
                      color: '#141414',
                      paddingBottom: '14px',
                    }}
                  >
                    더 궁금한 점이 있으신가요?
                  </h2>
                </CCol>
                <CCol
                  style={{
                    backgroundColor: '#fff',
                    padding: '12px 40px',
                    borderRadius: '10px',
                    display: 'inline-block',
                  }}
                >
                  <h2 style={{ color: '#141414' }}>
                    <span style={{ fontWeight: '200', fontSize: '30px' }}>말타 고객센터 </span>
                    <span style={{ fontWeight: '500', fontSize: '40px' }}>02-567-0543</span>
                  </h2>
                </CCol>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '300',
                    color: '#141414',
                    paddingTop: '10px',
                  }}
                >
                  운영시간 : 평일 AM 09:30 - PM 06:30
                </p>
              </CContainer>
            </CCol>
            <ServiceFooter />
          </>
        ) : (
          <></>
        )}
        {this.state.index == 1 && (
          <>
            <CCol
              className="justify-content-md-center"
              style={{ margin: '150px 0px 70px 0px', minWidth: 1280 }}
            >
              <h2
                style={{
                  fontSize: '40px',
                  textAlign: 'center',
                  color: '#141414',
                  fontWeight: '100',
                  lineHeight: '46px',
                }}
              >
                <span style={{ fontSize: '30px' }}>휴일에도 전화 받는 일은 이제 그만!</span>
                <br />
                <span>말타를 통해</span>
                <span style={{ fontWeight: '500' }}> 회원도, 코치도 예약</span>
                <span>이 쉬워집니다</span>
              </h2>
            </CCol>
            <CContainer style={{ marginBottom: '160px' }}>
              <CRow>
                <CCol xs="7" style={{ textAlign: 'center' }}>
                  <img className="main-mockup-img" src="img/main/member-mockup2.png" />
                </CCol>
                <CCol xs="5" style={{ textAlign: 'left', paddingTop: '170px' }}>
                  <h2
                    style={{
                      fontSize: '34px',
                      fontWeight: 500,
                      color: '#141414',
                    }}
                  >
                    말타는?
                  </h2>
                  <p style={{ fontSize: '20px', color: '#141414', fontWeight: 300 }}>
                    말타는 기승 예약, 스케쥴 관리 등 승마에
                    <br />
                    최적화된 신규 유통채널로 편리하게 승마를
                    <br />
                    즐길 수 있는 서비스입니다.
                  </p>
                </CCol>
              </CRow>
            </CContainer>

            <CCol
              style={{
                backgroundColor: '#f3f5f7',
                textAlign: 'center',
                padding: 0,
                margin: 0,
                minWidth: 1280,
              }}
            >
              <h2
                style={{
                  padding: '82px 0px 0px 0px',
                  fontSize: '40px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>국내최초!</span>
                <br />
                <span style={{ fontWeight: '500' }}>승마장의 일정을 코치들이 공유</span>
                <span style={{ fontWeight: '200' }}>
                  할 수 있는
                  <br />
                  승마장 관리 솔루션
                </span>
              </h2>
              <CContainer>
                <CCol
                  style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '90px 0px 110px 0px',
                    margin: 0,
                  }}
                >
                  <CRow>
                    <CCol xs="4">
                      <img
                        src="./img/main/solution-img1.png"
                        height="200px"
                        style={{ borderRadius: '16px' }}
                      />
                      <h2 className="solution-img-title-h2">승마장 일정 연동</h2>
                      <h4 className="solution-img-title-h4">
                        말타 어플을 통해
                        <br />
                        <span style={{ fontWeight: 500 }}>승마장의 일정을 코치와 공유</span>해
                        <br />
                        일정의 혼선 및 누락 방지
                      </h4>
                    </CCol>
                    <CCol xs="4">
                      <img
                        src="./img/main/solution-img2.png"
                        height="200px"
                        style={{ borderRadius: '16px' }}
                      />
                      <h2 className="solution-img-title-h2">승마장 홍보 및 신규회원 유치</h2>
                      <h4 className="solution-img-title-h4">
                        불특정 다수가 아닌
                        <br />
                        <span style={{ fontWeight: 500 }}>전문 타겟 마케팅 기술</span>로
                        <br />
                        신규회원 유치 가능
                      </h4>
                    </CCol>
                    <CCol xs="4">
                      <img
                        src="./img/main/solution-img3.png"
                        height="200px"
                        style={{ borderRadius: '16px' }}
                      />
                      <h2 className="solution-img-title-h2">승마장 종합 관리</h2>
                      <h4 className="solution-img-title-h4">
                        회원관리, 마필관리, 마장관리,
                        <br />
                        공지사항, 통계 등 말타로
                        <br />
                        <span style={{ fontWeight: 500 }}>한번에 관리 가능한</span> 토탈 솔루션 제공
                      </h4>
                    </CCol>
                  </CRow>
                </CCol>
              </CContainer>
            </CCol>

            <ServiceSlider2 />

            <CCol
              style={{
                backgroundImage: `url(./img/main/background-image1.png)`,
                height: '1400px',
                width: '100%',
                padding: 0,
                margin: 0,
                backgroundSize: 'cover',
                minWidth: '1280px',
              }}
            >
              <CContainer>
                <CCol>
                  <h2
                    style={{
                      color: '#ffff',
                      fontSize: '40px',
                      fontWeight: '500',
                      padding: '110px 0px 0px 0px',
                      textAlign: 'center',
                    }}
                  >
                    베이직부터 시작하세요!
                    <br />
                    직접 사용하며 이해 하시는게 제일 좋습니다
                  </h2>
                </CCol>

                <CCol>
                  <CCol className="row" style={{ justifyContent: 'center' }}>
                    <CCol className="basic-box" style={{ textAlign: 'left' }}>
                      <Fade>
                        <CCol>
                          <h4 className="basic-msg1">말타 기능을 체험해보고 싶어요</h4>
                        </CCol>
                      </Fade>
                      <Fade>
                        <CCol>
                          <h4 className="basic-msg1">기존 회원관리는 별도로 해도 괜찮아요</h4>
                        </CCol>
                      </Fade>
                      <Fade>
                        <CCol>
                          <h4 className="basic-msg1">일일체험 위주로 운영하고 있어요</h4>
                        </CCol>
                      </Fade>
                      <Fade>
                        <CCol style={{ textAlign: 'right' }}>
                          <h4 className="basic-msg2">BASIC을 추천드립니다!</h4>
                        </CCol>
                      </Fade>
                    </CCol>

                    <CCol className="premium-box" style={{ textAlign: 'left' }}>
                      <Fade>
                        <CCol>
                          <h4 className="premium-msg1">
                            많은 신규회원 유입과 예약을 편리하게 관리하고 싶어요
                          </h4>
                        </CCol>
                      </Fade>
                      <Fade>
                        <CCol>
                          <h4 className="premium-msg1">회원과 클럽의 모든 관리 기능이 필요해요</h4>
                        </CCol>
                      </Fade>
                      <Fade>
                        <CCol>
                          <h4 className="premium-msg1">
                            코치들과 실시간으로 스케쥴을 공유하고 싶어요
                          </h4>
                        </CCol>
                      </Fade>

                      <CCol style={{ textAlign: 'right' }}>
                        <h4 className="premium-msg2">
                          <span style={{ color: '#ffe600' }}>★</span> PREMIUM을 추천드립니다!
                        </h4>
                      </CCol>
                    </CCol>
                  </CCol>
                </CCol>

                <CRow xs="12" className="basic-premium-icon">
                  <CCol
                    xs="6"
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src="./img/main/basic-premium-icon.png"
                      style={{ height: '36px', width: '86px', margin: 0 }}
                    />
                  </CCol>
                  <CCol
                    xs="6"
                    style={{
                      justifyContent: 'center',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src="./img/main/basic-premium-icon.png"
                      style={{ height: '36px', width: '86px', margin: 0 }}
                    />
                  </CCol>
                </CRow>

                <CCol>
                  <CCol className="row" style={{ justifyContent: 'center' }}>
                    <CCol className="basic">
                      <CCol
                        style={{
                          justifyContent: 'center',
                          color: '#141414',
                        }}
                      >
                        <h1>
                          BASIC
                          <br />
                          <span style={{ fontWeight: '200', fontSize: '28px' }}>무료</span>
                        </h1>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: 200,
                          }}
                        >
                          승마체험 / 일일기승
                          <br />
                          수수료 10%
                        </p>
                        <CCol
                          style={{
                            textAlign: 'center',
                            display: 'block',
                            marginTop: '30px',
                            alignItems: 'center',
                          }}
                        >
                          <CCol>
                            <h3 className="basic-font">신규 예약 관리</h3>
                          </CCol>
                          <CCol>
                            <h3 className="basic-font">프로그램 등록</h3>
                          </CCol>
                          <CCol>
                            <h3 className="basic-font">승마클럽 일정 관리(제한)</h3>
                          </CCol>
                        </CCol>
                        <p>
                          <span style={{ color: '#a8a8a8', fontSize: '12px', paddingTop: '20px' }}>
                            PG 별도
                          </span>
                        </p>
                      </CCol>
                    </CCol>

                    <CCol className="premium">
                      <CCol
                        style={{
                          justifyContent: 'center',
                          color: '#141414',
                        }}
                      >
                        <h1>
                          <span style={{ color: '#2E93F9' }}> PREMIUM</span>
                          <br />
                          <span style={{ fontWeight: '200', fontSize: '28px' }}>30,000원 /월</span>
                        </h1>
                        <p
                          style={{
                            color: '#888888',
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: 200,
                          }}
                        >
                          승마체험 / 일일기승
                          <br />
                          수수료 10%
                        </p>
                        <CCol
                          style={{
                            textAlign: 'center',
                            display: 'block',
                            marginTop: '30px',
                          }}
                        >
                          <CCol>
                            <h3 className="premium-font">모든 회원 예약 관리</h3>
                          </CCol>
                          <CCol>
                            <h3 className="premium-font">프로그램 등록</h3>
                          </CCol>
                          <CCol>
                            <h3 className="premium-font">승마클럽 일정 관리</h3>
                          </CCol>
                          <CCol>
                            <h3 className="premium-font">회원 쿠폰 관리</h3>
                          </CCol>
                        </CCol>
                        <p>
                          <span style={{ color: '#a8a8a8', fontSize: '12px', paddingTop: '20px' }}>
                            PG / VAT. 별도
                          </span>
                        </p>
                      </CCol>
                    </CCol>
                  </CCol>
                </CCol>

                <CCol style={{ textAlign: 'center' }}>
                  <CLink style={{ textDecoration: 'none' }} to="/service" className="links">
                    <CButton onClick={() => this.serviceinfoBtnClicked()} className="money-button">
                      요금제 자세히 알아보기
                    </CButton>
                  </CLink>
                </CCol>
              </CContainer>
            </CCol>

            <CContainer style={{ textAlign: 'center' }}>
              <CCol style={{ margin: '180px 0px 230px 0px' }}>
                <h2 style={{ marginBottom: '80px', color: '#141414' }}>
                  <span style={{ fontWeight: '100', fontSize: '30px' }}>
                    말타 써보고 싶은데, 가입 어떻게 하나요?
                  </span>
                  <br />
                  <span style={{ fontWeight: '500', fontSize: '40px' }}>
                    말타 가입 절차는 간단합니다!
                  </span>
                </h2>

                <CCol>
                  <CRow>
                    <CCol xs="3">
                      <img src="./img/main/join1-1.png" style={{ height: '170px' }} />
                      <h2
                        style={{
                          color: '#12AFDC',
                          fontSize: '30px',
                          fontWeight: '500',
                        }}
                      >
                        문의하기
                      </h2>
                      <p style={{ paddingTop: '4px' }}>
                        <span style={{ fontSize: '18px', color: '#141414' }}>
                          문의에 필요한 정보들을
                          <br />
                          적고 문의 등록합니다.
                        </span>
                      </p>
                    </CCol>

                    <CCol style={{ padding: '80px 0px' }}>
                      <img src="./img/main/join1-4.png" style={{ height: '40px' }} />
                    </CCol>

                    <CCol xs="3">
                      <img src="./img/main/join1-2.png" style={{ height: '170px' }} />
                      <h2
                        style={{
                          color: '#12AFDC',
                          fontSize: '30px',
                          fontWeight: '500',
                        }}
                      >
                        서류심사
                      </h2>
                      <p style={{ paddingTop: '4px' }}>
                        <span style={{ fontSize: '18px', color: '#141414' }}>
                          문의 내용으로 전화 상담 후<br />
                          서류 심사를 시작합니다.
                        </span>
                      </p>
                    </CCol>

                    <CCol style={{ padding: '80px 0px' }}>
                      <img src="./img/main/join1-4.png" style={{ height: '40px' }} />
                    </CCol>

                    <CCol xs="3" className="join1-3">
                      <img src="./img/main/join1-3.png" style={{ height: '170px' }} />
                      <h2
                        style={{
                          color: '#12AFDC',
                          fontSize: '30px',
                          fontWeight: '500',
                        }}
                      >
                        승인결과
                      </h2>
                      <p style={{ paddingTop: '4px' }}>
                        <span style={{ fontSize: '18px', color: '#141414' }}>
                          승인 결과가 나면
                          <br />
                          전화로 연락을 드립니다.
                        </span>
                      </p>
                    </CCol>
                  </CRow>
                </CCol>
              </CCol>
            </CContainer>

            <CCol
              style={{
                backgroundColor: '#f3f5f7',
                padding: '90px 0px 50px 0px',
                margin: 0,
                minWidth: '1280px',
              }}
            >
              <CContainer style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '40px', color: '#141414' }}>
                  <span style={{ fontWeight: '100' }}>PC와 모바일에서</span>
                  <br />
                  <span style={{ fontWeight: '500' }}>편리하게 관리하세요!</span>
                </h2>

                <CRow
                  style={{ paddingLeft: '25px', justifyContent: 'center', alignItems: 'center' }}
                >
                  <CCol style={{ padding: '50px' }}>
                    <img src="./img/main/pc-mobile1.png" style={{ height: '300px' }} />
                    <p
                      style={{
                        paddingTop: '30px',
                        fontSize: '20px',
                        color: '#141414',
                      }}
                    >
                      말타 PC버전을 통해 회원 관리,
                      <br />
                      마필 관리, 마장 관리, 프로모션 관리를
                      <br />
                      용이하게 할 수 있습니다.
                    </p>
                  </CCol>

                  <CCol className="pc-mobile2" style={{ padding: '50px' }}>
                    <img src="./img/main/pc-mobile2.png" style={{ height: '300px' }} />
                    <p
                      style={{
                        paddingTop: '30px',
                        fontSize: '20px',
                        color: '#141414',
                      }}
                    >
                      앱으로 어디서든 누구나
                      <br />
                      승마장 일정을 수정하고 확인할 수 있습니다.
                      <br />
                      지금 바로 앱을 통해 관리하세요.
                    </p>
                  </CCol>
                </CRow>
              </CContainer>
            </CCol>

            <CContainer style={{ padding: 0, textAlign: 'center' }}>
              <h2
                style={{
                  margin: '190px 0px 70px 0px',
                  fontSize: '36px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>말타</span>
                <span style={{ fontWeight: '500' }}> 뉴스</span>
              </h2>
              <CRow style={{ justifyContent: 'center', alignItems: 'center' }}>
                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/91dca7f059c15e24"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-1.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '500',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>서비스 무료 이용</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        베이직 요금제 출시
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2021.05.31
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/527b95a6c4222b68"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-2.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>한국마사회와</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        업무협약(MOU) 체결
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2021.03.24
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.nextunicorn.kr/newsroom/d9175a6a18eafb56"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-3.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>승마 산업 활성화</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        승마장 5곳과 협약 체결
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2020.12.18
                      </CCol> */}

                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          fontSize: '15px',
                          cursor: 'pointer',
                          paddingTop: '10px',
                          fontWeight: '200',
                        }}
                      >
                        넥스트유니콘
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>

                <CCol xs="3" style={{ padding: '14px' }}>
                  <CLink
                    href="https://www.edaily.co.kr/news/read?newsId=01380886625864696&mediaCodeNo=257&OutLnkChk=Y"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                  >
                    <CCol className="news-board-fixed-image-box">
                      <CImage
                        className="d-block w-100 cover news-board-fixed-image"
                        src="img/main/news1-4.jpg"
                        alt="slide 1"
                        Width="auto"
                        overflow="hidden"
                        display="flex"
                      />
                    </CCol>
                    <CCol
                      style={{
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#141414',
                        lineHeight: '26px',
                        paddingTop: '10px',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ fontSize: '16px', fontWeight: '200' }}>2020 농림축산식품</span>
                      <br />
                      <span style={{ fontSize: '24px', fontWeight: '500' }}>
                        창업경진대회 최우수상
                      </span>
                    </CCol>
                    <CRow>
                      {/* <CCol
                        style={{
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          textAlign: 'left',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        2020.08.06
                      </CCol> */}
                      {/* <CCol
                        style={{
                          textAlign: 'right',
                          color: '#b3b3b3',
                          paddingTop: '10px',
                          fontSize: '15px',
                          cursor: 'pointer',
                          fontWeight: '200',
                        }}
                      >
                        이데일리
                      </CCol> */}
                    </CRow>
                  </CLink>
                </CCol>
              </CRow>
            </CContainer>

            <CContainer
              style={{ paddingTop: '190px', textAlign: 'center', marginBottom: '190px' }}
              className="malta-partners"
            >
              <h2
                style={{
                  paddingBottom: '40px',
                  fontSize: '36px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>말타</span>
                <span style={{ fontWeight: '500' }}> 파트너스</span>
              </h2>
              <CCol
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CRow>
                  <CCol xs="3" style={{ padding: '20px 10px 10px 14px' }}>
                    <img src="img/main/notice3.jpg" height="54px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '0px 10px 10px 14px' }}>
                    <img src="img/main/notice4.jpg" height="74px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '20px 14px 10px 14px' }}>
                    <img src="img/main/notice2.jpg" height="56px" />
                  </CCol>
                  <CCol xs="3" style={{ padding: '26px 10px 10px 14px' }}>
                    <img src="img/main/notice1.jpg" height="45px" />
                  </CCol>
                </CRow>
              </CCol>
            </CContainer>

            <CContainer style={{ textAlign: 'center', marginBottom: '190px' }}>
              <h2
                style={{
                  paddingBottom: '60px',
                  fontSize: '36px',
                  color: '#141414',
                }}
              >
                <span style={{ fontWeight: '200' }}>말타</span>
                <span style={{ fontWeight: '500' }}> 협약 승마클럽</span>
              </h2>
              <CCol
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CCol className="text-center" xs="12" style={{ paddingBottom: '30px' }}>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 14px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 0 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    전체
                  </CButton>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 18px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 1 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    경기도
                  </CButton>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 18px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    충청도
                  </CButton>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 18px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    전라도
                  </CButton>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 18px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 4 })}
                  >
                    경상도
                  </CButton>
                  <CButton
                    xs="3"
                    style={{
                      borderRadius: '30px',
                      padding: '10px 30px',
                      margin: '8px 18px',
                      fontSize: '16px',
                      fontWeight: 500,
                    }}
                    className={this.state.statusType == 5 ? 'btn-outline-info' : 'btn-info'}
                    onClick={() => this.setState({ statusType: 5 })}
                  >
                    제주도
                  </CButton>
                </CCol>
                <Fade>
                  <CRow>
                    {this.tableVisibleData().map((item, index) => (
                      <CCol xs="2" key={item.name} style={{ padding: '10px', margin: '16px 0px' }}>
                        <CImage src={item.img} alt="horseclub" Width="auto" Height="74px" />
                        <h6 style={{ color: '#757575' }}>{item.title}</h6>
                      </CCol>
                    ))}
                  </CRow>
                </Fade>
              </CCol>
            </CContainer>

            <h2
              style={{
                margin: '190px 0px 70px 0px',
                fontSize: '36px',
                color: '#141414',
                textAlign: 'center',
              }}
            >
              <span style={{ fontWeight: '200' }}>자주 묻는</span>
              <span style={{ fontWeight: '500' }}> 질문</span>
            </h2>
            <CContainer style={{ padding: '0px 60px' }}>
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader className="aco-header">
                    승마장 등록 방법은 무엇인가요?
                  </CAccordionHeader>
                  <CAccordionBody>
                    카카오톡 플러스 친구 ‘말타’ 또는 고객센터 02-567-0543 으로 문의 주시면
                    <br />
                    협약 승마장 가입 안내 절차를 받으실 수 있습니다.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader className="aco-header">
                    매니저앱 로그인은 어떻게 하나요?
                  </CAccordionHeader>
                  <CAccordionBody>
                    매니저앱의 경우 ‘말타’에서 직접 코치님들의 아이디를 만들어 드립니다. 협약 승마장
                    등록 전 매니저앱을 <br />
                    직접 체험해보고 싶은 경우 카카토톡 플러스 친구 ‘말타’또는 고객센터 02-567-0543
                    으로 문의 부탁 드립니다.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader className="aco-header">
                    예약은 어떻게 받는건가요?
                  </CAccordionHeader>
                  <CAccordionBody>
                    1. 예약이 접수될 경우 매니저앱으로 예약 승인이 접수됩니다.
                    <br />
                    2. 예약 스케줄을 확인하시고 회원의 예약을 승인 확정 및 거절을 눌러주세요.
                    <br />
                    3. 예약 거절 시 거절 사유 및 추천시간을 추천해줄 수 있습니다.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader className="aco-header">
                    계약해지는 언제든지 가능한가요?
                  </CAccordionHeader>
                  <CAccordionBody>
                    네, 가능합니다. 다만 협약승마장에서 제외되며 따라서 신규회원 유입이 어려워
                    집니다.
                    <br />
                    또한 고객들이 볼 수 있었던 승마장의 기본정보가 제공되지 않습니다.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader className="aco-header">
                    승마장에 스케줄이나 요금에 맞춰 커스텀을 할 수 있나요?
                  </CAccordionHeader>
                  <CAccordionBody>
                    네, 가능합니다. ‘말타’는 승마에 특화된 어플로써 모든 승마장에서 사용할 수 있도록
                    맞춤 제작되었습니다.
                    <br />
                    동절기, 하절기 운영시간, 멤버쉽, 쿠폰 요금제 등 편리하게 이용하실 수 있습니다.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CContainer>

            <CCol xs="12" style={{ paddingTop: '160px' }}>
              <CCol
                style={{
                  backgroundColor: `#f0f7ff`,
                  width: '100%',
                  backgroundSize: 'cover',
                  padding: 0,
                  minWidth: '1280px',
                }}
              >
                <CContainer style={{ padding: '0px 40px' }}>
                  <CRow>
                    <CCol xs="6">
                      <h2
                        style={{
                          paddingTop: '80px',
                          fontWeight: 500,
                          color: '#141414',
                          fontSize: '40px',
                        }}
                      >
                        이제 말타로
                        <br />
                        승마를 시작해보세요!
                      </h2>
                      <p
                        style={{
                          color: '#141414',
                          fontSize: '18px',
                          fontWeight: 200,
                        }}
                      >
                        보다 편리한 승마 서비스를 제공합니다.
                      </p>

                      <CRow>
                        <CCol xs="5">
                          <CLink
                            href="https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829"
                            Target="_blank"
                            className="links"
                          >
                            <CButton className="main-app-store">
                              <CIcon icon={cibAppStoreIos} size="lg" />
                              <span style={{ fontSize: '18px', paddingLeft: '6px' }}>
                                {' '}
                                APP STORE
                              </span>
                            </CButton>
                          </CLink>
                        </CCol>
                        <CCol xs="5">
                          <CLink
                            href="https://play.google.com/store/apps/details?id=com.timehive.marlta"
                            Target="_blank"
                            className="links"
                          >
                            <CButton className="main-app-store">
                              <CIcon icon={cibGooglePlay} size="lg" />
                              <span style={{ fontSize: '18px', paddingLeft: '6px' }}>
                                {' '}
                                PLAY STORE
                              </span>
                            </CButton>
                          </CLink>
                        </CCol>
                      </CRow>
                    </CCol>

                    <CCol xs="6" style={{ textAlign: 'right' }}>
                      <img
                        style={{
                          width: 'auto',
                          height: '320px',
                          marginTop: '40px',
                        }}
                        src="img/main-bg-1.png"
                      />
                    </CCol>
                  </CRow>
                </CContainer>
              </CCol>
            </CCol>

            <CCol
              className="text-center"
              style={{ backgroundColor: '#f3f5f7', minWidth: '1280px' }}
            >
              <CContainer style={{ paddingTop: '66px', paddingBottom: '46px' }}>
                <CCol>
                  <h2
                    style={{
                      fontWeight: '100',
                      color: '#141414',
                      paddingBottom: '14px',
                    }}
                  >
                    더 궁금한 점이 있으신가요?
                  </h2>
                </CCol>
                <CCol
                  style={{
                    backgroundColor: '#fff',
                    padding: '12px 40px',
                    borderRadius: '10px',
                    display: 'inline-block',
                  }}
                >
                  <h2 style={{ color: '#141414' }}>
                    <span style={{ fontWeight: '200', fontSize: '30px' }}>말타 고객센터 </span>
                    <span style={{ fontWeight: '500', fontSize: '40px' }}>02-567-0543</span>
                  </h2>
                </CCol>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: '300',
                    color: '#141414',
                    paddingTop: '10px',
                  }}
                >
                  운영시간 : 평일 AM 09:30 - PM 06:30
                </p>
              </CContainer>
            </CCol>
            <ServiceFooter />
          </>
        )}
      </CCol>
    )
  }
}

export default MaltaAppService
