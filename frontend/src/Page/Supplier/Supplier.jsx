import React, { useState } from "react";

function Supplier() {
  const [model, setmodel] = useState(false);
  return (
    <>
      <div className="flex flex-col max-w-[960px]">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Suppliers !</h1>
            <button
              type="button"
              onClick={() => setmodel(!model)}
              className="px-5 py-3 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#1E3A8A] hover:bg-blue-700 cursor-pointer"
            >
              Add Suppliers
            </button>
          </div>
        </div>
        {model ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b  ">
                <p className="text-[#0f111a] text-3xl font-bold leading-tight">
                  Add Supplier
                </p>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
                {/* Customer Name */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0f111a] pb-2">
                    Supplier Name
                  </span>
                  <input
                    placeholder="Enter customer name"
                    className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                  />
                </label>

                {/* Email */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0f111a] pb-2">
                    Email
                  </span>
                  <input
                    placeholder="Enter email address"
                    className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                  />
                </label>

                {/* Phone Number */}
                <label className="flex flex-col">
                  <span className="text-base font-semibold text-[#0f111a] pb-2">
                    Phone Number
                  </span>
                  <input
                    placeholder="Enter phone number"
                    className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                  />
                </label>

                {/* Address (span 2 columns) */}
                <label className="flex flex-col md:col-span-2">
                  <span className="text-base font-semibold text-[#0f111a] pb-2">
                    Address
                  </span>
                  <textarea
                    placeholder="Enter customer address"
                    className="min-h-[100px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa] resize-none"
                  />
                </label>

                {/* Notes (span 2 columns) */}
                <label className="flex flex-col md:col-span-2">
                  <span className="text-base font-semibold text-[#0f111a] pb-2">
                    Notes
                  </span>
                  <textarea
                    placeholder="Additional details about the customer"
                    className="min-h-[120px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-[#0f111a] focus:outline-none focus:ring-2 focus:ring-[#4264fa] resize-none"
                  />
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 px-6 py-6 border-t border-gray-200">
                <button
                  onClick={() => setmodel(!model)}
                  className="h-10 px-6 rounded-xl bg-[#EF4444] hover:bg-[#e08181]  text-white text-sm font-bold transition"
                >
                  Cancel
                </button>
                <button className="h-10 px-6 rounded-xl bg-[#10B981] hover:bg-[#88dfc2] text-white text-sm font-bold transition">
                  Add Supplier
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#56618f] flex border-none bg-[#e9eaf2] items-center justify-center pl-4 rounded-l-xl border-r-0"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
              <input
                placeholder="Search suppliers..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-full placeholder:text-[#56618f] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
        </div>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#d2d6e4] bg-[#f9f9fb]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f9f9fb]">
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Supplier ID
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Name
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Contact
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 px-4 py-3 text-left text-[#0f111a] w-[400px] text-sm font-medium leading-normal">
                    Products Supplied
                  </th>
                  <th className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 px-4 py-3 text-left text-[#0f111a] w-60  text-sm font-medium leading-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    SUP001
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Global Tech Supplies
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    contact@globaltech.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Electronics, Components
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit | Delete
                  </td>
                </tr>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    SUP002
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Industrial Parts Inc.
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    sales@industrialparts.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Machinery Parts, Tools
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit | Delete
                  </td>
                </tr>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    SUP003
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Chemical Solutions Ltd.
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    info@chemicalsolutions.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Chemicals, Raw Materials
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit | Delete
                  </td>
                </tr>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    SUP004
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Packaging Solutions Co.
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    support@packagingsolutions.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Packaging Materials
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit | Delete
                  </td>
                </tr>
                <tr className="border-t border-t-[#d2d6e4]">
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    SUP005
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                    Office Supplies Depot
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    orders@officesupplies.com
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480 h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                    Stationery, Office Equipment
                  </td>
                  <td className="table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600 h-[72px] px-4 py-2 w-60 text-[#56618f] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit | Delete
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n                          @container(max-width:120px){.table-8e74029e-851c-4cb2-8247-11a915621f7b-column-120{display: none;}}\n                @container(max-width:240px){.table-8e74029e-851c-4cb2-8247-11a915621f7b-column-240{display: none;}}\n                @container(max-width:360px){.table-8e74029e-851c-4cb2-8247-11a915621f7b-column-360{display: none;}}\n                @container(max-width:480px){.table-8e74029e-851c-4cb2-8247-11a915621f7b-column-480{display: none;}}\n                @container(max-width:600px){.table-8e74029e-851c-4cb2-8247-11a915621f7b-column-600{display: none;}}\n              ",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Supplier;
