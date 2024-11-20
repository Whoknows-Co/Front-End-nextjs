import React from "react";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <img src="../../public/logo.svg" alt="" />
      <div className={styles.navbar}>
        <div>
          <p>نوبت دهی مشاوره</p>
          <img src="../../public/icons8-dropdown-30 3.svg" alt="" />
        </div>
        <div>
          <p>مشاوره درسی آنلاین</p>
          <img src="../../public/icons8-dropdown-30 3.svg" alt="" />
        </div>
        <div>
          <p>آموزشگاها</p>
          <img src="../../public/icons8-dropdown-30 3.svg" alt="" />
        </div>
        <div>
          <p>مشاوران</p>
          <img src="../../public/icons8-dropdown-30 3.svg" alt="" />
        </div>
      </div>
      <button>ورود/ثبت نام</button>
    </div>
  );
}

export default Header;
