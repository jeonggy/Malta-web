import React, { Component } from 'react'
import {
  CRow,
  CCol,
  CButton,
  CModal,
  CModalBody,
  COffcanvas,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  CImage,
} from '@coreui/react'

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import testClubList from '../home/TestClubList'
import MobileOffcanvas from './MobileOffcanvas'
import MobileOffcanvasFilter from './MobileOffcanvasFilter'
import MobileHeaderHome from '../../../components/MobileHeaderHome'
import axios from 'axios'
import DefaultURL from '../DefaultURL'

function substrSplit(input) {
  if (input.length >= 7) {
    return input.substr(0, 7) + '...'
  }
  return input
}
function setScreenSize() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
setScreenSize()
window.addEventListener('resize', setScreenSize)

class MobileHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      lat: null,
      long: null,
      questionAddModalOpen: false,
      mapCenter: { lat: 37.554722, lng: 126.970833 },
      clubList: null,
      is_selected: false,
      newClubList: [],
      visible: false,
      clubAddModalOpen: false,
    }
  }

  componentDidMount() {
    // this.getLocation()
    this.getClubList()
  }

  getLocation() {
    let lat, long

    if (navigator.geolocation) {
      // GPS를 지원하면
      // alert('GPS를 지원')
      navigator.geolocation.getCurrentPosition(
        function (position) {
          lat = position.coords.latitude
          long = position.coords.longitude
          alert('위도 : ' + lat + ' 경도 : ' + long)
        },

        // function onSuccessGeolocation(position) {
        //   var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude)

        //   map.setCenter(location) // 얻은 좌표를 지도의 중심으로 설정합니다.
        //   map.setZoom(10) // 지도의 줌 레벨을 변경합니다.

        //   infowindow.setContent(
        //     '<div style="padding:20px;">' + 'geolocation.getCurrentPosition() 위치' + '</div>',
        //   )

        //   infowindow.open(map, location)
        //   console.log('Coordinates: ' + location.toString())
        // },

        function (error) {
          console.error('getCurretPostion error : ' + error.message)
        },

        // function onErrorGeolocation() {
        //   var center = map.getCenter()

        //   infowindow.setContent(
        //     '<div style="padding:20px;">' +
        //       '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        //       'latitude: ' +
        //       center.lat() +
        //       '<br />longitude: ' +
        //       center.lng() +
        //       '</div>',
        //   )

        //   infowindow.open(map, center)
        // },

        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      )
    } else {
      // alert('GPS를 지원하지 않습니다')
      return
    }
    //   $(window).on("load", function() {
    //     if (navigator.geolocation) {
    //         /**
    //          * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
    //          * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
    //          * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
    //          */
    //         navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
    //     } else {
    //         var center = map.getCenter();
    //         infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
    //         infowindow.open(map, center);
    //     }
    // });
  }

  infoBtnClicked = () => {
    this.setState({
      questionAddModalOpen: true,
    })
  }
  getClubList = () => {
    axios
      .get(DefaultURL() + 'club/public/list', {
        params: {
          access_token2: '',
          user_id: '',
        },
      })
      .then((res) => {
        if (res.data.status === 1) {
          // alert(JSON.stringify(res.data.data.clubList))
          this.setState({
            clubList: res.data.data.clubList, //원본 데이터
            newClubList: res.data.data.clubList, //가공, 지도에 그려줄 데이터
          })
        } else {
          alert('fail')
        }
      })
    // .catch((error) => {
    //   alert('error : ' + error)
    // })
  }

  setNewClubList = (mapitem) => {
    const clubList = this.state.clubList
    let newList = JSON.parse(JSON.stringify(clubList)) //지역변수

    var mapindex = 0
    for (let index = 0; index < newList.length; index++) {
      const element = newList[index]
      if (element.club_name == mapitem.club_name) {
        mapindex = index
      }
      element.is_selected = 0
    }
    mapitem.is_selected = 1 //인자로 받은 객체(클럽 데이터)의 is selected 1로 변경
    newList.splice(mapindex, 1) //splice (선택된 위치에서 1개 제거)
    newList.unshift(mapitem) //unshift (0번쨰로 추가)
    this.setState({
      newClubList: newList, //변형을 일으킨 후 setstate로 저장시킨다 (그러면 전역함수로 다른곳에서 쓰일 수 있음)
    })
  }
  clubModalBtnClicked = (mapitem) => {
    const clubList = this.state.newClubList
    this.setState({
      visible: false,
      clubAddModalOpen: true,
      selectedClub: mapitem,
    })
  }

  mapMarker = (mapitem) => {
    if (mapitem.club_id) {
      //프리미엄 승마장
      if (mapitem.is_selected == 1) {
        if (mapitem.is_premium == 1) {
          return (
            '<div class="img-marker-c"><img src="img/marker2-2.png"/><img class="club-logo-m" src="' +
            mapitem.club_logo_img_url +
            '"></div><div class="title-marker-c">' +
            substrSplit(mapitem.club_name) +
            '</div></div>'
          )
        }

        return (
          '<div class="img-marker-c"><img src="img/marker2-1.png"/><img class="club-logo-m" src="' +
          mapitem.club_logo_img_url +
          '"></div><div class="title-marker-c">' +
          substrSplit(mapitem.club_name) +
          '</div></div>'
        )
      } else {
        if (mapitem.is_premium == 1) {
          return (
            '<div class="img-marker"><img src="img/marker1-2.png"/><img class="club-logo-m" src="' +
            mapitem.club_logo_img_url +
            '"></div><div class="title-marker">' +
            substrSplit(mapitem.club_name) +
            '</div></div>'
          )
        }

        return (
          '<div class="img-marker"><img src="img/marker1-1_1.png" width="78px" /><img class="club-logo-m" src="' +
          mapitem.club_logo_img_url +
          '"></div></div>'
        )
      }
    } else {
      if (mapitem.is_selected == 1) {
        return (
          '<div class="img-marker-0-c"><img src="img/marker2-3.png"/><img class="club-logo-0" src="img/clublogo-g.png"' +
          mapitem.club_logo_img_url +
          '"></div><div class="title-marker-0-c">' +
          substrSplit(mapitem.club_name) +
          '</div></div>'
        )
      } else {
        return (
          '<div class="img-marker-0"><img src="img/marker1-0_1.png" width="40px"/><img class="club-logo-0-1" src="img/clublogo-g.png"' +
          mapitem.club_logo_img_url +
          '"></div></div>'
        )
      }
    }
  }
  clubBtnClicked = (mapitem) => {
    var href = '#/horseclubpage?club_id=' + mapitem.club_id
    if (mapitem.daily_experience_price) {
      href = href + '&daily_experience_price=' + mapitem.daily_experience_price
    }

    if (mapitem.daily_riding_price) {
      href = href + '&daily_riding_price=' + mapitem.daily_riding_price
    }

    document.location.href = href

    window.scrollTo(0, 0)
  }
  numPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  visibleFalse = () => {
    this.setState({ visible: false })
  }
  render() {
    const clubList = this.state.newClubList ? this.state.newClubList : testClubList
    const selectedClub = this.state.selectedClub ? this.state.selectedClub : {}
    return (
      <>
        <CCol className="naver-map-custom-mobile">
          <CCol className="input-bg-m">
            <MobileHeaderHome setTogglerVisible={this.visibleFalse} />
            <CRow className="row-st-non">
              <CCol className="text-left main-btn-top">
                <MobileOffcanvasFilter />
                <CButton
                  className="side-top-btn-m"
                  onClick={() => this.setState({ statusType: 0 })}
                >
                  말타 예약 가능 승마장
                </CButton>
                <CButton
                  className="side-top-btn-m"
                  onClick={() => this.setState({ statusType: 1 })}
                >
                  외승가능
                </CButton>
                <CButton
                  className="side-top-btn-m"
                  onClick={() => this.setState({ statusType: 2 })}
                >
                  예약많은
                </CButton>
                <CButton
                  className="side-top-btn-m"
                  onClick={() => this.setState({ statusType: 3 })}
                >
                  리뷰많은
                </CButton>
              </CCol>
            </CRow>
          </CCol>

          <CCol>
            <MobileOffcanvas />
          </CCol>

          <RenderAfterNavermapsLoaded
            ncpClientId={'iznrvuky0l'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
          >
            <NaverMap
              mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
              style={{
                width: '100%', // 네이버지도 가로 길이
                height: 'calc(var(--vh, 1vh) * 100)', //'100vh', // 네이버지도 세로 길이
              }}
              // size={new navermaps.Size(window.innerWidth, window.innerHeight)}
              defaultCenter={this.state.mapCenter} // 지도 초기 위치
              defaultZoom={10} // 지도 초기 확대 배율
              zoomControl={true}
              zoomControlOptions={{
                style: 2,
                position: 8,
              }}
            >
              {clubList.map((mapitem, mapindex) => (
                <Marker
                  key={mapindex}
                  position={{ lat: mapitem.latitude, lng: mapitem.longitude }}
                  title=""
                  animation={0}
                  onClick={() => this.setState({ visible: true, selectedClubInfo: mapitem })}
                  icon={{
                    content: this.mapMarker(mapitem),
                    anchor: { x: 60, y: 90 },
                  }}
                />
              ))}
            </NaverMap>
          </RenderAfterNavermapsLoaded>
        </CCol>

        <COffcanvas
          className="offcanvas-club-back"
          placement="bottom"
          backdrop={false}
          visible={this.state.visible}
          onHide={() => this.setState({ visible: false })}
        >
          {this.state.selectedClubInfo && (
            <>
              <COffcanvasHeader style={{ padding: '20px 16px 0px 16px' }}>
                <CCloseButton
                  className="text-reset offcanvas-main-bottom-close"
                  onClick={() => this.setState({ visible: false })}
                />
              </COffcanvasHeader>
              <COffcanvasBody>
                <CCol
                  key={clubList}
                  onClick={
                    this.state.selectedClubInfo.club_id
                      ? () => this.clubBtnClicked(this.state.selectedClubInfo)
                      : () => this.clubModalBtnClicked(this.state.selectedClubInfo)
                  }
                  style={{
                    // minWidth: '100%',
                    padding: '6px 0px',
                    cursor: 'pointer',
                  }}
                >
                  <CRow>
                    <CCol xs="5" style={{ pading: 0, margin: 0 }} className="board-fixed-image-box">
                      <CImage
                        className="d-block cover board-fixed-image"
                        src={
                          this.state.selectedClubInfo.clubImgUrlList
                            ? this.state.selectedClubInfo.clubImgUrlList[0]
                            : ''
                        }
                        // src="img/horseclub.jpg"
                        width="130px"
                        height="130px"
                        overflow="hidden"
                        display="flex"
                        style={
                          this.state.selectedClubInfo.club_id
                            ? {}
                            : {
                                filter: 'brightness(50%)',
                              }
                        }
                      />
                      {this.state.selectedClubInfo.club_id ? (
                        <CCol
                          style={{
                            zIndex: 1000,
                            position: 'absolute',
                            fontSize: '13px',
                            color: '#FFE000',
                            backgroundColor: 'rgba(0,0,0,.5)',
                            padding: '2px 4px',
                            borderRadius: '0px 6px 6px 0px',
                            top: '6px',
                            left: '11px',
                          }}
                        >
                          ★ 빠른예약
                        </CCol>
                      ) : (
                        <CCol
                          style={{
                            zIndex: 1000,
                            position: 'absolute',
                            fontSize: '14px',
                            color: '#fff',
                            top: '54px',
                            left: '38px',
                          }}
                        >
                          미협약 승마장
                        </CCol>
                      )}
                    </CCol>
                    <CCol xs="7" style={{ paddingLeft: '2px', margin: 0 }}>
                      <h5
                        style={{
                          fontWeight: 700,
                          color: '#141414',
                          paddingTop: '4px',
                          fontSize: '18px',
                        }}
                      >
                        {this.state.selectedClubInfo.club_name}
                      </h5>
                      <h5 style={{ color: '#898989', fontSize: '14px', fontWeight: 400 }}>
                        {this.state.selectedClubInfo.address}
                      </h5>
                      <CCol
                        style={{
                          paddingTop: '16px',
                          marginBottom: 0,
                          paddingBottom: 0,
                        }}
                      >
                        <CRow>
                          <CCol>
                            <h5
                              style={{
                                fontWeight: 400,
                                color: '#898989',
                                fontSize: '14px',
                                textAlign: 'left',
                              }}
                            >
                              1일 체험
                            </h5>
                          </CCol>
                          <CCol>
                            <h5
                              style={
                                this.state.selectedClubInfo.daily_experience_price
                                  ? {
                                      fontWeight: 600,
                                      color: '#141414',
                                      fontSize: '16px',
                                      textAlign: 'right',
                                    }
                                  : {
                                      fontWeight: 400,
                                      color: '#c0c0c0',
                                      fontSize: '14px',
                                      textAlign: 'right',
                                    }
                              }
                            >
                              {this.state.selectedClubInfo.daily_experience_price
                                ? this.numPrice(
                                    this.state.selectedClubInfo.daily_experience_price,
                                  ) + '원~'
                                : '정보없음'}
                            </h5>
                          </CCol>
                        </CRow>
                        <CRow>
                          <CCol>
                            <h5
                              style={{
                                fontWeight: 400,
                                color: '#898989',
                                fontSize: '14px',
                                textAlign: 'left',
                              }}
                            >
                              1일 기승
                            </h5>
                          </CCol>
                          <CCol>
                            <h5
                              style={
                                this.state.selectedClubInfo.daily_riding_price
                                  ? {
                                      fontWeight: 600,
                                      color: '#141414',
                                      fontSize: '16px',
                                      textAlign: 'right',
                                    }
                                  : {
                                      fontWeight: 400,
                                      color: '#c0c0c0',
                                      fontSize: '14px',
                                      textAlign: 'right',
                                    }
                              }
                            >
                              {this.state.selectedClubInfo.daily_riding_price
                                ? this.numPrice(this.state.selectedClubInfo.daily_riding_price) +
                                  '원~'
                                : '정보없음'}
                            </h5>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CCol>
                  </CRow>
                </CCol>
              </COffcanvasBody>
            </>
          )}
        </COffcanvas>

        <CModal
          className="home-modal"
          alignment="center"
          centered
          visible={this.state.questionAddModalOpen}
          onClose={() => this.setState({ questionAddModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '6px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.setState({ questionAddModalOpen: false })}
                  className="btn-close"
                ></CButton>
              </CCol>
              <CCol className="text-left" style={{ paddingBottom: '20px' }}>
                <h4
                  className="highlight"
                  style={{
                    color: '#141414',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: '30px',
                    fontSize: '26px',
                  }}
                >
                  말타는
                  <br />
                  이런 프로그램이 있어요!
                </h4>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
                    <img
                      src="img/small-menu-icon-1.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      체험프로그램
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  간식주기, 말타기(평균 5~20분)를 통해 말과 친해질 수 있는
                  <br />
                  프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
                    <img
                      src="img/small-menu-icon-2.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      1일 기승
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  1타임(평균 40~50분) 승마수업을 받아볼 수 있는 프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
                    <img
                      src="img/small-menu-icon-3.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      쿠폰프로그램
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  횟수별 쿠폰을 구매하여 유효기간 내 원하는 시기에 승마를 이용하는 프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  marginBottom: '12px',
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
                    <img
                      src="img/small-menu-icon-4.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      월회원/연회원
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  승마시설에 월/년 단위로 회비를 내고 정기적으로 이용하는
                  <br />
                  프로그램
                </p>
              </CCol>
              <CCol
                style={{
                  padding: '10px 20px 2px 26px',
                  backgroundColor: '#f8f8f8',
                  borderRadius: '10px',
                }}
              >
                <CRow>
                  <CCol xs="1" style={{ margin: 0, padding: 0, marginRight: '10px' }}>
                    <img
                      src="img/small-menu-icon-5.png"
                      alt=" "
                      width="24px"
                      style={{ paddingTop: '4px' }}
                    />
                  </CCol>
                  <CCol xs="9" style={{ margin: 0, padding: 0 }}>
                    <h6
                      style={{
                        fontSize: '16px',
                        paddingTop: '8px',
                        textAlign: 'left',
                        fontWeight: 700,
                        color: '#141414',
                      }}
                    >
                      자마회원
                    </h6>
                  </CCol>
                </CRow>
                <p
                  style={{
                    color: '#141414',
                    fontWeight: 300,
                    fontSize: '15px',
                    paddingLeft: '23px',
                  }}
                >
                  개인 소유의 말을 승마시설에 위탁하여 정기적으로 이용하는
                  <br />
                  프로그램
                </p>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
        <CModal
          className="home-modal"
          alignment="center"
          centered
          backdrop
          visible={this.state.clubAddModalOpen}
          onClose={() => this.setState({ clubAddModalOpen: false })}
        >
          <CModalBody>
            <CCol style={{ padding: '6px' }}>
              <CCol style={{ margin: 0, padding: 0, textAlign: 'right' }}>
                <CButton
                  style={{ bottom: 'none', right: '14px', border: 'none', top: '14px' }}
                  onClick={() => this.setState({ clubAddModalOpen: false })}
                  className="btn-close"
                ></CButton>
              </CCol>
              {selectedClub && (
                <>
                  <CCol className="text-left" style={{ paddingBottom: '20px' }}>
                    <h3
                      style={{
                        fontWeight: 500,
                        color: '#141414',
                        fontSize: '20px',
                      }}
                    >
                      {selectedClub.club_name}
                    </h3>
                    <h4
                      style={{
                        color: '#898989',
                        fontSize: '15px',
                        fontWeight: 400,
                      }}
                    >
                      {selectedClub.address}
                    </h4>
                    <h4
                      style={{
                        color: '#898989',
                        fontSize: '15px',
                        fontWeight: 400,
                      }}
                    >
                      02-123-1234
                    </h4>
                  </CCol>
                </>
              )}
              <CCol className="text-center">
                <h5
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    backgroundColor: '#F8F9FA',
                    display: 'inline-block',
                    padding: '20px 26px',
                    borderRadius: '10px',
                  }}
                >
                  말타와 협약이 되지 않은 승마장입니다.
                  <br />
                  승마장으로 문의 바랍니다.
                </h5>
                <CCol className="text-center" style={{ padding: '10px 0px' }}>
                  <CButton className="terms-btn-modal" onClick={() => this.termsBtnClicked()}>
                    닫기
                  </CButton>
                </CCol>
              </CCol>
            </CCol>
          </CModalBody>
        </CModal>
      </>
    )
  }
}

export default MobileHome
