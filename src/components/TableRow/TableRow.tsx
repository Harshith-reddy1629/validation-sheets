import React from "react";
import ViewPopUp from "../ViewPopUp/ViewPopUp";
import "reactjs-popup/dist/index.css";

const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sataurday",
];

function TableRow({ each, ind }) {
  const D = new Date(each[0]);
  return (
    <tr className="shadow-[0_0_5px_rgba(0,0,0,0.2)] " key={each[0]}>
      <td className="p-3 text-center">{ind + 1}</td>
      <td className="text-start">{each[0]}</td>
      <td className="text-start">{WeekDays[D.getDay()]}</td>
      <td className="text-start">{each[1].arr.length}</td>
      <td className="text-start">{each[1].screens}</td>
      <td className="text-start">
        {Math.round(each[1].screens / each[1].arr.length)}
      </td>
      <td className=" text-start">
        <div className="flex justify-center">
          <ViewPopUp each={each} />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
