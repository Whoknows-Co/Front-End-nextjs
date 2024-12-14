import React, { use, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/logo.svg";
import arrow from "../public/icons8-dropdown-30 3.svg";
import profileIcon from "../public/icons/profile-icon.svg";
import menu from "../public/icons/humberger-menu.svg";
import { useRouter } from "next/router";

function Header() {
  const [login, setLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <>
      <div
        className={styles.sidenav}
        style={showSidebar === true ? { width: "180px" } : { width: "0px" }}
      >
        <a className={styles.closebtn} onClick={() => setShowSidebar(false)}>
          &times;
        </a>
        <a onClick={() => router.push("/consult")}>نوبت دهی مشاوره</a>
        <a>مشاوره درسی آنلاین</a>
        <a>آموزشگاها</a>
        <a>مشاوران</a>
      </div>
      <div className={styles.container}>
        <Image
          onClick={() => router.push("/")}
          className={styles.logo1}
          width={60}
          height={60}
          src={logo}
          alt="logo"
        />
        <div className={styles.navbar}>
          <div onClick={() => router.push("/consult")}>
            <p>نوبت دهی مشاوره</p>
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

        <button className={styles.humber} onClick={() => setShowSidebar(true)}>
          <Image width={60} height={60} src={menu} />
        </button>
        <Image
          className={styles.logo2}
          width={60}
          height={60}
          src={logo}
          alt="logo"
        />
        {login === true ? (
          <button className={styles.login2}>
            <Image width={50} height={50} src={profileIcon} />
          </button>
        ) : (
          <button className={styles.login}>ورود/ثبت نام</button>
        )}
      </div>
    </>
  );
}

export default Header;
