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
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

function ReservationBox({ moshaver }) {
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
    end_time: "",
    start_time: "",
    time: "",
  });

  console.log(reserveForm);
  const fetchData = async () => {
    const res = await fetch(
      `https://mentoroo.liara.run/api/reservation/slots/${reserveForm.moshaver_id}/${reserveForm.date}`
    );
    const data = await res.json();
    return data;
  };
  const { data, isPending, refetch } = useQuery({
    queryKey: ["times"],
    queryFn: fetchData,
  });
  console.log(data);

  const timeHandler = (value) => {
    console.log(value);
    setReserveForm({
      ...reserveForm,
      ["end_time"]: timeEditor(value.end_time),
      ["start_time"]: timeEditor(value.start_time),
      ["time"]: timeEditor(value.start_time),
    });

    setTimeRange(
      `${timeEditor(value.start_time)}-${timeEditor(value.end_time)}`
    );
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
    let date = `${year}-${month}-${day}`;
    setReserveForm({ ...reserveForm, ["date"]: date });
    refetch();
  }, [calenderValue]);
  const mutationFn = (data) => api.post("/reservation", data);

  const mutation = useMutation({ mutationFn: mutationFn });
  const submitHandler = () => {
    mutation.mutate(reserveForm, {
      onSuccess: (response) => {
        setShowModal(true);
        console.log(response);
      },
      onError: (error) => {
        if (error.message === "The date birth field must be a valid date.")
          toast.error("valid birthday format: 2000/09/09");
      },
    });
  };

  useEffect(() => {
    setReserveForm({
      ...reserveForm,
      moshaver_id: moshaver.moshaver_id,
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
              <div className={isPending ? styles.loader : styles.list}>
                {reserveForm.date === "" ? (
                  <p>تاریخ مورد نظر خود را انتخاب کنید</p>
                ) : isPending ? (
                  <div className={styles.loader}>
                    <ColorRing
                      visible={true}
                      height="120"
                      width="120"
                      colors={[
                        "#208cb0",
                        "#f9b025",
                        "#ed6624",
                        "#208cb0",
                        "#f9b025",
                        "#ed6624",
                      ]}
                    />
                  </div>
                ) : data?.slots ? (
                  data?.slots.map((time, index) => (
                    <TimeBox
                      key={index}
                      time={time}
                      timeHandler={timeHandler}
                    />
                  ))
                ) : (
                  <p className={styles.notFound}>
                    برای این تاریخ نوبتی تنظیم نشده است
                  </p>
                )}
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
              <p>لطفا بر روی هر تاریخ دو بار کلیک کنید</p>
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
                  ساعت انتخابی:<span>{reserveForm.start_time}</span>
                </p>
                <p>
                  پایه تحصیلی:<span>{reserveForm.level}</span>
                </p>
                <h2>
                  مشاور:
                  <span>
                    {moshaver.first_name} {moshaver.last_name}
                  </span>
                </h2>
              </div>
            </div>
            <div className={styles.banner}>
              <Image src={logo} width={120} height={120} alt="icon" />
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
              <Image src={logo} width={120} height={120} alt="icon" />
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
