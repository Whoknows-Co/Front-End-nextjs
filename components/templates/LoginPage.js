import React, { useContext } from "react";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import { useRouter } from "next/navigation";
import { loginContext } from "../../context/LoginContextProvider";
import Image from "next/image";
import banner from "../../public/MENTOROOObanner.png";
import logo from "../../public/register/logo.svg";
import { toast } from "react-toastify";
function LoginPage() {
  const submitHandler = (e) => {};
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { login, setLogin } = useContext(loginContext);
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  function onSubmit(values) {
    if (isPending) return;
    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        setCookie("accessToken", data?.data?.access_token, 3600);
        router.push("/profile/consultant");
        toast.success("وارد شدید!");
        setLogin(true);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <Image src={logo} width={82.5} height={110} alt="logo" />
          <h1>به منتورو خوش آمدید</h1>
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div>
            <label>ایمیل یا شماره همراه</label>
            <input
              {...register("login", {
                required: {
                  value: true,
                  message: "ایمیل یا شماره تماس را وارد کنید خود را وارد کنید",
                },
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                //   message: "invalid email address",
                // },
              })}
            />
            {!!errors?.login && <span>{errors?.login?.message}</span>}
          </div>

          <div>
            <label>رمز عبور</label>
            <input
              {...register("password", {
                required: { value: true, message: "رمز عبور خود را وارد کنید" },
              })}
            />
            {!!errors?.password && <span>{errors?.password?.message}</span>}
          </div>

          <button type="submit">ورود</button>
        </form>
        <p className={styles.switch}>
          آیا اکانت کاربری ندارید؟{" "}
          <span onClick={() => router.push("/auth/register")}>ثبت نام</span>
        </p>
      </div>
      <Image
        src={banner}
        width={1030}
        height={1041}
        alt="banner"
        className={styles.banner}
      />
    </div>
  );
}

export default LoginPage;
