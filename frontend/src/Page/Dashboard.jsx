import React from "react";

function Dashboard() {
  return (
    <>
      <div className=" flex-col max-w-[960px]">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <h1 className="text-4xl text-center text-slate-900 font-bold">
            Welcome to Inventrix !
          </h1>
          <p className="mt-4 text-center text-sm text-slate-600 leading-relaxed">
            Your all-in-one inventory management system.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Products
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              180
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Orders
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              15
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Customers
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              8
            </p>
          </div>{" "}
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total Suppliers
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              8
            </p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border bg-white border-[#ced2e9]">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Total sales
            </p>
            <p className="text-[#0d0f1c] tracking-light text-2xl font-bold leading-tight">
              8
            </p>
          </div>
        </div>
        <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Recent Activity
        </h2>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#ced2e9] bg-[#f8f9fc]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Date
                  </th>
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Activity
                  </th>
                  <th className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#ced2e9]">
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    2024-03-15
                  </td>
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-240 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    Received Stock
                  </td>
                  <td className="table-f757c4c4-7e52-4383-8983-b90e147b47f9-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    100 units of Product A
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
