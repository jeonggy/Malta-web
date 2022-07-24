import React, { Component } from 'react'
import { CRow, CCol, CImage, CModal, CModalBody, CButton } from '@coreui/react'

import axios from 'axios'
import DefaultURL from '../DefaultURL'

class MobileSidebarClubList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clubList: null,
      is_selected: false,
      newClubList: [],
      clubAddModalOpen: false,
    }
  }
  componentDidMount() {
    this.getClubList()
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
    //   alert('catch error : ' + error)
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
    this.props.setListVisible(false)
    const clubList = this.state.newClubList
    this.setState({
      clubAddModalOpen: true,
      selectedClub: mapitem,
    })
  }

  clubBtnClicked = (mapitem) => {
    document.location.href = '#/horseclubpage?club_id=' + mapitem.club_id
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
  numPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  render() {
    const clubList = this.state.newClubList
    const selectedClub = this.state.selectedClub ? this.state.selectedClub : {}
    return (
      <>
        {clubList.map((clubInfo, mapindex) => (
          <CCol
            key={mapindex}
            // onClick={() => clubBtnClicked()}
            style={{
              // minWidth: '100%',
              padding: '12px 0px',
              borderBottom: '1px solid #ebebeb',
              cursor: 'pointer',
            }}
            onClick={
              clubInfo.club_id
                ? () => this.clubBtnClicked(clubInfo)
                : () => this.clubModalBtnClicked(clubInfo)
            }
          >
            <CRow>
              <CCol
                xs="5"
                style={{ padding: '0px 12px', margin: 0 }}
                className="board-fixed-image-box"
              >
                <CImage
                  className="d-block cover board-fixed-image"
                  src={clubInfo.clubImgUrlList ? clubInfo.clubImgUrlList[0] : ''}
                  // src="img/horseclub.jpg"
                  width="130px"
                  height="130px"
                  overflow="hidden"
                  display="flex"
                  style={
                    clubInfo.club_id
                      ? {}
                      : {
                          filter: 'brightness(50%)',
                        }
                  }
                />
                {clubInfo.club_id ? (
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
              <CCol xs="7" style={{ paddingLeft: '0px', margin: 0 }}>
                <h5
                  style={{
                    fontWeight: 700,
                    color: '#141414',
                    paddingTop: '4px',
                    fontSize: '18px',
                  }}
                >
                  {clubInfo.club_name}
                </h5>
                <h5 style={{ color: '#898989', fontSize: '14px', fontWeight: 400 }}>
                  {clubInfo.address}
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
                          clubInfo.daily_experience_price
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
                        {clubInfo.daily_experience_price
                          ? this.numPrice(clubInfo.daily_experience_price) + '원~'
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
                          clubInfo.daily_riding_price
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
                        {clubInfo.daily_riding_price
                          ? this.numPrice(clubInfo.daily_riding_price) + '원~'
                          : '정보없음'}
                      </h5>
                    </CCol>
                  </CRow>
                </CCol>
              </CCol>
            </CRow>
          </CCol>
        ))}
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
                      {selectedClub.phone_number}
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
                  말타와 협약이 되지 않은
                  <br />
                  승마장입니다.
                  <br />
                  승마장으로 문의 바랍니다.
                </h5>
                <CCol className="text-center" style={{ padding: '10px 0px' }}>
                  <CButton className="terms-btn-modal" onClick={() => this.termsBtnClicked()}>
                    파트너스 문의
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

export default MobileSidebarClubList

MobileSidebarClubList.propTypes = {
  setListVisible: Function,
} // 부모에게 가져온 파라미터를 쓰기위해 써야함 (함수를 받을 것이다 라는 걸 알려줌)
