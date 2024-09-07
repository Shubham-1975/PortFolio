import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark "
        aria-label="Third navbar example"
      >
        <div class="container-fluid d-flex justify-content-around">
          <div className="title">
            <a className="navbar-brand" href="#">
              Portfolio
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse link-sec"
              id="navbarsExample03"
            >
              <ul className="navbar-nav me-auto mb-2 mb-sm-0 na">
                <li className="nav-item ">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#skill"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#education"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link menu_active"
                    aria-current="page"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
