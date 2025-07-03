import React from "react";

function Navbar() {
  return (
    <div>
      <header className="flex items-center justify-around whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
        <div className="flex items-center gap-36">
          <div className="flex items-center gap-4 text-[#0d0f1c]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
              Inventrix
            </h2>
          </div>
          <div className="flex items-center gap-28">
            <a
              className="text-[#0d0f1c] text-sm font-medium leading-normal"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-[#0d0f1c] text-sm font-medium leading-normal"
              href="#"
            >
              Products
            </a>
            <a
              className="text-[#0d0f1c] text-sm font-medium leading-normal"
              href="#"
            >
              Orders
            </a>
            <a
              className="text-[#0d0f1c] text-sm font-medium leading-normal"
              href="#"
            >
              Suppliers
            </a>
            <a
              className="text-[#0d0f1c] text-sm font-medium leading-normal"
              href="#"
            >
              Reports
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <label className="flex flex-col min-w-40 ml-5 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div
                className="text-[#47569e] flex border-none bg-[#e6e9f4] items-center justify-center pl-4 rounded-l-lg border-r-0"
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
                placeholder="Search"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-[#e6e9f4] focus:border-none h-full placeholder:text-[#47569e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                defaultValue=""
              />
            </div>
          </label>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCEMkHq5Hm1raHMQFWMpnVPIyKqEPXlEt86emFG7IPdY-V_kyCkztIufjusopRyVjBra-HLdYyFwf2KKnZCaIQtEiBudUUt7wUO8gj7zaDjmtKgMgZV3jquHOklJIpP5ejtOIIq8eFRwsjx2e2dEbvyHwhyCfJMJPpF6f6YWBo5kLfoQsMV-VvcXxpQxBh9EXwyz2RLskNAEw7LYD09gQEZ-aa3bwCHjtUD2yuUbLdNYcmmnlmPn7z_hLFfuzLXvoBngDU9Xmw_qw5")',
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
