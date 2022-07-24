import { React, useState } from 'react'
import {
  COffcanvas,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
  COffcanvasTitle,
  CButton,
  CCol,
  CRow,
} from '@coreui/react'
import MobileSidebarClubList from './MobileSidebarClubList'
import MobileOffcanvasFilter from './MobileOffcanvasFilter'

const MobileOffcanvas = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton className="offcanvas-main-bottom" onClick={() => setVisible(true)}>
        승마장 리스트 보기
      </CButton>
      <COffcanvas
        className="offcanvas-main-bottom-back-m"
        placement="end"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <COffcanvasHeader style={{ paddingBottom: '10px' }}>
          <CRow>
            <CRow>
              <COffcanvasTitle style={{ color: '#141414', fontSize: '18px' }}>
                승마장 리스트
              </COffcanvasTitle>
            </CRow>
            <CRow>
              <CCol xs="12" style={{ paddingTop: '8px' }}>
                <MobileOffcanvasFilter />
                <CButton className="side-top-btn-m-list">말타 예약 가능 승마장</CButton>
                <CButton className="side-top-btn-m-list">외승가능</CButton>
              </CCol>
            </CRow>
            <CCloseButton
              className="text-reset offcanvas-main-bottom-close"
              onClick={() => setVisible(false)}
            />
          </CRow>
        </COffcanvasHeader>
        <COffcanvasBody style={{ paddingTop: '4px' }}>
          <MobileSidebarClubList setListVisible={setVisible} />
        </COffcanvasBody>
      </COffcanvas>
    </>
  )
}

export default MobileOffcanvas
