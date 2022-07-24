import React, { Component } from 'react'

import {
  CCol,
  CContainer,
  CInputGroup,
  CFormInput,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CBadge,
  CAccordionBody,
} from '@coreui/react'
import ServiceFooter from '../malta-app-service/servicefooter/ServiceFooter'

const faqlist = [
  //type 0:예약 1:내정보 2:매니저 3:기타
  {
    id: 1,
    type: 0,
    category: '예약',
    title: '예약은 어떻게 하나요?',
    explanation:
      '말타 앱 회원가입 또는 로그인 후 하단 클럽 검색 탭에서 말타 파트너 승마장을 비교해보고\n프로그램을 선택하여 원하시는 날짜 시간으로 예약신청을 하실 수 있습니다.\n예약 신청 후 승마장에서 예약 확정까지 완료 결과 확인 후 방문하여 이용해 주세요.\n\n* 운영시간이 지났거나 휴무일에 예약하실 경우 예약 확정이 늦어질 수 있습니다.',
  },
  {
    id: 2,
    type: 0,
    category: '예약',
    title: '예약을 취소하고 싶어요',
    explanation:
      '말타 앱 하단 “예약내역” 화면에서 취소하시고자 하는 예약을 선택하여 예약취소 버튼을 눌러주시면 됩니다.\n승마장 별 취소규정에 따라 쿠폰차감 또는 취소수수료가 발생할 수 있습니다.',
  },
  {
    id: 3,
    type: 0,
    category: '예약',
    title: '예약 현황을 확인하고 싶어요',
    explanation:
      '말타 앱 하단 “예약내역“ 화면에서 현재까지의 예약 현황을 확인하실 수 있습니다.\n실시간 확인은 화면을 아래로 슬라이드하여 새로고침 후 확인해주세요.',
  },
  {
    id: 4,
    type: 1,
    category: '내정보',
    title: '현재 위치를 변경할 수 있나요?',
    explanation:
      '말타 앱 하단 “내정보” 화면에서 지역설정 - 설정한위치기준 으로 현재 위치를 변경하여 이용하실 수 있습니다.',
  },
  {
    id: 5,
    type: 3,
    category: '기타',
    title: '승마장에 남긴 문의사항은 어디서 확인할 수 있나요?',
    explanation:
      '말타 앱 하단 “내정보” 화면에서 “클럽 문의내역”을 통해 승마장별 남기신 문의사항과 답변사항을 확인하실 수 있습니다.',
  },
  {
    id: 6,
    type: 1,
    category: '내정보',
    title: '전화번호 또는 이름 변경은 어떻게 하나요?',
    explanation:
      '말타 앱 하단 “내정보” 화면에서 우측 상단 “프로필 수정” 또는 “계정 관리”를 통해 이름, 성별, 생년월일, 전화번호 등 기본정보를 변경하실 수 있습니다.',
  },
  {
    id: 7,
    type: 1,
    category: '내정보',
    title: '아이디/비밀번호를 잃어버렸어요!',
    explanation:
      '말타 앱 로그인 화면에서 “아이디/비밀번호 찾기”를 통해 기존에 가입하셨던 계정을 확인하실 수 있습니다.',
  },
  {
    id: 8,
    type: 1,
    category: '내정보',
    title: '비밀번호를 변경하고 싶어요',
    explanation:
      '말타 앱 하단 “내정보” 화면에서 비밀번호 변경을 하실 수 있습니다.\n네이버, 카카오톡 등 소셜 로그인을 이용하신 경우 비밀번호 변경은 불가합니다.',
  },
  {
    id: 9,
    type: 3,
    category: '기타',
    title: '요금/프로그램 등이 달라요',
    explanation:
      '말타에서는 보다 정확한 정보를 확인하실 수 있도록 노력하고 있으나 간혹 잘못된 이용 정보가 발생하는 경우가 있습니다.\n카카오채널 ‘말타‘ 또는 이메일(help@luxspo.com)을 통해 공유해주시면 보다 빠르게 정보 확인 후 반영될 수 있도록 하겠습니다.',
  },
  {
    id: 10,
    type: 3,
    category: '기타',
    title: '기존에 쿠폰/월/자마회원으로 이용하고 있던 회원도 말타 사용 가능한가요?',
    explanation:
      '말타 빠른예약 승마장은 기존 회원분들도 말타를 통해 예약하고 쿠폰관리까지 이용하실 수 있습니다.\n협약 승마장을 통해 이용료 결제 후 말타로 프로그램에 대한 쿠폰을 발급받으신 경우 별도의 일정 체크 없이 말타에서 예약과 연동되어\n기승전날 알림, 쿠폰 횟수 및 유효기간을 자동으로 이용/확인하실 수 있습니다.',
  },
  {
    id: 11,
    type: 1,
    category: '내정보',
    title: '회원 탈퇴는 어떻게 하나요?',
    explanation:
      '말타 앱 하단 “내정보” 화면에서 우측 상단 “프로필 수정” 또는 “계정 관리” 화면 하단 “회원탈퇴”를 통해 진행하실 수 있습니다.\n말타에 대한 불편사항이 있으시다면 카카오채널 ‘말타‘ 또는 이메일 (help@luxspo.com)을 통해 좋은 의견 부탁드리겠습니다.',
  },
  {
    id: 12,
    type: 0,
    category: '예약',
    title: '예약 가능한 가까운 승마장이 없어요',
    explanation:
      '말타 파트너 희망 승마장은 카카오채널 ‘말타‘ 또는 이메일 (help@luxspo.com)을 통해 요청해주시면\n추후 말타를 통해 이용해보실 수 있도록 하겠습니다.\n현재 기승하고 있는 승마장에 말타의 도입을 희망하시는 회원님이 있으시다면 제보해주세요.\n말타 도입을 위해 최선을 다해보도록 하겠습니다 :)',
  },
  {
    id: 13,
    type: 2,
    category: '매니저',
    title: '말타 앱이 두 개인데 어떤 차이인가요?',
    explanation:
      '말타는 회원용 앱인 “말타”와 승마장용 앱인 “말타 매니저” 두 가지로 나뉘어 있으며,\n승마장 관리자 및 코치분들은 말타 매니저 앱을 이용하여 예약 /회원/마필관리까지 모두 이용하실 수 있습니다.',
  },
  {
    id: 14,
    type: 2,
    category: '매니저',
    title: '말타에 승마장을 등록하고 싶어요',
    explanation:
      '승마장 협약 관련 사항은 홈페이지 하단 “파트너스 문의” 또는\n채팅상담 을 통해 문의주시면 친절하게 등록 안내드리도록 하겠습니다.',
  },
  {
    id: 15,
    type: 2,
    category: '매니저',
    title: '체험 후에 결정하고 싶어요',
    explanation:
      '말타 매니저앱 이용은 별도로 발급되는 계정이 필요하기 때문에 홈페이지 하단 “파트너스 문의” 또는\n채팅상담을 통해 체험 요청 문의주시면 안내드리도록 하겠습니다.',
  },
  {
    id: 16,
    type: 2,
    category: '매니저',
    title: '기존에 사용하던 회원들의 데이터도 이어서 사용 할 수 있나요?',
    explanation:
      '기존회원의 경우 말타 회원앱 회원가입 후 예약/기승권 사용이 가능하며,\n이전에 사용하던 기승권에 대한 정보 이관도 가능합니다.\n자세한 사항은 말타에 문의주시면 안내 도와드리겠습니다.',
  },
]

/*
우선 전체보기인경우 this.state.statusType==0일때는 바로 noticeList를 리턴해준다.

빈 배열을 만들 후 (var newList = [])
기본 리스트(noticeList)를 반복문을 돌려서 하나하나 확인을 해서 
this.state.statusType의 값에 맞는 하나의 객체 (noticeList의 각 객체)의 type값에 따라 
새로 만든 배열(newList)에 값을 넣어주고
반복문을 다 돌린 후에 새로 만든 배열을 리턴해줘야한다.
*/

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      faqlist: faqlist,
      type: faqlist.type,
      statusType: 0,
    }
  }
  tableVisibleData = () => {
    let list = JSON.parse(JSON.stringify(faqlist)) // 새로운 배열을 만들어줌 (기존 배열이 수정되지 않게 하기 위해서)

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
      }
    }
    // alert(JSON.stringify(newList));

    //선택된 페이지 넘버에 맞는 데이터를 뽑아서 내려주는 작업이 필요

    return newList
  }

  finalVisibleData = () => {
    var categoryData = this.tableVisibleData()

    for (let index = 0; index < categoryData.length; index++) {
      const element = categoryData[index]
    }
  }

  // pageNumber = () => {
  //   var list = this.tableVisibleData()
  //   var numberPerPage = 10

  // }

  render() {
    return (
      <>
        <CContainer className="container-center">
          <CCol className="text-center">
            <h2
              style={{
                fontWeight: 500,
                color: '#141414',
                fontSize: '48px',
                paddingTop: '90px',
              }}
            >
              FAQ
            </h2>
          </CCol>
          <CCol className="text-center" style={{ paddingTop: '6px' }}>
            <p style={{ fontSize: '18px' }}>
              말타 이용하실 때<br />
              궁금하신 점이 있으셨나요?
            </p>
          </CCol>
          <CCol className="text-center" xs="12" style={{ paddingTop: '60px' }}>
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
              예약
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 2 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 2 })}
            >
              내정보
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 3 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 3 })}
            >
              매니저
            </CButton>
            <CButton
              xs="3"
              className={`c-btn-w ${this.state.statusType == 4 ? 'btn-outline-info' : 'btn-info'}`}
              onClick={() => this.setState({ statusType: 4 })}
            >
              기타
            </CButton>
          </CCol>

          <CCol style={{ marginTop: '40px', marginBottom: '80px' }}>
            <CInputGroup row style={{ marginBottom: '16px' }} align="right">
              <CCol xs="3" className="float-right text-right">
                <CFormInput className="search-input" placeholder="검색어를 입력해주세요" />
              </CCol>
              <CButton color="light" type="submit" className="search-input-btn">
                <img src="img/search.png" width="30px" />
              </CButton>
            </CInputGroup>
            <CCol>
              {this.state.statusType == 0 && acc(this.tableVisibleData())}
              {this.state.statusType == 1 && acc(this.tableVisibleData())}
              {this.state.statusType == 2 && acc(this.tableVisibleData())}
              {this.state.statusType == 3 && acc(this.tableVisibleData())}
              {this.state.statusType == 4 && acc(this.tableVisibleData())}
            </CCol>

            {/* <CPagination
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
              <CPaginationItem active>1</CPaginationItem>
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
            </CPagination> */}
          </CCol>
        </CContainer>
        <ServiceFooter />
      </>
    )
  }
}
function acc(data) {
  return (
    <CAccordion flush>
      {data.map((item, index) => (
        <CAccordionItem key={item.name} itemKey={item.id}>
          <CAccordionHeader className="f-s-w">
            <CBadge
              style={{
                padding: 0,
                margin: 0,
                backgroundColor: 'none',
                color: '#888',
                fontWeight: 300,
                paddingRight: '26px',
                paddingBottom: '4px',
              }}
            >
              [{item.category}]
            </CBadge>

            {item.title}
          </CAccordionHeader>
          <CAccordionBody style={{ padding: '16px 100px 50px 100px' }}>
            {item.explanation}
          </CAccordionBody>
        </CAccordionItem>
      ))}
    </CAccordion>
  )
}

export default Faq
