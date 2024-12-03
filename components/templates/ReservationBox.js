import React, { useState } from "react";
import styles from "./ReservationBox.module.css";

import "react-multi-date-picker/styles/colors/red.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimeBox from "../atom/TimeBox";
import times from "../../constants/freeTime";
import timeCalculator from "../../utils/timeCalculator";
function ReservationBox() {
  const [calenderValue, setCalenderValue] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [timeRange, setTimeRange] = useState("");
  console.log(timeValue);
  console.log(calenderValue);
  const clickHandler = (time) => {
    setTimeValue(time.time);
    setTimeRange(timeCalculator(time.time));
    console.log(time);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.timeList}>
          {timeRange === "" ? null : (
            <h3> بازه زمانی انتخوابی شما : {timeRange}</h3>
          )}
          <div className={styles.list}>
            {times.map((time) => (
              <TimeBox time={time} clickHandler={clickHandler} />
            ))}
          </div>
        </div>
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
