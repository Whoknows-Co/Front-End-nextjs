import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";
import arrow from "../public/icons8-dropdown-30 3.svg";
function Header() {
  return (
    <div className={styles.container}>
      <Image width={60} height={60} src={logo} alt="logo" />
      <div className={styles.navbar}>
        <div>
          <p>نوبت دهی مشاوره</p>
          <Image width={25} height={25} src={arrow} alt="" />
        </div>
        <div>
          <p>مشاوره درسی آنلاین</p>
          <Image width={25} height={25} src={arrow} alt="" />
        </div>
        <div>
          <p>آموزشگاها</p>
          <Image width={25} height={25} src={arrow} alt="" />
        </div>
        <div>
          <p>مشاوران</p>
          <Image width={25} height={25} src={arrow} alt="" />
        </div>
      </div>
      <button>ورود/ثبت نام</button>
    </div>
  );
}

export default Header;
