import React from "react";
import Popup from "reactjs-popup";

import "./index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdClose, IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

function ViewPopUp({ each }) {
  return (
    <Popup
      trigger={
        <button className="bg-slate-400 px-3 py-1 rounded text-xs font-bold hover:bg-slate-500">
          {" "}
          View{" "}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className=" ">
          <button
            className=" bg-blue-500 shadow-lg hover:bg-blue-600 p-[3px] rounded-full absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] "
            onClick={() => close()}
          >
            <IoMdClose size={17} color="#fff" />
          </button>
          <h1 className="border-[2px] rounded-md w-fit px-2 border-slate-400 mb-4">
            {each[0]}
          </h1>
          <div className="w-[100%]  ">
            <table className="table w-[100%] rounded-md overflow-hidden  p-1">
              <thead className="table-header ">
                <tr className="table-row ">
                  <th className="table-cell  rounded-l-md  bg-gray-300 p-2   ">
                    S No
                  </th>
                  <th className="table-cell text-start bg-gray-300 ">Name</th>
                  <th className="table-cell text-start bg-gray-300 ">Email</th>
                  <th className="table-cell text-start bg-gray-300 ">
                    Company
                  </th>
                  <th className="table-cell text-start  bg-gray-300 ">
                    Screens
                  </th>

                  <th className="table-cell rounded-r-md bg-gray-300 ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="border-spacing-12">
                {each[1].arr.map((e, index) => (
                  <tr key={index}>
                    <td className="p-2.5 text-center ">{index}</td>
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.Company}</td>
                    <td>{e["Total Screens"]}</td>
                    <td className="">
                      <div className="flex justify-center ">
                        <button
                          type="button"
                          className="p-1.5 transition-all hover:rounded-full bg-transparent hover:bg-gray-200 "
                        >
                          <MdOutlineEdit size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default ViewPopUp;
