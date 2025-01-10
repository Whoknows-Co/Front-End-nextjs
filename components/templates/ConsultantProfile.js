import React, { useState } from "react";
import styles from "./ConsultantProfile.module.css";
import SideBar from "./SideBar";
import ConsultantProfileInfo from "./ConsultantProfileInfo.js";
import { useGetConsultantProfile } from "../../services/queries";
import EditConsultantProfile from "./EditConsultantProfile";
import ReserveManagment from "./ReserveManagment";
import MyReservations from "./MyReservations";
import { ColorRing } from "react-loader-spinner";
function ConsultantProfile() {
  const [selected, setSelected] = useState(1);

  const { data, isPending } = useGetConsultantProfile();
  console.log(data);
  if (isPending)
    return (
      <div className={styles.loader}>
        <ColorRing
          visible={true}
          height="180"
          width="180"
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
    );

  return (
    <div className={styles.container}>
      <SideBar selected={selected} setSelected={setSelected} data={data} />
      {selected === 1 && (
        <ConsultantProfileInfo data={data} setSelected={setSelected} />
      )}
      {selected === 2 && (
        <EditConsultantProfile data={data} setSelected={setSelected} />
      )}
      {selected === 3 && <ReserveManagment />}
      {selected === 4 && <MyReservations />}
    </div>
  );
}

export default ConsultantProfile;
