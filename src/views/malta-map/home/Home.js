import React, { Component } from 'react'

import {
  CRow,
  CCol,
  CInputGroup,
  CFormInput,
  CButton,
  CImage,
  CModal,
  CModalBody,
} from '@coreui/react'

import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'
import testClubList from './TestClubList'
import OffcanvasFilter from './OffcanvasFilter'
import SnsIcon from './SnsIcon'
import axios from 'axios'
import DefaultURL from '../DefaultURL'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      lat: null,
      long: null,
      isOpen: true,
      questionAddModalOpen: false,
      clubList: null,
      is_selected: false,
      newClubList: [],
      clubAddModalOpen: false,
      userInput: '',
    }
  }

  popupDeleted = () => {
    this.setState({ isOpen: false })
  }

  componentDidMount() {
    this.getLocation()
    this.getClubList()
  }

  handleKeyPress = (event) => {
    // alert(event.target.value + ' / ' + event)
    if (event.key === 'Enter') {
      this.searchBtnClicked(this.state.searchedWords)
    }
  }

  searchBtnClicked = (searchValue) => {
    var clubList = this.state.clubList
    if (searchValue.length > 0) {
      var searchedClubList = []

      for (let index = 0; index < clubList.length; index++) {
        const clubData = clubList[index]
        var nameIndex = clubData.club_name.indexOf(searchValue)
        if (nameIndex >= 0) {
          searchedClubList.push(clubData)
        } else {
          var addressIndex = clubData.address.indexOf(searchValue)
          if (addressIndex >= 0) {
            searchedClubList.push(clubData)
          }
        }
      }
      alert('입력한 정보를 찾을 수 없습니다.')
      this.setState({
        newClubList: clubList,
      })
    } else {
      this.setState({
        newClubList: clubList,
      })
    }
  }
  getLocation() {
    let lat, long

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          lat = position.coords.latitude
          long = position.coords.longitude
          alert('위도 : ' + lat + ' 경도 : ' + long)
        },

        function (error) {
          console.error('getCurretPostion error : ' + error.message)
        },

        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      )
    } else {
      alert('현재 위치를 찾을 수 없습니다.')
      return
    }
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
            clubList: JSON.parse(JSON.stringify(res.data.data.clubList)), //원본 데이터
            newClubList: JSON.parse(JSON.stringify(res.data.data.clubList)), //가공, 지도에 그려줄 데이터
          })
        } else {
          alert('fail')
        }
      })
    // .catch((error) => {
    //   alert('catch error : ' + error)
    // })
  }

  handleReset = () => {
    var input = document.getElementById('searchreset')
    input.value = null
  }

  setNewClubList = (mapitem) => {
    this.handleReset()
    const clubList = this.state.clubList
    let newList = JSON.parse(JSON.stringify(clubList)) //지역변수
    if (mapitem.is_selected == 1) {
      this.setState({
        newClubList: newList,
      })
    } else {
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
  }

  clubModalBtnClicked = (mapitem) => {
    const clubList = this.state.newClubList
    this.setState({
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
            '<div class="img-marker-c"><img src="img/marker1-2.png"/><div row><img class="club-logo" src="' +
            mapitem.club_logo_img_url +
            '"></div><div class="title-marker-c">' +
            '최저 2.5만~<br />' +
            '<span class="club-name">' +
            substrSplit(mapitem.club_name) +
            '</span></div></div>'
          )
        }

        return (
          '<div class="img-marker-c"><img src="img/marker1-2.png"/><div row><img class="club-logo" src="' +
          mapitem.club_logo_img_url +
          '"></div><div class="title-marker-c">' +
          '최저 2.5만~<br />' +
          '<span class="club-name">' +
          substrSplit(mapitem.club_name) +
          '</span></div></div>'
        )
      } else {
        if (mapitem.is_premium == 1) {
          return (
            '<div class="img-marker"><img src="img/marker1-1.png"/><div row><img class="club-logo" src="' +
            mapitem.club_logo_img_url +
            '"></div><div class="title-marker">' +
            '최저 2.5만~<br />' +
            '<span class="club-name-k">' +
            substrSplit(mapitem.club_name) +
            '</span></div></div>'
          )
        }

        return (
          '<div class="img-marker"><img src="img/marker1-1.png"/><div row><img class="club-logo" src="' +
          mapitem.club_logo_img_url +
          '"></div><div class="title-marker">' +
          '최저 2.5만~<br />' +
          '<span class="club-name-k">' +
          substrSplit(mapitem.club_name) +
          '</span></div></div>'
        )
      }
    } else {
      if (mapitem.is_selected == 1) {
        return (
          '<div class="img-marker-0-c"><img src="img/marker2-3_1.png" width="162px"/><img class="club-logo-0" src="img/clublogo-w.png"' +
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

  render() {
    const clubList = this.state.newClubList ? this.state.newClubList : []
    const selectedClub = this.state.selectedClub ? this.state.selectedClub : {}

    return (
      <>
        <CRow className="row-map">
          <CCol className="leftside">
            <CCol className="input-bg">
              <CCol className="side-padding-h">
                <CInputGroup row style={{ margin: '6px 0px' }} align="right">
                  <CCol className="float-right">
                    <CFormInput
                      id="searchreset"
                      type="text"
                      size="lg"
                      placeholder="승마장명 또는 지역명을 입력하세요"
                      className="home-search-input"
                      onChange={(e) => this.setState({ searchedWords: e.target.value })}
                      onKeyPress={(event) => this.handleKeyPress(event)}
                    />
                  </CCol>
                  <CButton
                    onClick={() => this.searchBtnClicked(this.state.searchedWords)}
                    className="my-sm-0 home-search-input-btn-w"
                    type="submit"
                  >
                    <img src="img/search-b.png" width="26px" />
                  </CButton>
                </CInputGroup>
                {/* <CCol style={{ color: '#fff', fontSize: '15px' }}>
                  <CFormCheck id="flexCheckDefault" label="말타 예약 가능 승마장 보기" />
                </CCol> */}
                <CCol className="text-left" xs="12">
                  <OffcanvasFilter />
                  <CButton
                    className={`side-top-btn ${
                      this.state.statusType == 0 ? 'side-top-btn-c' : 'btn-info'
                    }`}
                    onClick={() => this.setState({ statusType: 0 })}
                  >
                    말타 예약 가능 승마장
                  </CButton>
                  <CButton
                    className={`side-top-btn ${
                      this.state.statusType == 1 ? 'side-top-btn-c' : 'btn-info'
                    }`}
                    onClick={() => this.setState({ statusType: 1 })}
                  >
                    외승가능
                  </CButton>
                  <CButton
                    className={`side-top-btn ${
                      this.state.statusType == 2 ? 'side-top-btn-c' : 'btn-info'
                    }`}
                    onClick={() => this.setState({ statusType: 2 })}
                  >
                    예약많은
                  </CButton>
                  <CButton
                    className={`side-top-btn ${
                      this.state.statusType == 3 ? 'side-top-btn-c' : 'btn-info'
                    }`}
                    onClick={() => this.setState({ statusType: 3 })}
                  >
                    리뷰많은
                  </CButton>
                </CCol>
              </CCol>
            </CCol>
            <CCol className="side-padding">
              <CCol xs="12" style={{ paddingTop: '8px', margin: 0 }}>
                <div className="leftside-clublist">
                  {clubList.map((mapitem, mapindex) => (
                    <CCol
                      // className = {mapitem.is_selected?"":""}
                      key={mapindex}
                      onClick={
                        mapitem.club_id
                          ? () => this.clubBtnClicked(mapitem)
                          : () => this.clubModalBtnClicked(mapitem)
                      }
                      style={
                        mapitem.is_selected
                          ? {
                              border: '#85b9ee solid 2px',
                              borderRadius: '8px',
                              backgroundColor: '#f1f7fc',
                              padding: '14px 10px',
                              borderBottom: '1px solid #ebebeb',
                              cursor: 'pointer',
                            }
                          : {
                              padding: '14px 10px',
                              borderBottom: '1px solid #ebebeb',
                              cursor: 'pointer',
                            }
                      }
                    >
                      <CRow>
                        <CCol
                          xs="5"
                          style={{ pading: 0, margin: 0 }}
                          className="board-fixed-image-box"
                        >
                          <CImage
                            className="d-block cover board-fixed-image"
                            src={mapitem.clubImgUrlList ? mapitem.clubImgUrlList[0] : ''}
                            // src="img/horseclub.jpg"
                            width="130px"
                            height="130px"
                            overflow="hidden"
                            display="flex"
                            style={
                              mapitem.club_id
                                ? {}
                                : {
                                    filter: 'brightness(50%)',
                                  }
                            }
                          />
                          {mapitem.club_id ? (
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
                                fontSize: '16px',
                                color: '#fff',
                                top: '55px',
                                left: '33px',
                              }}
                            >
                              미협약 승마장
                            </CCol>
                          )}
                        </CCol>
                        <CCol
                          xs="7"
                          style={{ paddingLeft: '10px', margin: 0, paddingRight: '12px' }}
                        >
                          <h5
                            style={{
                              fontWeight: 500,
                              color: '#141414',
                              paddingTop: '4px',
                            }}
                          >
                            {mapitem.club_name}
                          </h5>
                          <h5
                            style={{
                              color: '#898989',
                              fontSize: '14px',
                              fontWeight: 400,
                            }}
                          >
                            {mapitem.address}
                          </h5>
                          <CCol
                            style={{
                              paddingTop: '18px',
                              marginBottom: 0,
                              paddingBottom: 0,
                            }}
                          >
                            <CRow>
                              <CCol xs="5">
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
                              <CCol xs="7">
                                <h5
                                  style={
                                    mapitem.daily_experience_price
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
                                  {mapitem.daily_experience_price
                                    ? this.numPrice(mapitem.daily_experience_price) + '원~'
                                    : '정보없음'}
                                </h5>
                              </CCol>
                            </CRow>
                            <CRow>
                              <CCol xs="5">
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
                              <CCol xs="7">
                                <h5
                                  style={
                                    mapitem.daily_riding_price
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
                                  {mapitem.daily_riding_price
                                    ? this.numPrice(mapitem.daily_riding_price) + '원~'
                                    : '정보없음'}
                                </h5>
                              </CCol>
                            </CRow>
                          </CCol>
                        </CCol>
                      </CRow>
                    </CCol>
                  ))}
                </div>
              </CCol>
            </CCol>
          </CCol>

          <CCol className="naver-map-custom">
            <CCol className="sns-icon-right">
              <SnsIcon />
            </CCol>

            <RenderAfterNavermapsLoaded
              ncpClientId={'iznrvuky0l'} // 자신의 네이버 계정에서 발급받은 Client ID
              error={<p>Maps Load Error</p>}
            >
              <NaverMap
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                style={{
                  width: '100%', // 네이버지도 가로 길이
                  height: '100%', // 네이버지도 세로 길이
                }}
                // size={new navermaps.Size(1920, 2000)}
                // defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
                defaultZoom={12} // 지도 초기 확대 배율
                zoomControl={true}
                minZoom={9}
                zoomControlOptions={{
                  style: 2,
                  position: 7,
                }}
              >
                {clubList.length > 0 &&
                  clubList.map((mapitem, mapindex) => (
                    <Marker
                      key={mapindex}
                      position={{ lat: mapitem.latitude, lng: mapitem.longitude }}
                      animation={0}
                      title=""
                      onClick={() => this.setNewClubList(mapitem, mapindex)}
                      icon={{
                        // url: './img/marker1-2.png',
                        content: this.mapMarker(mapitem),
                        anchor: { x: 60, y: 90 },
                      }}
                    />
                  ))}
              </NaverMap>
            </RenderAfterNavermapsLoaded>
          </CCol>
        </CRow>
        <CModal
          alignment="center"
          centered
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
                        paddingTop: '4px',
                      }}
                    >
                      {selectedClub.club_name}
                    </h3>
                    <h4
                      style={{
                        color: '#898989',
                        fontSize: '16px',
                        fontWeight: 400,
                      }}
                    >
                      {selectedClub.address}
                    </h4>
                    <h4
                      style={{
                        color: '#898989',
                        fontSize: '16px',
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
                    padding: '20px 40px',
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
        {this.state.isOpen && (
          <CCol className="pop-up">
            <CButton
              onClick={(e) => this.popupDeleted()}
              className="card-header-action btn-close"
            ></CButton>
            <img
              src="img/popup2.jpg"
              alt=""
              width="350px"
              height=""
              style={{ cursor: 'pointer' }}
            />
          </CCol>
        )}
      </>
    )
  }
}

export default Home

function substrSplit(input) {
  if (input.length >= 7) {
    return input.substr(0, 7) + '...'
  }
  return input
}

function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  var R = 6371 // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1) // deg2rad below
  var dLon = deg2rad(lng2 - lng1)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c // Distance in km
  return d
}
