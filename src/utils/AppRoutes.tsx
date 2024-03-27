import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { MetaTags } from '../components/MetaTags';
import { pagesConfig } from '../config/PagesConfig';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pagesConfig.map((route, index) => {
          let currElement: JSX.Element | null = null;
          // If page is part of a layout
          if (route.layout) {
            currElement = React.createElement(
              route.layout,
              null,
              <MetaTags
                key="meta"
                title={`${route.name} | ${document.title}` || document.title}
                path={route.path}
              />,
              React.createElement(route.component, { key: 'component' }),
            );
          } else {
            currElement = (
              <>
                <MetaTags
                  key="meta"
                  title={`${route.name} | ${document.title}` || document.title}
                  path={route.path}
                />
                {React.createElement(route.component, { key: 'component' })}
              </>
            );
          }

          return <Route key={index} path={route.path} element={currElement} />;
        })}
        {pagesConfig
          .filter(route => route.redirectPaths)
          .flatMap(route =>
            route.redirectPaths!.map((redirectPath, idx) => (
              <Route
                key={`${route.path}-${idx}`}
                path={redirectPath}
                element={<Navigate to={route.path} replace />}
              />
            )),
          )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
