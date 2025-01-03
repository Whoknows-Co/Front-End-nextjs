import React, { useState } from "react";
import styles from "./ReserveManagment.module.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimeBox from "../atom/TimeBox";
import Image from "next/image";
import pencil from "../../public/setTimes/pencil.svg";
import clock from "../../public/setTimes/clock.svg";

function ReserveManagment() {
  const [calenderValue, setCalenderValue] = useState(null);
  const [timeForm, setTimeForm] = useState({
    start_time: "",
    end_time: "",
    duration: "",
    date: "",
  });
  const [createTimes, setCreateTimes] = useState(false);
  return (
    <div className={styles.container}>
      <form className={styles.top}>
        <div className={styles.header}>
          <Image src={pencil} width={22} height={22} alt="icon" />
          <p>روز های مورد نظر خود را انتخاب کنید:</p>
        </div>
        <div className={styles.formContainer}>
          <Calendar
            name="date"
            // value={reserveForm.date}
            calendar={persian}
            locale={persian_fa}
            onChange={setCalenderValue}
          />
          <div className={styles.setTimes}>
            <div>
              <label>شروع ساعت کاری:</label>
              <input />
            </div>
            <div>
              <label>پایان ساعت کاری:</label>
              <input />
            </div>
            <div>
              <label>مدت زمان مشاوره:</label>
              <input />
            </div>
          </div>
        </div>
        <button
          className={styles.createTimeBtn}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setCreateTimes(true);
          }}
        >
          ساخت بازه مشاوره
        </button>
      </form>
      {createTimes === true && (
        <div className={styles.bottom}>
          <div className={styles.header}>
            <Image src={clock} width={22} height={22} alt="icon" />
            <p>زمان های مشاوره شما:</p>
          </div>
          <div className={styles.newTimes}>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
            <div className={styles.timeBox}>12:00-11:00</div>
          </div>
          <button
            className={styles.submit}
            onClick={() => setCreateTimes(false)}
          >
            ثبت و تایید
          </button>
        </div>
      )}
    </div>
  );
}

export default ReserveManagment;
