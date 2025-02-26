import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="w-full h-full bg-white relative">
      <div className="w-full h-full flex items-center justify-between px-8 cursor-pointer  rounded-md">
        <DatePicker
          className="w-full h-full outline-none bg-transparent cursor-pointer"
          selected={endDate}
          placeholderText="Check Out"
          onChange={(date) => setEndDate(date)}
        />
        <BsCalendar className="text-base text-accent-hover" />
      </div>
    </div>
  );
};

export default CheckOut;
