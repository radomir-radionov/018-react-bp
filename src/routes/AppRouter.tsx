import { Routes, Route, Navigate } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import {
  CreateOrder,
  Main,
  NotFoundError,
  InternalServerError,
  SignIn,
  SignUp,
  Verify,
} from "pages";
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

      <Route path={pageRoutes.SIGNUP} element={<SignUp />} />
      <Route path={pageRoutes.VERIFY} element={<Verify />} />
      <Route path={pageRoutes.SIGNIN} element={<SignIn />} />

      {/* Create Order Routes */}
      {createOrderRoutes.map((path, index) => (
        <Route key={index} path={path} element={<CreateOrder />} />
      ))}

      {/* Errors */}
      <Route
        path={pageRoutes.INTERNAL_SERVER}
        element={<InternalServerError />}
      />
      {/* Special case: if no route matched - show page 404 */}
      <Route path={pageRoutes.NOT_FOUND} element={<NotFoundError />} />
      <Route
        path="*"
        element={<Navigate to={pageRoutes.NOT_FOUND} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
