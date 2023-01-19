import React  from "react";
import { Routes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Navbar from "../Components/Navbar/Navbar";

const PageRoutes = () => {
  return (
    <section className="w-full h-screen overflow-hidden bg-neutral-200">
      <Navbar />
        <div className="container m-auto">
          <Routes>{protectedRoutes()}</Routes>
        </div>
    </section>
  );
};

export default PageRoutes;
