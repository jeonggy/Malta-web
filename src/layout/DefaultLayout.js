import React from 'react'
import { AppContent, AppHeader } from '../components/index'
import AppHeaderBanner from '../components/AppHeaderBanner'

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
