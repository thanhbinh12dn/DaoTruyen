import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SkeletonTheme } from 'react-loading-skeleton';
import { publicRoutes } from './routes/routes';

function App() {

  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {

            const Page = route.component

            let Layout

            if(route.layout) {
              Layout = route.layout
            } else if(route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route 
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
