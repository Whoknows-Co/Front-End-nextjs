import React, { useState } from "react";
import styles from "./ConsultantProfile.module.css";
import SideBar from "./SideBar";
import ConsultantProfileInfo from "./consultantProfileInfo";
import { useGetConsultantProfile } from "../../services/queries";
import EditConsultantProfile from "./EditConsultantProfile";
import ReserveManagment from "./ReserveManagment";
import MyReservations from "./MyReservations";
function ConsultantProfile() {
  const [selected, setSelected] = useState(1);
  const { data, isPending, isLoading } = useGetConsultantProfile();
  console.log(data);
  if (isPending) return <p>loading</p>;

  if (!isPending && !data)
    return (
      <div className={styles.container}>
        <SideBar selected={selected} setSelected={setSelected} />
        {selected === 1 && <ConsultantProfileInfo data={data} />}
        {selected === 2 && <EditConsultantProfile data={data} />}
        {selected === 3 && <ReserveManagment />}
        {selected === 4 && <MyReservations />}
      </div>
    );
}

export default ConsultantProfile;
