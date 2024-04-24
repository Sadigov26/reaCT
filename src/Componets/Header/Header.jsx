import React from "react";
import styles from "./Header.module.css"
import imgLogo from "../../assets/about/logo (12).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
    <div className={styles.container}>
      <div className={styles.countainerHeader}>
        <div className={styles.logoHeader}>
          <img src={imgLogo} alt="" />
          <h1>COURSE</h1>
        </div>
        <div class="navbar">
          <nav>
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">COURSES</a>
              </li>
              <li>
                <a href="">ELEMENTS</a>
              </li>
              <li>
                <a href="">NEWS</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.contactTop}>
          <FontAwesomeIcon icon={faPhone}/>
          <p>+43 4566 7788 2457</p>
        </div>
      </div>
    </div>
    </header>

  );
};

export default Header;
