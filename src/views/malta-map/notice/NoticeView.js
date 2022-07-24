import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage, CContainer } from '@coreui/react'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'

class NoticeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  noticelistBtnClicked = () => {
    document.location.href = '#/notice'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <CContainer className="container-news1" style={{ paddingTop: '90px' }}>
          <CCol className="text-left">
            <p
              style={{
                fontWeight: 400,
                color: '#a3a3a3',
                marginBottom: '2px',
                fontSize: '18px',
              }}
            >
              업데이트 | 2022.12.12
            </p>
          </CCol>
          <CCol className="text-left">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                display: 'inline-block',
                paddingBottom: '80px',
                fontSize: '48px',
                lineHeight: '68px',
              }}
            >
              말타 꽃단장 대규모 업데이트
            </h2>
          </CCol>
          <CCol>
            <CImage
              className="d-block w-100 cover"
              src="/img/news1-4.jpg"
              alt="slide 1"
              Width="auto"
              overflow="hidden"
              display="flex"
            />
          </CCol>
          <CCol style={{ borderBottom: '0.5px solid #e4e4e4' }}>
            <p
              style={{
                paddingTop: '40px',
                lineHeight: '28px',
                color: '#444',
                fontSize: '18px',
                letterSpacing: '-.4px',
                paddingBottom: '90px',
              }}
            >
              경진대회는 농식품 분야 공공·빅데이터를 활용한 아이디어와 비즈니스 모델 발굴을 목적으로
              진행하고 있다. 농식품부는 농림축산식품 공공데이터 포털에 528종의 공공데이터를 개방하고
              있으며 이를 활용한 새 서비스 개발을 추진 중이다.
              <br />
              <br />
              올해는 △제품 및 서비스 개발 △공공데이터 활용 아이디어 기획 △팜맵(고해상 항공
              위성영상을 활용한 농경지 전자 지도) 활용 아이디어 기획 3개 부문으로 진행했다.
              공모전에는 총 118개팀이 접수해 약 7대 1의 경쟁률을 기록했다.
              <br />
              <br />
              제품 및 서비스 개발부문은 ‘투뿔메이커’팀이 대상(농식품부 장관상·상금 1000만원)을
              받았다. 이 팀은 개체등록·유전·환경정보 등을 접목한 빅데이터 분석으로 축산농가의 송아지
              입식을 판단할 수 있는 ‘우시장 플러스’ 서비스를 개발했다. 해당 서비스는 완성도와 성장
              가능성에서 높은 점수를 받았다.
              <br />
              <br />
              최우수상(산림청장상·상금 500만원)은 승마클럽 위치·마필·코치 등의 정보를 제공하고
              예약·결제가 가능한 서비스(말타)를 개발한 김아라씨가 선정됐다.
              <br />
              <br />
              스마트폰으로 사과를 촬영하면 당도와 농산물 표준규격 등급을 알려주는 앱을 개발한
              ‘달당’팀이 공동 최우수상(농진청장상·상금 500만원)을 수상해다.
              <br />
              <br />
              공공데이터 아이디어 기획 부문 대상(농식품부 장관상·상금 500만원)은 ‘FREE PLS’팀이
              수상했다. 생산단계 잔류 농약 허용기준(PLS)에 맞춰 적시에 적정량의 농약을 살포하도록
              정보를 제공하는 아이디어가 높은 평가를 받았다.
              <br />
              <br />
              팜맵 부문 대상(농식품부 장관상·상금 500만원)은 유통 플랫폼 구축 아이디어를 제시한
              박진우씨가 받았다. 박씨는 농산물 촬영 장소의 위치확인시스템(GPS) 정보와 농업경영체
              정보를 팜맵 기반으로 연계해 지리적 표시 제품을 제공했다.
            </p>
          </CCol>
        </CContainer>
        <CCol className="text-center">
          <CButton onClick={() => this.noticelistBtnClicked()} className="news-list-btn">
            목록
          </CButton>
        </CCol>
        <CContainer style={{ paddingTop: '50px', paddingBottom: '90px' }}>
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

export default NoticeView
