import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useGetConsultantProfile = () => {
  const queryFn = () =>
    api.get("moshaver/profile", {
      headers: {
        guard: "moshaver",
      },
    });
  const queryKey = ["consultant-data"];
  const onError = () => {
    window.location.reload();
  };

  return useQuery({ queryFn, queryKey });
};
export { useGetConsultantProfile };
