import React from 'react'

const MobileHome = React.lazy(() => import('./views/malta-map/mobile/MobileHome'))
const MobileInfo = React.lazy(() => import('./views/malta-map/mobile/mobile-info/MobileInfo'))
const MobileNews = React.lazy(() => import('./views/malta-map/mobile/mobile-news/MobileNews'))
const MobileNotice = React.lazy(() => import('./views/malta-map/mobile/mobile-notice/MobileNotice'))
const MobileFaq = React.lazy(() => import('./views/malta-map/mobile/MobileFaq'))
const MobileMaltaAppService = React.lazy(() =>
  import('./views/malta-map/mobile/MobileMaltaAppService'),
)
const MobileHorseClubPage = React.lazy(() => import('./views/malta-map/mobile/MobileHorseClubPage'))
const MobileTerms = React.lazy(() => import('./views/malta-map/mobile/MobileTerms'))
const MobileHelp = React.lazy(() => import('./views/malta-map/mobile/MobileHelp'))
const MobileServiceInfo = React.lazy(() => import('./views/malta-map/mobile/MobileServiceInfo'))
const InfoView1M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView1M'))
const InfoView2M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView2M'))
const InfoView3M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView3M'))
const InfoView4M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView4M'))
const InfoView5M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView5M'))
const InfoView6M = React.lazy(() => import('./views/malta-map/mobile/mobile-info/InfoView6M'))
const NewsViewM = React.lazy(() => import('./views/malta-map/mobile/mobile-news/NewsViewM'))
const NoticeViewM = React.lazy(() => import('./views/malta-map/mobile/mobile-notice/NoticeViewM'))

const routesmobile = [
  { path: '/info', name: 'MobileInfo', component: MobileInfo },
  { path: '/news', name: 'MobileNews', component: MobileNews },
  { path: '/notice', name: 'MobileNotice', component: MobileNotice },
  { path: '/faq', name: 'MobileFaq', component: MobileFaq },
  { path: '/maltaappservice', name: 'MobileMaltaAppService', component: MobileMaltaAppService },
  { path: '/horseclubpage', name: 'MobileHorseClubPage', component: MobileHorseClubPage },
  { path: '/maltaserviceterms', name: 'MobileTerms', component: MobileTerms },
  { path: '/maltaservicehelp', name: 'MobileHelp', component: MobileHelp },
  { path: '/maltaserviceinfo', name: 'MobileServiceInfo', component: MobileServiceInfo },
  { path: '/infoview1', name: 'InfoView1M', component: InfoView1M },
  { path: '/infoview2', name: 'InfoView2M', component: InfoView2M },
  { path: '/infoview3', name: 'InfoView3M', component: InfoView3M },
  { path: '/infoview4', name: 'InfoView4M', component: InfoView4M },
  { path: '/infoview5', name: 'InfoView5M', component: InfoView5M },
  { path: '/infoview6', name: 'InfoView6M', component: InfoView6M },
  { path: '/newsview', name: 'NewsViewM', component: NewsViewM },
  { path: '/noticeview', name: 'NoticeViewM', component: NoticeViewM },
  { path: '/home', exact: false, name: 'Home', component: MobileHome },
]

export default routesmobile
