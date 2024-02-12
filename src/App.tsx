import { useEffect, useState } from "react";
import TableRow from "./components/TableRow/TableRow";
import { TailSpin } from "react-loader-spinner";

function App() {
  document.title = "Validation Status";

  const [activeBtn, setActiveBtn] = useState("validators");
  const [formData, setFormData] = useState({ status: "initial", data: [] });
  const [formattedData, setFormettedData] = useState({});

  const activeStyle = "bg-active ";
  const commonStyle = "bg-primary ";

  const fetchData = async () => {
    const baseUrl =
      import.meta.env.VITE_MY_API + "?sort_by=Date&sort_order=desc";

    const response = await fetch(baseUrl);
    const result = await response.json();

    if (response.ok) {
      const groupedData = {};

      result.map((entry) => {
        const date = entry["Date"];
        if (!groupedData[date]) {
          groupedData[date] = { arr: [], screens: 0 };
        }

        groupedData[date] = {
          arr: [...groupedData[date]["arr"], entry],
          screens: groupedData[date].screens + parseInt(entry["Total Screens"]),
        };
      });

      console.log("g", groupedData);
      setFormData({ status: "success", data: result });
      setFormettedData(groupedData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { status, data } = formData;

  return (
    <>
      <div className="max-h-screen  p-4 ">
        <div className="flex gap-3">
          <button
            onClick={() => setActiveBtn("annotators")}
            className={`${
              activeBtn === "annotators" ? activeStyle : commonStyle
            } p-2 px-4 rounded-md text-white/80 w-[33%] `}
            type="button"
          >
            Annotators
          </button>
          <button
            onClick={() => setActiveBtn("validators")}
            className={`${
              activeBtn === "validators" ? activeStyle : commonStyle
            } p-2 px-4 rounded-md text-white/80 w-[33%]`}
            type="button"
          >
            Validators
          </button>
          <button
            onClick={() => setActiveBtn("users")}
            className={`${
              activeBtn === "users" ? activeStyle : commonStyle
            } p-2 px-4 rounded-md text-white/80 w-[33%]`}
            type="button"
          >
            Users
          </button>
        </div>
        <div className="p-3 flex justify-center ">
          <button className="bg-slate-400 p-2 rounded-md font-bold">
            Add {activeBtn}
          </button>
        </div>
        <div className="w-[100%] p-1 py-3">
          <table className="table w-[100%] rounded-md overflow-hidden border-separate border-spacing-y-3 p-2">
            <thead className="table-header ">
              <tr className="table-row ">
                <th className="table-cell  rounded-l-md  bg-gray-300 p-2   w-[8%]">
                  S No
                </th>
                <th className="table-cell text-start bg-gray-300 w-[15%]">
                  Date
                </th>
                <th className="table-cell text-start bg-gray-300 w-[15%]">
                  Day
                </th>
                <th className="table-cell text-start bg-gray-300 w-[20%]">
                  Validators Count
                </th>
                <th className="table-cell text-start  bg-gray-300 w-[16%]">
                  Total Screens
                </th>
                <th className="table-cell text-start  bg-gray-300 w-[10%]">
                  Avg Count
                </th>
                <th className="table-cell rounded-r-md bg-gray-300 w-[10%]">
                  Action
                </th>
              </tr>
            </thead>
            {status === "success" && (
              <tbody className="border-spacing-12">
                {Object.entries(formattedData).map((each, ind) => (
                  <TableRow key={ind} each={each} ind={ind} />
                ))}
              </tbody>
            )}
          </table>
          {status === "initial" && (
            <div className="w-full flex justify-center">
              <TailSpin height={30} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
