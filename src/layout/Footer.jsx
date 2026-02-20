import React from "react";
import { useLocation, Link } from "react-router";

function Footer() {
  const location = useLocation();
  const footerBg = location.pathname === `/`;

  return (
    <>
      <div
        className={`footer-top bg-${footerBg ? `white` : `primary-50`}`}
      ></div>
      <footer className="nav navbar-expand-lg footer-bg">
        <div className="container py-5">
          <div className="container-fluid">
            <div className="footer-logo float-lg-start">
              <Link className="nav-link" to="/">
                <p className="text-white">Spoonful</p>
                <p className="text-white">食噗否</p>
              </Link>
            </div>
            <ul className="navbar-nav d-flex justify-content-center mb-4 text-white footer-links">
              <li>
                <a className="nav-link px-4 py-2" href="#">
                  常見問題
                </a>
              </li>
              <li>
                <a className="nav-link px-4 py-2" href="#">
                  聯絡我們
                </a>
              </li>
              <li>
                <a className="nav-link px-4 py-2" href="#">
                  服務條款
                </a>
              </li>
              <li>
                <a className="nav-link px-4 py-2" href="#">
                  隱私政策
                </a>
              </li>
            </ul>
            <p className="text-center copy">© 權利說明</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
