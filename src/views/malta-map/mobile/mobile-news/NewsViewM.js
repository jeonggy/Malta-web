import React, { Component } from 'react'

import { CRow, CCol, CButton, CImage } from '@coreui/react'
import MobileFooter from '../../../../components/MobileFooter'
import MobileHeader from '../../../../components/MobileHeader'

class NewsViewM extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
    }
  }

  newslistBtnClicked = () => {
    document.location.href = '#/news'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  render() {
    return (
      <>
        <MobileHeader />
        <CCol style={{ padding: '40px 20px' }}>
          <CCol className="text-left">
            <p style={{ fontWeight: 400, color: '#a3a3a3', fontSize: '16px' }}>말타뉴스</p>

            <h2
              style={{
                fontWeight: 700,
                color: '#141414',
                display: 'inline-block',
                paddingBottom: '30px',
                fontSize: '30px',
                lineHeight: '36px',
              }}
            >
              한국마사회와 업무협약 체결
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
                fontSize: '16px',
                letterSpacing: '-.4px',
                paddingBottom: '30px',
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
            </p>
          </CCol>
          <CCol className="text-center">
            <CButton onClick={() => this.newslistBtnClicked()} className="news-list-btn-m">
              목록
            </CButton>
          </CCol>
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

export default NewsViewM
