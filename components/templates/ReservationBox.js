import React, { useState } from "react";
import styles from "./ReservationBox.module.css";

import "react-multi-date-picker/styles/colors/red.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function ReservationBox() {
  const [calenderValue, setCalenderValue] = useState(null);
  console.log(calenderValue);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timeList}></div>
        <div className={styles.calendar}>
          <Calendar
            calendar={persian}
            locale={persian_fa}
            value={calenderValue}
            onChange={setCalenderValue}
          />
        </div>
      </div>
    </>
  );
}

export default ReservationBox;
