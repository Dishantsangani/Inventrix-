import React, { useState } from "react";
import Productsimg from "../../assets/productimage/product.jpg";
import Productsimg2 from "../../assets/productimage/laptop.jpg";
import Productsimg3 from "../../assets/productimage/ipad.jpeg";

function Products() {
  const [model, setmodel] = useState(false);

  return (
    <>
      <div className="layout-content-container flex flex-col max-w-[960px]">
        <div className="bg-white p-8 w-full rounded-lg max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl text-slate-900 font-bold">Product !</h1>
            <button
              type="button"
              onClick={() => setmodel(!model)}
              className="px-5 py-3 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-[#1E3A8A] hover:bg-blue-700 cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div
                className="text-[#47569e] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
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
                placeholder="Search products"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#47569e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
        </div>
        <div className="px-4 py-3 @container">
          <div className="flex overflow-hidden rounded-xl border border-[#ced2e9] bg-[#f8f9fc]">
            <table className="flex-1">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Img
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Product
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Quantity
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Price
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Tax rate
                  </th>
                  <th className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-t-[#ced2e9]">
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    <img
                      src={Productsimg}
                      alt="Product"
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                    Apple iphone 14
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    4
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    $110
                  </td>{" "}
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    10%
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
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
                <tr className="border-t border-t-[#ced2e9]">
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    <img
                      src={Productsimg2}
                      alt="Product"
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                    laptop
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    10
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    $130
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    12%
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
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
                <tr className="border-t border-t-[#ced2e9]">
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-120 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    <img
                      src={Productsimg3}
                      alt="Product"
                      className="w-10 h-10"
                    />
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-240 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                    Apple ipad
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-360 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    10
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    $160
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
                    18%
                  </td>
                  <td className="table-ed0a4a2e-b31f-4b65-9efe-4c152fdab854-column-480 h-[72px] px-4 py-2 w-[400px] text-[#47569e] text-sm font-normal leading-normal">
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

      {model ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full mt-5 px-6 py-6 max-w-[960px] bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-screen">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[#0d0f1c] text-3xl font-bold">
                Add New Product
              </h1>
            </div>

            {/* Grid Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Product Name
                </span>
                <input
                  placeholder="Enter product name"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                />
              </label>
              {/* Category */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Category
                </span>
                <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]">
                  <option value="">Select category</option>
                  <option value="two">Electronics</option>
                  <option value="three">Apparel</option>
                  <option value="four">Home & Garden</option>
                  <option value="five">Toys & Games</option>
                  <option value="six">Sports & Outdoors</option>
                  <option value="seven">Health & Beauty</option>
                  <option value="eight">Automotive</option>
                  <option value="nine">Other</option>
                </select>
              </label>
              {/* Supplier */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Supplier
                </span>
                <select className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]">
                  <option value="">Select supplier</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </label>
              {/* Purchase Price */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Purchase Price
                </span>
                <input
                  placeholder="Enter purchase price"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                />
              </label>
              {/* Selling Price */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Selling Price
                </span>
                <input
                  placeholder="Enter selling price"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                />
              </label>
              {/* Stock Quantity */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Stock Quantity
                </span>
                <input
                  placeholder="Enter stock quantity"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                />
              </label>
              {/* Product Image */}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Upload Product Image
                </span>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#4264fa] file:text-white hover:file:bg-[#2e4eda] cursor-pointer"
                />
              </label>{" "}
              <label className="flex flex-col">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Tax Rate
                </span>
                <input
                  placeholder="Enter Tax Rate"
                  className="h-14 p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa]"
                />
              </label>
              {/* Description (Full Width) */}
              <label className="flex flex-col md:col-span-2">
                <span className="text-base font-semibold text-[#0d0f1c] pb-2">
                  Product Description
                </span>
                <textarea
                  placeholder="Enter product description"
                  className="min-h-[120px] p-4 rounded-xl border border-[#ced3e9] bg-[#f8f9fc] shadow-sm placeholder:text-[#47579e] text-[#0d0f1c] focus:outline-none focus:ring-2 focus:ring-[#4264fa] resize-none"
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={() => setmodel(!model)}
                className="h-10 px-6 rounded-xl bg-[#EF4444] hover:bg-[#e08181] transition text-[white] text-sm font-bold"
              >
                Close
              </button>
              <button className="h-10 px-6 rounded-xl bg-[#10B981] hover:bg-[#88dfc2] transition text-white text-sm font-bold">
                Add Product
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Products;
