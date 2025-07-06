import React, { useState } from "react";
import AddOrder from "./AddOrder";

function Order() {
  const [model, setmodel] = useState(false);
  return (
    <div className="max-w-[960px]">
      <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl text-slate-900 font-bold">Order !</h1>
          <button
            type="button"
            onClick={() => setmodel(!model)}
            className="px-5 py-3 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#1E3A8A] hover:bg-blue-700 cursor-pointer"
          >
            Add Order
          </button>
        </div>
      </div>
      {model ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-5 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full rounded-xl max-w-3xl bg-white shadow-lg overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="flex justify-between p-4 border-b border-gray-200">
              <p className="text-[#0d0f1c] text-[32px] font-bold">New Order</p>
            </div>

            {/* Row 1: Customer & Order Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3">
              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Customer Name
                </p>
                <input
                  type="text"
                  placeholder="Enter Customer Name"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Order Date
                </p>
                <input
                  placeholder="MM/DD/YYYY"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
                />
              </label>
            </div>

            {/* Row 2: Product, Total Amount, Total Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3">
              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Product
                </p>
                <input
                  placeholder="Enter Product"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Total Amount
                </p>
                <input
                  placeholder="Enter amount"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
                />
              </label>

              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Total Quantity
                </p>
                <input
                  placeholder="Enter quantity"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-3">
              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Tax Rate
                </p>
                <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none">
                  <option value="10">10%</option>
                  <option value="18">18%</option>
                  <option value="28">28%</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Payment Method
                </p>
                <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none">
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                </select>
              </label>
              <button className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none">
                Pay Now
              </button>
            </div>

            {/* Row 3: Notes */}
            <div className="px-4 py-3">
              <label className="flex flex-col">
                <p className="text-base font-medium text-[#0d0f1c] pb-2">
                  Notes
                </p>
                <textarea
                  placeholder="Additional details"
                  className="min-h-36 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] placeholder:text-[#47579e] text-base text-[#0d0f1c] focus:outline-none resize-none"
                />
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end px-4 py-6 gap-4 border-t border-gray-200">
              <button
                onClick={() => setmodel(!model)}
                className="h-10 px-6 rounded-xl bg-[#EF4444] hover:bg-[#e08181] transition text-[white] text-sm font-bold"
              >
                Cancel
              </button>
              <button className="h-10 px-6 rounded-xl bg-[#10B981] hover:bg-[#88dfc2] transition text-white text-sm font-bold">
                Create Order
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Search */}
      <div className="px-5 py-3">
        <label className="flex flex-col min-w-72 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#47579e] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
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
              placeholder="Search orders"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#47579e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
      </div>

      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#ced3e9] bg-[#f8f9fc]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Customer
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Order Date
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Items
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-480 px-4 py-3 text-left text-[#0d0f1c] w-60 text-sm font-medium leading-normal">
                  Total Amount
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Tax Rate
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Status
                </th>
                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Payment Method
                </th>

                <th className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#ced3e9]">
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-120 text-center h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                  Liam Harper
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-240 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  2024-01-15
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-360 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  Apple iPhone 14 Pro Max
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-480 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  $110
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  10%
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  Paid
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  Cash
                </td>
                <td className="table-84600a55-e6cb-47d6-bdf5-b2c1c5d0edb8-column-600 text-center h-[72px] px-4 py-2 w-[400px] text-[#47579e] text-sm font-normal leading-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
