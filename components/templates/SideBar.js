import React, { useState } from "react";
import styles from "./SideBar.module.css";
import ButtonSB from "../atom/ButtonSB";
import user from "../../public/sidebar/user.svg";
import profileIcon from "../../public/sidebar/profile.svg";
import editPersonBlue from "../../public/sidebar/edit.svg";
import calenderBlue from "../../public/sidebar/calendar.svg";
import eye from "../../public/sidebar/eye.svg";
import exit from "../../public/icons/exit-icon.svg";

import Image from "next/image";
function SideBar({ selected, setSelected }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={profileIcon} alt="profile" width={111} height={111} />
        <div>
          <p>پرنیان خالقی</p>
        </div>
      </div>
      <div className={styles.navBar}>
        <ButtonSB
          txt={"حساب کاربری"}
          imgUrl={user}
          bColor={selected === 1 ? "#FEE9C3" : "#FFF6E8"}
          fn={() => setSelected(1)}
        ></ButtonSB>

        <ButtonSB
          txt={"ویرایش اطلاعات حساب"}
          imgUrl={editPersonBlue}
          bColor={selected === 2 ? "#FEE9C3" : "#FFF6E8"}
          fn={() => setSelected(2)}
        ></ButtonSB>

        <ButtonSB
          txt={"مدیریت نوبت ها"}
          imgUrl={calenderBlue}
          bColor={selected === 3 ? "#FEE9C3" : "#FFF6E8"}
          fn={() => setSelected(3)}
        ></ButtonSB>

        <ButtonSB
          txt={"مشاهده رزرو های من"}
          imgUrl={eye}
          bColor={selected === 4 ? "#FEE9C3" : "#FFF6E8"}
          fn={() => setSelected(4)}
        ></ButtonSB>

        <ButtonSB
          txt={"خروج از حساب"}
          imgUrl={exit}
          bColor={selected === 5 ? "#FEE9C3" : "#FFF6E8"}
          fn={() => setSelected(5)}
        ></ButtonSB>
      </div>
    </div>
  );
}

export default SideBar;
