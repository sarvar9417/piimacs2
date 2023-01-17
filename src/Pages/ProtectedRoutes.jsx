import React, { lazy } from "react";
import { map, uniqueId } from "lodash";
import { Navigate, Route } from "react-router-dom";

const otherRoutes = {
  path: "*",
  element: <Navigate to={"/"} replace={true} />,
};
const MainPage = lazy(() => import("./MainPage/Main"));
// const AdminPage = lazy(() => import("./AdminPage/Admin"));
const ChapterRoutes = lazy(() => import("./ChapterRoutes/ChapterRoutes"))
const SectionRoutes = lazy(() => import("./SectionRoutes/SectionRoutes"))

// routes -->
const userRoutes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/chapters",
    element: <ChapterRoutes/>
  },
  {
    path: "/section",
    element: <SectionRoutes/>
  },
  otherRoutes,
];

const protectedRoutes = () => {
  return map(userRoutes, (route) => (
    <Route
      exact
      key={uniqueId("route")}
      path={route.path}
      element={route.element}
    />
  ));
};
export default protectedRoutes;
