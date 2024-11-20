import React from "react";
import SideBar from "../../components/templates/SideBar";
import SudentViewSection from "../../components/templates/StudentViewSection";

function StudentPage() {
  const styles = {
    display: "flex",
  };
  return (
    <div style={styles}>
      <SideBar />
      <SudentViewSection />
    </div>
  );
}

export default StudentPage;
