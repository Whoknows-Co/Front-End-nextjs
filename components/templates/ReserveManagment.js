import React, { useEffect, useState } from "react";
import styles from "./ReserveManagment.module.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimeBox from "../atom/TimeBox";
import Image from "next/image";
import pencil from "../../public/setTimes/pencil.svg";
import clock from "../../public/setTimes/clock.svg";
import { useSetSubmitTime, useViewTimes } from "../../services/mutations";
import timeEditor from "../../utils/timeEditor";
import { toast } from "react-toastify";

function ReserveManagment() {
  const [calenderValue, setCalenderValue] = useState(null);
  const [viewTimes, setViewTimes] = useState([]);
  const [timeForm, setTimeForm] = useState({
    start_time: "",
    end_time: "",
    duration: 0,
    date: "",
  });
  console.log(viewTimes);
  console.log(timeForm);
  const [createTimes, setCreateTimes] = useState(false);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTimeForm({ ...timeForm, [name]: value });
  };
  const mutateTimes = useViewTimes();
  useEffect(() => {
    if (createTimes === false) return;
    console.log(timeForm.date);
    mutateTimes.mutate(timeForm.date, {
      onSuccess: (data) => {
        console.log(data);
        setViewTimes(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, [createTimes]);
  useEffect(() => {
    if (!calenderValue) return;
    const day = calenderValue.day;
    const month = calenderValue.month.number;
    const year = calenderValue.year;
    let date = `${year}-${month}-${day}`;
    setTimeForm({ ...timeForm, date: date });
  }, [calenderValue]);

  const { mutate, isPending } = useSetSubmitTime();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(calenderValue);
    console.log(isPending);
    if (isPending) return;
    mutate(timeForm, {
      onSuccess: (data) => {
        console.log(data);
        setCreateTimes(true);

        mutateTimes.mutate(
          { date: timeForm.date },
          {
            onSuccess: (data) => {
              console.log(data.data.slots);
              setViewTimes(data.data.slots);
            },
            onError: (error) => {
              console.log(error);
            },
          }
        );
      },

      onError: (error) => console.log(error),
    });
  };
  return (
    <div className={styles.container}>
      <form className={styles.top} onSubmit={submitHandler}>
        <div className={styles.header}>
          <Image src={pencil} width={22} height={22} alt="icon" />
          <p>روز های مورد نظر خود را انتخاب کنید:</p>
        </div>
        <div className={styles.formContainer}>
          <Calendar
            name="date"
            value={timeForm.date}
            calendar={persian}
            locale={persian_fa}
            onChange={setCalenderValue}
          />
          <div className={styles.setTimes}>
            <div>
              <label>شروع ساعت کاری:</label>
              <input
                onChange={changeHandler}
                value={timeForm.start_time}
                name="start_time"
              />
            </div>
            <div>
              <label>پایان ساعت کاری:</label>
              <input
                onChange={changeHandler}
                value={timeForm.end_time}
                name="end_time"
              />
            </div>
            <div>
              <label>مدت زمان مشاوره:</label>
              <input
                type="number"
                onChange={changeHandler}
                value={timeForm.duration}
                name="duration"
              />
            </div>
          </div>
        </div>
        <button className={styles.createTimeBtn} type="submit">
          ساخت بازه مشاوره
        </button>
      </form>
      {createTimes && viewTimes.length > 0 && (
        <div className={styles.bottom}>
          <div className={styles.header}>
            <Image src={clock} width={22} height={22} alt="icon" />
            <p>زمان های مشاوره شما:</p>
          </div>
          <div className={styles.newTimes}>
            {viewTimes.map((time, index) => (
              <div
                key={index}
                className={
                  time.status === "available" ? styles.timeBox : styles.disable
                }
              >{`${timeEditor(time.start_time)}-${timeEditor(
                time.end_time
              )}`}</div>
            ))}
          </div>
          <button
            className={styles.submit}
            onClick={() => {
              toast.success(
                "لیست نوبت ها با موفقیت ثبت شد و از طریق پروفایل شما قابل مشاهده است"
              );
              setCreateTimes(false);
            }}
          >
            ثبت و تایید
          </button>
        </div>
      )}
    </div>
  );
}

export default ReserveManagment;
