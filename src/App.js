import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import Layout from "./Components/Layout/Layout";
import Loading from "./Components/Loading/Loading";
const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(({ label, path, isExact, isInAddInfo, component }) =>
            !isInAddInfo ? (
              <Route
                key={label}
                path={path}
                exact={isExact}
                component={component}
              />
            ) : null
          )}
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
