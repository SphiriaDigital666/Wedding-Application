"use client";
import React, { useEffect, useState } from "react";

const SetGreeting = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let greeting = "";

  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon!";
  } else if (currentHour >= 17 && currentHour < 20) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }

  // Return the formatted date
  return <p>{greeting}</p>;
};

export default SetGreeting;
