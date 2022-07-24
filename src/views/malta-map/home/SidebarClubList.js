import React, { Component } from 'react'

import { CRow, CCol, CImage } from '@coreui/react'

const clubList = [
  {
    id: 1,
    title: '인덕원승마스쿨',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
  {
    id: 2,
    title: '이후국제승마장',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
  {
    id: 3,
    title: '잠실승마스쿨',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
  {
    id: 4,
    title: '말타승마스쿨',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
  {
    id: 5,
    title: '송파승마스쿨',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
  {
    id: 6,
    title: '강남승마스쿨',
    address: '경기도 고양시 덕양구 흥도로 23',
    today_experience: '44,000원',
    today_riding: '88,000원',
    img: 'img/horseclub.jpg',
  },
]

function clubBtnClicked() {
  document.location.href = '#/horseclubpage'
}

class SidebarClubList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clubList: clubList,
    }
  }

  render() {
    return (
      <>
        {this.state.clubList.map((item, index) => (
          <>
            <CCol
              style={{
                // minWidth: '100%',
                padding: '12px 0px',
                borderBottom: '1px solid #ebebeb',
                cursor: 'pointer',
              }}
              onClick={() => clubBtnClicked()}
            >
              <CRow>
                <CCol xs="5" style={{ pading: 0, margin: 0 }} className="board-fixed-image-box">
                  <CImage
                    className="d-block cover board-fixed-image"
                    src={item.img}
                    width="130px"
                    height="130px"
                    overflow="hidden"
                    display="flex"
                  />
                </CCol>
                <CCol xs="7" style={{ paddingLeft: '2px', margin: 0 }}>
                  <h5
                    style={{
                      fontWeight: 600,
                      color: '#141414',
                      paddingTop: '4px',
                    }}
                  >
                    {item.title}
                  </h5>
                  <h5 style={{ color: '#898989', fontSize: '14px', fontWeight: 400 }}>
                    {item.address}
                  </h5>
                  <CCol
                    style={{
                      paddingTop: '20px',
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
                          style={{
                            fontWeight: 600,
                            color: '#141414',
                            fontSize: '16px',
                            textAlign: 'right',
                          }}
                        >
                          {item.today_experience}~
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
                          style={{
                            fontWeight: 600,
                            color: '#141414',
                            fontSize: '16px',
                            textAlign: 'right',
                          }}
                        >
                          {item.today_riding}~
                        </h5>
                      </CCol>
                    </CRow>
                  </CCol>
                </CCol>
              </CRow>
            </CCol>
          </>
        ))}
      </>
    )
  }
}

export default SidebarClubList
