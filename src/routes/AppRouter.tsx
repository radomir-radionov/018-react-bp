import { Routes, Route } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import { CreateOrder, Main, NotFound, Presentation } from "pages";
import { createOrderRoutes } from "./data";

// import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      {/* List of routes in app */}
      {/* <PrivateRoute exact path={pageRoutes}>
        <Page />
      </PrivateRoute> */}
      <Route path={pageRoutes.MAIN} element={<Main />} />

      {/* Create Order Routes */}
      {createOrderRoutes.map((path, index) => (
        <Route key={index} path={path} element={<CreateOrder />} />
      ))}

      <Route path={pageRoutes.PRESENTATION} element={<Presentation />} />
      {/* Special case: if no route matched - show page 404 */}
      <Route path={pageRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
