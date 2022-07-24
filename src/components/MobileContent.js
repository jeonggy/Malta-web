import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routesmobiles from '../routesmobile'

const MobileContent = () => {
  return (
    <CContainer lg style={{ margin: 0, padding: 0, height: '100%', maxWidth: 'none' }}>
      {/* <Suspense fallback={<CSpinner color="info" />}> */}
      <Switch>
        {routesmobiles.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => (
                  <>
                    <route.component {...props} />
                  </>
                )}
              />
            )
          )
        })}
        <Redirect from="/" to="/home" />
      </Switch>
      {/* </Suspense> */}
    </CContainer>
  )
}

export default React.memo(MobileContent)
