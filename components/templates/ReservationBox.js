import React, { useEffect, useState } from "react";
import styles from "./ReservationBox.module.css";

import "react-multi-date-picker/styles/colors/red.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimeBox from "../atom/TimeBox";
import times from "../../constants/freeTime";
import timeCalculator from "../../utils/timeCalculator";
import Image from "next/image";
import api from "../../configs/api";
import logo from "../../public/logo.svg";
import Modal_Submit from "../module/Modal_Submit";
import { useMutation, useQuery } from "@tanstack/react-query";
import timeEditor from "../../utils/timeEditor";
function ReservationBox({ id, moshaver }) {
  const [calenderValue, setCalenderValue] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [reserveCardNumb, setReserveCardNumb] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [reserveForm, setReserveForm] = useState({
    student_first_name: "",
    student_last_name: "",
    level: "",
    subject: "",
    date_birth: "",
    phone_number: "",
    moshaver_id: "",
    date: "",
    time: "",
  });
  console.log(reserveForm);
  const fetchData = async () => {
    const res = await fetch(
      "https://mentoroo.liara.run/api/reservation/slots/12/2024-11-26"
    );
    const data = await res.json();
    return data;
  };
  const { data, isLoading } = useQuery({
    queryKey: ["times"],
    queryFn: fetchData,
  });

  const timeHandler = (value) => {
    setReserveForm({ ...reserveForm, ["time"]: timeEditor(value.time) });

    setTimeRange(timeCalculator(value.time));
  };
  const nextHandler = () => {
    if (reserveCardNumb > 2) return;
    setReserveCardNumb(() => reserveCardNumb + 1);
  };
  const pervHandler = () => {
    if (reserveCardNumb == 0) return;
    setReserveCardNumb(() => reserveCardNumb - 1);
  };
  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setReserveForm({ ...reserveForm, [name]: value });
  };
  useEffect(() => {
    if (!calenderValue) return;
    const day = calenderValue.day;
    const month = calenderValue.month.number;
    const year = calenderValue.year;
    let date = `${year}/${month}/${day}`;
    setReserveForm({ ...reserveForm, ["date"]: date });
  }, [calenderValue]);
  const mutationFn = (data) => api.post("/reservation", data);

  const mutation = useMutation({ mutationFn: mutationFn });
  const submitHandler = () => {
    mutation.mutate(reserveForm, {
      onSuccess: (response) => {
        setShowModal(true);
        console.log(response);
      },
      onError: (error) => alert(error.response.data.message),
    });
  };

  useEffect(() => {
    setReserveForm({
      ...reserveForm,
      moshaver_id: 12,
      date: "2024-11-26",
    });
  }, [reserveForm.date]);
  return (
    <>
      <div className={styles.container}>
        {reserveCardNumb === 0 ? (
          <>
            <div className={styles.timeList}>
              {timeRange === "" ? null : (
                <h3> بازه زمانی انتخابی شما : {timeRange}</h3>
              )}
              <div className={styles.list}>
                {isLoading
                  ? "Loading"
                  : data.slots.map((time, index) => (
                      <TimeBox
                        key={index}
                        time={time}
                        timeHandler={timeHandler}
                      />
                    ))}
              </div>
            </div>
            <div className={styles.calendar}>
              <Calendar
                name="date"
                value={reserveForm.date}
                calendar={persian}
                locale={persian_fa}
                onChange={setCalenderValue}
              />
            </div>
          </>
        ) : reserveCardNumb === 2 ? (
          <>
            <div className={styles.logContainer}>
              <h1>اطلاعات وارد شده:</h1>
              <div className={styles.log}>
                <p>
                  نام:<span>{reserveForm.student_first_name}</span>
                </p>
                <p>
                  نام خانوادگی:<span>{reserveForm.student_last_name}</span>
                </p>
                <p>
                  شماره تماس:<span>{reserveForm.phone_number}</span>
                </p>
                <p>
                  رشته تحصیلی:<span>{reserveForm.subject}</span>
                </p>
                <p>
                  تاریخ تولد:<span>{reserveForm.date_birth}</span>
                </p>
                <p>
                  تاریخ انتخابی:<span>{reserveForm.date}</span>
                </p>
                <p>
                  ساعت انتخابی:<span>{reserveForm.time}</span>
                </p>
                <p>
                  پایه تحصیلی:<span>{reserveForm.level}</span>
                </p>
                <h2>
                  مشاور:
                  <span>
                    {moshaver.moshaver_first_name} {moshaver.moshaver_last_name}
                  </span>
                </h2>
              </div>
            </div>
            <div className={styles.banner}>
              <Image src={logo} width={120} height={120} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.form}>
              <h2>اطلاعات خود را وارد کنید</h2>

              <div className={styles.inputs}>
                <input
                  placeholder="نام"
                  name="student_first_name"
                  value={reserveForm.student_first_name}
                  onChange={changeHandler}
                />
                <input
                  placeholder="نام خانوادگی"
                  name="student_last_name"
                  value={reserveForm.student_last_name}
                  onChange={changeHandler}
                />
                <input
                  placeholder="پایه تحصیلی"
                  name="level"
                  value={reserveForm.level}
                  onChange={changeHandler}
                />
                <input
                  placeholder="رشته تحصیلی"
                  name="subject"
                  value={reserveForm.subject}
                  onChange={changeHandler}
                />
                <input
                  placeholder="تاریخ تولد"
                  name="date_birth"
                  value={reserveForm.date_birth}
                  onChange={changeHandler}
                />
                <input
                  placeholder="شماره تماس"
                  name="phone_number"
                  value={reserveForm.phone_number}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className={styles.banner}>
              <Image src={logo} width={120} height={120} />
            </div>
          </>
        )}
        {reserveCardNumb === 2 ? (
          <button className={styles.submit} onClick={submitHandler}>
            ثبت
          </button>
        ) : (
          <button className={styles.next} onClick={nextHandler}>
            مرحله بعد
          </button>
        )}
        {reserveCardNumb === 0 ? null : (
          <button className={styles.perv} onClick={pervHandler}>
            مرحله قبل
          </button>
        )}
      </div>
      {showModal ? <Modal_Submit setShowModal={setShowModal} /> : null}
    </>
  );
}

export default ReservationBox;
