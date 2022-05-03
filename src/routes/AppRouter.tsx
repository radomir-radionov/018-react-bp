import { Routes, Route } from "react-router-dom";

import pageRoutes from "constants/pageRoutes";
import { Main, NotFound, Presentation } from "pages";

// import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      {/* List of routes in app */}
      {/* <PrivateRoute exact path={pageRoutes}>
        <Page />
      </PrivateRoute> */}
      <Route path={pageRoutes.MAIN} element={<Main />} />
      <Route path={pageRoutes.PRESENTATION} element={<Presentation />} />
      {/* Special case: if no route matched - show page 404 */}
      <Route path={pageRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
