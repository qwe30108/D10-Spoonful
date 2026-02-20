import React from "react";
import { Link, Outlet } from "react-router";
import Footer from "./Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function FrontendLayout() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-0">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Spoonful食噗否
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end justify-content-center-lg flex-grow-1 pe-3 my-4">
                  <li className="nav-item me-4 mb-4 my-lg-auto">
                    <Link
                      className="nav-link text-primary-950"
                      aria-current="page"
                      href="#"
                    >
                      最新消息
                    </Link>
                  </li>
                  <li className="nav-item me-4 mb-4 my-lg-auto">
                    <Link
                      className="nav-link text-primary-950"
                      href="search.html"
                    >
                      檢索頁面
                    </Link>
                  </li>
                  <li className="nav-item me-4 mb-4 my-lg-auto">
                    <Link className="nav-link text-primary-950" to="/about">
                      關於食噗否
                    </Link>
                  </li>
                  <li className="nav-item me-4 mb-4 my-lg-auto d-none d-lg-block">
                    <button
                      className="btn btn-secondary-700 rounded-pill py-3 px-6"
                      href="login-register.html"
                      role="button"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="16"
                        height="16"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <g fill="#000" fillRule="evenodd" clipRule="evenodd">
                            <path
                              d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM9 13c-1.663 0-3.262.758-4.199 1.9-.475.58-.81 1.297-.839 2.092-.03.812.263 1.604.868 2.295C6.302 20.972 8.653 22 12 22s5.698-1.028 7.17-2.713c.605-.691.898-1.483.868-2.295-.03-.795-.363-1.512-.84-2.092C18.263 13.76 16.664 13 15 13z"
                              fill="#ffffff"
                              opacity="1"
                              data-original="#000000"
                              className="me-2"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      登入/註冊
                    </button>
                  </li>
                  <li className="nav-item login-link me-4 py-4 my-lg-auto d-lg-none d-md-block">
                    <Link
                      className="nav-link text-primary-950"
                      to="login-register.html"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="16"
                        height="16"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className="me-2"
                      >
                        <g>
                          <g fill="#000" fillRule="evenodd" clipRule="evenodd">
                            <path
                              d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM9 13c-1.663 0-3.262.758-4.199 1.9-.475.58-.81 1.297-.839 2.092-.03.812.263 1.604.868 2.295C6.302 20.972 8.653 22 12 22s5.698-1.028 7.17-2.713c.605-.691.898-1.483.868-2.295-.03-.795-.363-1.512-.84-2.092C18.263 13.76 16.664 13 15 13z"
                              fill="#efab23"
                              opacity="1"
                              data-original="#000000"
                              className=""
                            ></path>
                          </g>
                        </g>
                      </svg>
                      登入/註冊
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default FrontendLayout;
