import React from "react";
import { Routes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Navbar from "../Components/Navbar/Navbar";

const PageRoutes = () => {
  return (
    <section className="w-full  bg-neutral-200">
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="container m-auto overflow-hidden">
          <Routes>{protectedRoutes()}</Routes>
        </div>
      </div>
    </section>
  );
};

export default PageRoutes;
