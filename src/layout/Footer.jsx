import React from "react";

function Footer() {
  return (
    <>
      <div className="footer-top bg-primary-50"></div>
      <footer className="nav navbar-expand-lg footer-bg">
        <div className="container py-5">
          <div className="container-fluid">
            <div className="footer-logo float-lg-start">
              <a className="nav-link" href="index.html">
                <p className="text-white">Spoonful</p>
                <p className="text-white">食噗否</p>
              </a>
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
