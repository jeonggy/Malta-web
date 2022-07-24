import React, { Component } from 'react'
import {
  CCol,
  CButton,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CBadge,
  CImage,
  CModal,
  CModalBody,
  CFormInput,
} from '@coreui/react'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import MobileFooter from '../../../components/MobileFooter'
import MobileHeader from '../../../components/MobileHeader'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { isMobile, isAndroid, isIOS } from 'react-device-detect'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import axios from 'axios'
import DefaultURL from '../DefaultURL'

const programlist = [
  { id: 1, program: '승마체험', money: '30,000원' },
  { id: 2, program: '일일기승', money: '70,000원' },
]
const hourslist = [{ id: 1, open: '09:00', close: '18:00' }]

const dayofflist = [{ id: 1, dayoff: '월요일' }]

class MobileHorseClubPage extends Component {
  constructor(props) {
    super(props)
    var exPrice = new URLSearchParams(this.props.location.search).get('daily_experience_price')
    var riPrice = new URLSearchParams(this.props.location.search).get('daily_riding_price')
    this.state = {
      index: 0,
      programlist: programlist,
      hourslist: hourslist,
      dayofflist: dayofflist,
      appdownloadModalOpen: false,
      exPrice: exPrice,
      riPrice: riPrice,
    }
    var cid = new URLSearchParams(this.props.location.search).get('club_id')
    this.getClubInfo(cid)
  }
  android() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.timehive.marlta&hl=ko&gl=US'
  }
  ios() {
    window.location.href = 'https://apps.apple.com/kr/app/말타-승마예약앱/id1532007829'
  }
  getClubInfo = (cid) => {
    axios
      .get(DefaultURL() + 'user/club/info', {
        params: {
          access_token2: '',
          user_id: '',
          club_id: cid,
        },
      })
      .then((res) => {
        if (res.data.status === 1) {
          // alert(JSON.stringify(res.data.data))
          this.setState({
            clubInfo: res.data.data.clubInfo, //원본 데이터
          })
        } else {
          alert('fail')
        }
      })
  }
  popupDeleted = () => {
    this.setState({ appdownloadModalOpen: false })
  }

  appdownloadBtnClicked = () => {
    if (isMobile && isIOS) {
      this.ios()
      // window.location.href="https://appstore-link.com";
    } else if (isMobile && isAndroid) {
      this.android()
    } else {
      alert('말타 앱은 iOS, Android 에서만 지원 가능합니다.')
    }
    // this.setState({
    //   appdownloadModalOpen: true,
    // })
  }
  numPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  render() {
    const clubInfo = this.state.clubInfo
    // const navermaps = window.naver.maps
    return (
      <>
        <MobileHeader />
        <CRow className="row-st-none">
          <CCol
            style={{
              background: 'url(/img/horseclub-1.jpg)',
              width: '100%',
              paddingTop: '80px',
              paddingBottom: '60px',
              textAlign: 'center',
              margin: 0,
              paddingRight: 0,
              paddingLeft: 0,
            }}
          >
            <CCol>
              <CBadge
                color="warning"
                style={{ fontSize: '14px', borderRadius: '20px', textAlign: 'center' }}
              >
                ★ 빠른예약
              </CBadge>

              <CCol style={{ padding: 0, margin: 0 }}>
                {clubInfo && (
                  <>
                    <h2
                      style={{
                        fontSize: '34px',
                        fontWeight: 500,
                        padding: '24px 24px 0px 24px',
                        color: '#fff',
                        marginBottom: '4px',
                      }}
                    >
                      <img
                        src={clubInfo.club_logo_img_url}
                        width="40px"
                        style={{ marginBottom: '12px', marginRight: '8px', borderRadius: '50%' }}
                      />
                      {clubInfo.club_name}
                    </h2>
                    <h6
                      style={{
                        color: '#fff',
                        fontWeight: 300,
                        paddingTop: '2px',
                        fontSize: '14px',
                      }}
                    >
                      {clubInfo.address}
                    </h6>
                    <CBadge
                      color="light"
                      className="horseclub-badge"
                      style={{
                        fontSize: '12px',
                        borderRadius: '20px',
                        marginLeft: '6px',
                        color: '#636f83',
                      }}
                    >
                      월요일 휴무
                    </CBadge>
                    <CRow className="row-st-none">
                      <h6
                        style={{
                          color: '#fff',
                          paddingTop: '20px',
                          fontWeight: 300,
                          fontSize: '14px',
                        }}
                      >
                        <img
                          src="img/star1.png"
                          width="100px"
                          style={{ paddingBottom: '2px', marginRight: '6px' }}
                        />
                        (5.0) 23개의 이용후기
                      </h6>
                    </CRow>
                  </>
                )}
              </CCol>
            </CCol>
          </CCol>
        </CRow>
        <CCol style={{ paddingTop: '20px' }}>
          <CRow className="row-st-none">
            <img style={{ cursor: 'pointer', width: '400px' }} src="img/mobile/topimg.png" />
          </CRow>
        </CCol>
        <CCol style={{ paddingTop: '100px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 500 }}>이용시설</h2>
          <CCol style={{ margin: '0px' }}>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={2}
              slidesOffsetBefore={false} // 슬라이드 시작 부분 여백
              navigation={{
                // 버튼
                nextEl: '.swiper-button-next-m',
                prevEl: '.swiper-button-prev-m',
              }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ padding: '30px 14px' }}
            >
              {clubInfo &&
                clubInfo.clubImgUrlList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Zoom>
                      <CImage rounded src={item ? item : 'img/horseclub.jpg'} width="100%" />
                    </Zoom>
                  </SwiperSlide>
                ))}
            </Swiper>
          </CCol>
        </CCol>
        <CCol style={{ paddingTop: '100px' }} className="review-width">
          <h2 style={{ textAlign: 'center', fontWeight: 500 }}>이용후기</h2>
          <CCol style={{ marginTop: '30px', padding: '16px' }}>
            <CRow className="row-st-none">
              <CCol xs="3" style={{ margin: 0, padding: 0 }}>
                <img
                  src="img/clublogo.png"
                  width="42px"
                  style={{ marginLeft: '20px', padding: 0 }}
                />
              </CCol>
              <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                <CRow className="row-st-none">
                  <CCol style={{ margin: 0, padding: 0 }}>
                    <img src="img/star1.png" width="100px" style={{ paddingBottom: '6px' }} />
                  </CCol>
                </CRow>
                <CRow className="row-st-none">
                  <CCol style={{ margin: 0, padding: 0 }}>
                    <h6 style={{ color: '#919191', margin: 0, padding: 0, fontSize: '15px' }}>
                      최*희{' '}
                      <span style={{ fontSize: '12px', fontWeight: 300 }}>
                        (이용날짜 : 2022.01.20)
                      </span>
                      <span
                        style={{
                          color: '#fff',
                          fontSize: '11px',
                          backgroundColor: '#919191',
                          borderRadius: '4px',
                          padding: '2px 4px 2px 4px',
                          marginLeft: '6px',
                        }}
                      >
                        승마체험 이용
                      </span>
                    </h6>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CCol
              style={{
                backgroundColor: '#F8F9FA',
                borderRadius: '10px',
                padding: '18px',
                marginTop: '12px',
              }}
            >
              <h5 style={{ fontSize: '15px', lineHeight: '20px' }}>
                코치님들이 너무 친절하고 잘 가르쳐줘요ㅎㅎ
                <br />
                유익한 시간이었어요! 다음에도 오고 싶어요~
              </h5>
              <p
                style={{
                  fontSize: '12px',
                  color: '#919191',
                  padding: 0,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                2021.12.24
              </p>
            </CCol>
          </CCol>
          <CCol style={{ marginTop: '30px' }} className="review-">
            <CCol className="review-back" style={{ opacity: '0.2', padding: '16px' }}>
              <CRow className="row-st-none">
                <CCol xs="3" style={{ margin: 0, padding: 0 }}>
                  <img
                    src="img/clublogo.png"
                    width="42px"
                    style={{ marginLeft: '20px', padding: 0 }}
                  />
                </CCol>
                <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                  <CRow className="row-st-none">
                    <CCol style={{ margin: 0, padding: 0 }}>
                      <img src="img/star1.png" width="100px" style={{ paddingBottom: '6px' }} />
                    </CCol>
                  </CRow>
                  <CRow className="row-st-none">
                    <CCol style={{ margin: 0, padding: 0 }}>
                      <h6 style={{ color: '#919191', margin: 0, padding: 0, fontSize: '15px' }}>
                        최*희{' '}
                        <span style={{ fontSize: '12px', fontWeight: 300 }}>
                          (이용날짜 : 2022.01.20)
                        </span>
                        <span
                          style={{
                            color: '#fff',
                            fontSize: '11px',
                            backgroundColor: '#919191',
                            borderRadius: '4px',
                            padding: '2px 4px 2px 4px',
                            marginLeft: '6px',
                          }}
                        >
                          승마체험 이용
                        </span>
                      </h6>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CCol
                style={{
                  backgroundColor: '#F8F9FA',
                  borderRadius: '10px',
                  padding: '18px',
                  marginTop: '12px',
                }}
              >
                <h5 style={{ fontSize: '15px', lineHeight: '20px' }}>
                  코치님들이 너무 친절하고 잘 가르쳐줘요ㅎㅎ 유익한 시간이었어요!
                  <br />
                  다음에도 오고 싶어요
                </h5>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#919191',
                    padding: 0,
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  2021.12.24
                </p>
              </CCol>
            </CCol>
            <CRow className="row-st-none">
              <CCol className="review-front text-center">
                <h2
                  style={{
                    color: '#2E93F9',
                    fontWeight: 700,
                    paddingBottom: '8px',
                    fontSize: '22px',
                  }}
                >
                  더 많은 후기와 사진이 궁금하다면?
                </h2>
                <CButton
                  className="app-download-btn-m"
                  onClick={() => this.appdownloadBtnClicked()}
                >
                  말타 앱 다운로드 받기
                </CButton>
              </CCol>
            </CRow>
          </CCol>
        </CCol>
        <CCol style={{ paddingTop: '140px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 500 }}>이용금액</h2>
          <CCol style={{ marginTop: '20px', padding: '16px' }}>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }}>
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell colSpan="6" scope="col">
                    프로그램
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan="6" scope="col">
                    금액
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {clubInfo && (
                  <>
                    <CTableRow
                      align="middle"
                      key={clubInfo.index}
                      hover
                      style={{ cursor: 'pointer' }}
                    >
                      <CTableDataCell align="middle" colSpan="8" style={{ textAlign: 'center' }}>
                        승마체험
                      </CTableDataCell>
                      <CTableDataCell align="middle" colSpan="2" style={{ textAlign: 'center' }}>
                        {this.state.exPrice
                          ? this.numPrice(this.state.exPrice) + '원~'
                          : '정보없음'}
                        {/* {this.pricePractice(clubInfo)} */}
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow
                      align="middle"
                      key={clubInfo.index}
                      hover
                      style={{ cursor: 'pointer' }}
                    >
                      <CTableDataCell align="middle" colSpan="8" style={{ textAlign: 'center' }}>
                        일일기승
                      </CTableDataCell>
                      <CTableDataCell align="middle" colSpan="2" style={{ textAlign: 'center' }}>
                        {this.state.riPrice
                          ? this.numPrice(this.state.riPrice) + '원~'
                          : '정보없음'}
                        {/* {this.priceRiding(clubInfo)} */}
                      </CTableDataCell>
                    </CTableRow>
                  </>
                )}
              </CTableBody>
            </CTable>
          </CCol>
          <CCol className="text-center">
            <h5
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                backgroundColor: '#F8F9FA',
                display: 'inline-block',
                padding: '30px',
                borderRadius: '10px',
              }}
            >
              체험 프로그램과 1회 기승 프로그램의
              <br />
              주중 최저가입니다. 모든 프로그램의 금액과
              <br />
              상세 설명은 말타 앱에서 확인해주세요.
            </h5>
          </CCol>
        </CCol>
        <CCol style={{ paddingTop: '110px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 500 }}>영업시간</h2>
          <CCol style={{ marginTop: '20px', padding: '16px' }}>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }}>
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell colSpan="12" scope="col">
                    정기휴무
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.dayofflist.map((dayitem, index) => (
                  <CTableRow align="middle" key={dayitem.name} hover style={{ cursor: 'pointer' }}>
                    <CTableDataCell align="middle" colSpan="12" style={{ textAlign: 'center' }}>
                      {dayitem.dayoff}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
          <CCol style={{ marginTop: '20px', padding: '16px' }}>
            <CTable align="middle">
              <CTableHead style={{ borderTop: '2px solid' }}>
                <CTableRow align="middle" style={{ textAlign: 'center' }}>
                  <CTableHeaderCell colSpan="6" scope="col">
                    OPEN
                  </CTableHeaderCell>
                  <CTableHeaderCell colSpan="6" scope="col">
                    CLOSE
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {this.state.hourslist.map((hoursitem, index) => (
                  <CTableRow
                    align="middle"
                    key={hoursitem.name}
                    hover
                    style={{ cursor: 'pointer' }}
                  >
                    <CTableDataCell align="middle" colSpan="8" style={{ textAlign: 'center' }}>
                      {hoursitem.open}
                    </CTableDataCell>
                    <CTableDataCell align="middle" colSpan="2" style={{ textAlign: 'center' }}>
                      {hoursitem.close}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
          <CCol className="text-center">
            <h5
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                backgroundColor: '#F8F9FA',
                display: 'inline-block',
                padding: '30px 40px 30px 40px',
                borderRadius: '10px',
              }}
            >
              정기 휴무일 외 영업시간은
              <br />
              말타 앱에서 확인해주세요.
            </h5>
          </CCol>

          <CCol style={{ marginTop: '110px' }}>
            <h2 style={{ textAlign: 'center', fontWeight: 500, paddingBottom: '40px' }}>
              오시는길
            </h2>
            {clubInfo && (
              <RenderAfterNavermapsLoaded
                ncpClientId={'iznrvuky0l'} // 자신의 네이버 계정에서 발급받은 Client ID
                error={<p>Maps Load Error</p>}
              >
                <NaverMap
                  mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                  style={{
                    width: '100%', // 네이버지도 가로 길이
                    height: '65vh', // 네이버지도 세로 길이
                  }}
                  // size={new navermaps.Size(1920, 2000)}
                  defaultCenter={{
                    lat: clubInfo.latitude,
                    lng: clubInfo.longitude,
                  }} // 지도 초기 위치
                  defaultZoom={15} // 지도 초기 확대 배율
                  zoomControl={true}
                  zoomControlOptions={{
                    style: 2,
                    position: 3,
                  }}
                >
                  <Marker
                    key={1}
                    position={{ lat: clubInfo.latitude, lng: clubInfo.longitude }}
                    animation={0}
                  />
                </NaverMap>
              </RenderAfterNavermapsLoaded>
            )}
          </CCol>
          <CCol className="text-center" style={{ padding: '50px 0px 60px 0px' }}>
            <CButton className="app-download-btn-m" onClick={() => this.appdownloadBtnClicked()}>
              바로 예약하기
            </CButton>
          </CCol>
        </CCol>

        <CModal
          alignment="center"
          centered
          visible={this.state.appdownloadModalOpen}
          onClose={() => this.setState({ appdownloadModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '6px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.popupDeleted()}
                  className="btn-close"
                ></CButton>
              </CCol>
              <CCol>
                <CRow>
                  <CCol xs="8">
                    <h6
                      style={{
                        color: '#141414',
                        fontWeight: 600,
                        lineHeight: '24px',
                        fontSize: '18px',
                      }}
                    >
                      편리하게 승마장 정보 얻고,
                      <br />
                      빠른 예약을 원한다면!
                    </h6>
                    <CFormInput
                      style={{ marginTop: '20px' }}
                      className="modal-input"
                      placeholder="휴대전화 번호 입력"
                    />
                  </CCol>
                  <CCol xs="4">
                    <img
                      style={{ textAlign: 'right', right: '6px', position: 'absolute' }}
                      src="img/app-download.png"
                      height="120px"
                    />
                  </CCol>
                </CRow>
              </CCol>

              <CCol style={{ margin: 0, padding: 0, textAlign: 'right', marginTop: '18px' }}>
                <CButton className="modal-input-btn">문자로 다운로드 링크받기</CButton>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
        <MobileFooter />
      </>
    )
  }
}

export default MobileHorseClubPage

MobileHorseClubPage.propTypes = {
  match: {
    params: {
      field1: Number,
      field2: String,
    },
  },
  location: {
    pathname: String,
    search: String,
  },
} // home에서 가져온 파라미터를 쓰기위해 써야함
