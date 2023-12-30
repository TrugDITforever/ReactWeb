import React, { useState, useEffect, useContext, useReducer } from "react";
import { Appcontext } from "../Contexxt/Appcontext";
import { ClassContext } from "../Contexxt/ClassContext";

export function Ads() {
  const { formappear, signupappear, Creategrp, cartappear, poststatus } =
    useContext(Appcontext);
  ///ads appear in college.js
  const { adsapper } = useContext(ClassContext);
  return (
    <div>
      <div
        className={`ads ${
          formappear ||
          signupappear ||
          Creategrp ||
          cartappear ||
          adsapper ||
          poststatus
            ? "active"
            : ""
        }`}
      ></div>
    </div>
  );
}
