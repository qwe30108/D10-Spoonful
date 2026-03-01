import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router";
import Footer from "./Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Header";

function FrontendLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default FrontendLayout;
