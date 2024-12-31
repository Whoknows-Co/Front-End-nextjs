import React, { useContext } from "react";
import styles from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { useLogin } from "../../services/mutations";
import { setCookie } from "../../utils/cookie";
import { useRouter } from "next/navigation";
import { loginContext } from "../../context/LoginContextProvider";
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label>ایمیل یا شماره تماس</label>
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
        {/* <div>
          <label>مبایل</label>
          <input
            {...register("phone_number", {
              required: { value: true, message: "شماره تماس خود را وارد کنید" },
              minLength: { value: 11, message: "شماره تماس نا معتبر است" },
              maxLength: { value: 11, message: "شماره تماس نا معتبر است" },
            })}
          />
          {!!errors?.phone && <span>{errors?.phone?.message}</span>}
        </div> */}
        <div>
          <label>رمز عبور</label>
          <input
            {...register("password", {
              required: { value: true, message: "رمز عبور خود را وارد کنید" },
            })}
          />
          {!!errors?.password && <span>{errors?.password?.message}</span>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
