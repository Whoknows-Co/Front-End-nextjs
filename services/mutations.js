import { useMutation, useQueryClient } from "@tanstack/react-query";
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
const useUpdateConsultantProfile = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) =>
    api.post("moshaver/complete-profile", data, {
      headers: {
        guard: "moshaver",
      },
    });

  return useMutation({ mutationFn });
};
const useSetSubmitTime = () => {
  const mutationFn = (data) =>
    api.post("moshaver/submitTime", data, {
      headers: {
        guard: "moshaver",
      },
    });
  return useMutation({ mutationFn });
};
const useViewTimes = () => {
  const mutationFn = (data) =>
    api.post("moshaver/viewTimes", data, {
      headers: {
        guard: "moshaver",
      },
    });
  return useMutation({ mutationFn });
};
export {
  useRegister,
  useLogin,
  useUpdateConsultantProfile,
  useSetSubmitTime,
  useViewTimes,
};
