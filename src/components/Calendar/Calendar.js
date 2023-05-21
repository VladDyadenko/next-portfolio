import { Fragment, useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [currYear, setCurrYear] = useState(0);
  const [currMonth, setCurrMonth] = useState(0);
  const [date, setDate] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate);
    setCurrYear(currentDate.getFullYear());
    setCurrMonth(currentDate.getMonth());
  }, []);

  useEffect(() => {
    let firstDayOfMonth = new Date(currYear, currMonth, 0).getDay();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(
      currYear,
      currMonth,
      lastDateOfMonth - 1
    ).getDay();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
    let counterInactive = 0;
    const arrayInactive = [6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42];
    const renderedDays = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      counterInactive += 1;
      renderedDays.push(
        <li
          className="relative  text-center font-medium 
         min-w-[35px] h-[18px] text-[14px] flex items-center justify-center
         before:-z-20 before:absolute before:w-8 before:h-8
         before:rounded-full before:-z-1 hover:before:bg-slate-900
         hover:text-[#fff] calendar-days__list"
        >
          {lastDateOfLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      counterInactive += 1;
      let inactiveDay = "";
      arrayInactive.map((el) => {
        if (el === counterInactive) return (inactiveDay = "text-[#5f6775]");
        return null;
      });

      let isToday =
        date &&
        i === date.getDate() &&
        currMonth === date.getMonth() &&
        currYear === date.getFullYear()
          ? "text-[#fff] before:bg-slate-900"
          : "";

      renderedDays.push(
        <li
          className={`calendar-days__list ${isToday} relative  text-center
           font-medium min-w-[35px] h-[18px] text-[14px] flex
           items-center justify-center before:-z-20 before:absolute
           before:w-8 before:h-8 before:rounded-full before:-z-1
           hover:before:bg-slate-900 hover:text-[#fff]  ${inactiveDay} 
           `}
        >
          {i}
        </li>
      );
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      counterInactive += 1;
      let inactiveDay = "";
      arrayInactive.map((el) => {
        if (el === counterInactive) return (inactiveDay = "text-[#5f6775]");
        return null;
      });

      renderedDays.push(
        <li
          className={`relative  text-center font-medium min-w-[35px] 
          h-[18px] text-[14px]  flex items-center justify-center
          before:-z-20 before:absolute before:w-8 before:h-8
          before:rounded-full before:-z-1 hover:before:bg-slate-900
          hover:text-[#fff] calendar-days__list ${inactiveDay}`}
        >
          {i - lastDayOfMonth + 1}
        </li>
      );
    }
    setDays(renderedDays);
  }, [currYear, currMonth, date]);

  const nextMonth = () => {
    setCurrMonth(currMonth + 1);
  };

  return (
    <div className="wrapper-calendar block p-2 absolute h-[350px] ">
      <div className="calendar__header h-11 flex items-center justify-between">
        <p
          className="current-date min-w-[150px] h-[22px] m-0 
        font-robotoSlab font-medium text-5  text-start "
        >
          {`${months[currMonth]} ${currYear}`}
        </p>
        <div className="icons-calendar flex items-start">
          <FiChevronLeft
            onClick={() => setCurrMonth(currMonth - 1)}
            className="block w-6 h-6 relative cursor-pointer ml-auto mr-12 "
          />
          <FiChevronRight
            onClick={() => setCurrMonth(currMonth + 1)}
            className="block w-6 h-6 cursor-pointer "
          />
        </div>
      </div>
      <div className="calendar-register relative grid  ">
        <ul className="calendar-weeks mb-[14px] flex list-none cursor-pointer gap-1">
          {weeks.map((day) => (
            <li
              key={day}
              className="calendar-weeks__list relative text-center font-medium min-w-[35px] h-[18px] text-4 flex items-center justify-center before:-z-20 before:absolute before:w-8 before:h-8 before:rounded-full before:-z-1 hover:before:bg-slate-900 hover:text-[#fff]"
            >
              {day}
            </li>
          ))}
        </ul>
        <ul className="calendar-days list-none grid gap-x-1 gap-y-2 grid-cols-7">
          {days.map((day, index) => (
            <Fragment key={index}>{day}</Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
