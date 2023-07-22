import React, { useState, useEffect } from "react";
function AppearforLoginAndSignup() {
  const [formappear, setupdateCLick] = useState(false);
  const [signupappear, setupdateCLick2] = useState(false);
  const clickappear = () => {
    setupdateCLick(true);
    setupdateCLick2(false);
  };
  const clickappear2 = () => {
    setupdateCLick(false);
    setupdateCLick2(true);
  };
  const closeform = () => {
    setupdateCLick(false);
    setupdateCLick2(false);
  };
  return { formappear, signupappear, clickappear, clickappear2, closeform };
}
export default AppearforLoginAndSignup;
