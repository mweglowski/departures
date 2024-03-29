import React from "react";

const Departure = ({ departure }) => {
  const { routeNumber, routeName, timeLeft } = departure;
  let timeLeftClasses = "font-bold text-lg mr-2 text-slate-500";

  // ADDING ANIMATION
  // if (timeLeft.length > 10) {
  //   timeLeftClasses += ' orange_breath_animation'
  // }
  if (timeLeft === ">>>") {
    timeLeftClasses += " green_breath_animation";
  }

  return (
    <div className="flex justify-between items-center border-b-2">
      <div className="flex">
        <div className="mr-3 text-center w-[2.8em] font-bold rounded-md p-2 m-1 shadow-md bg-red-50 text-red-500">
          {routeNumber}
        </div>
        <div className="flex items-center text-slate-500 font-bold">
          {routeName}
        </div>
      </div>
      <div className={timeLeftClasses}>{timeLeft}</div>
    </div>
  );
};

export default Departure;
