import React from 'react'

const Home = React.lazy(() => import('./views/malta-map/home/Home'))
const Info = React.lazy(() => import('./views/malta-map/info/Info'))
const Notice = React.lazy(() => import('./views/malta-map/notice/Notice'))
const Faq = React.lazy(() => import('./views/malta-map/faq/Faq'))
const HorseClubPage = React.lazy(() => import('./views/malta-map/horseclubpage/HorseClubPage'))
const News = React.lazy(() => import('./views/malta-map/news/News'))
const NewsView = React.lazy(() => import('./views/malta-map/news/NewsView'))
const MaltaServiceTerms = React.lazy(() =>
  import('./views/malta-map/malta-app-service/MaltaServiceTerms'),
)
const MaltaAppService = React.lazy(() =>
  import('./views/malta-map/malta-app-service/MaltaAppService'),
)
const MaltaServiceHelp = React.lazy(() =>
  import('./views/malta-map/malta-app-service/MaltaServiceHelp'),
)
const MaltaServiceInfo = React.lazy(() =>
  import('./views/malta-map/malta-app-service/MaltaServiceInfo'),
)
const NoticeView = React.lazy(() => import('./views/malta-map/notice/NoticeView'))
const InfoView1 = React.lazy(() => import('./views/malta-map/info/InfoView1'))
const InfoView2 = React.lazy(() => import('./views/malta-map/info/InfoView2'))
const InfoView3 = React.lazy(() => import('./views/malta-map/info/InfoView3'))
const InfoView4 = React.lazy(() => import('./views/malta-map/info/InfoView4'))
const InfoView5 = React.lazy(() => import('./views/malta-map/info/InfoView5'))
const InfoView6 = React.lazy(() => import('./views/malta-map/info/InfoView6'))

const routes = [
  { path: '/info', name: 'Info', component: Info },
  { path: '/notice', name: 'Notice', component: Notice },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/horseclubpage', name: 'HorseClubPage', component: HorseClubPage },
  { path: '/news', name: 'News', component: News },
  { path: '/newsview', name: 'NewsView', component: NewsView },
  { path: '/maltaappservice', name: 'MaltaAppService', component: MaltaAppService },
  { path: '/maltaserviceterms', name: 'MaltaServiceTerms', component: MaltaServiceTerms },
  { path: '/maltaservicehelp', name: 'MaltaServiceHelp', component: MaltaServiceHelp },
  { path: '/maltaserviceinfo', name: 'MaltaServiceInfo', component: MaltaServiceInfo },
  { path: '/noticeview', name: 'NoticeView', component: NoticeView },
  { path: '/infoview1', name: 'InfoView1', component: InfoView1 },
  { path: '/infoview2', name: 'InfoView2', component: InfoView2 },
  { path: '/infoview3', name: 'InfoView3', component: InfoView3 },
  { path: '/infoview4', name: 'InfoView4', component: InfoView4 },
  { path: '/infoview5', name: 'InfoView5', component: InfoView5 },
  { path: '/infoview6', name: 'InfoView6', component: InfoView6 },
  { path: '/home', exact: false, name: 'Home', component: Home },
]

export default routes
