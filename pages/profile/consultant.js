import React from "react";
import ConsultantProfile from "../../components/templates/ConsultantProfile";
import AuthProvider from "../../providers/AuthProvider";

function Consultant() {
  return (
    <AuthProvider>
      <ConsultantProfile />
    </AuthProvider>
  );
}

export default Consultant;
