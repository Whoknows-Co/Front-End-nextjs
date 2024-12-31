import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useRegister = () => {
  const mutationFn = (data) =>
    api.post("register", data, {
      headers: {
        guard: "moshaver",
      },
    });
  return useMutation({ mutationFn });
};
const useLogin = () => {
  const mutationFn = (data) =>
    api.post("login", data, {
      headers: {
        guard: "moshaver",
      },
    });
  return useMutation({ mutationFn });
};

export { useRegister, useLogin };
