import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Invoice = ({ toggleInvoice }) => {
  return (
    <>
      <div className="fixed top-28 left-40 right-40 z-50 overflow-y-auto h-[85%] bg-white overflow-hidden  rounded-lg shadow-lg max-w-4xl mx-auto font-sans">
        {/*  name and logo and Company data */}
        <div className=" p-5">
          {/*  name and logo */}
          <MdOutlineClose
            className="size-6 text-red-500 hover:rotate-180 duration-500"
            onClick={toggleInvoice}
          />
          <div className="flex justify-between items-center ">
            <h1 className="text-3xl font-bold  text-gray-800 mb-6">INVOICE</h1>
            <img
              className="size-20"
              src="/public/images/logos/logo.svg"
              alt=".."
            />
          </div>

          {/* Company data */}
          <div className="flex justify-between  ">
            <div className="mb-8 w-1/2 h-32 text-gray-600">
              <h2 className="text-sm font-semibold text-gray-800">Bilento</h2>
              <p>Sophomore</p>
              <p>Business address</p>
              <p>City, Country - 00000</p>
            </div>

            <div className=" text-sm text-right w-1/2 h-32 text-gray-600">
              <p className="text-[#4C63ED] font-bold">Sophomore</p>
              <p>City, State, IM-000 000</p>
              <p>City, Country-05050</p>
              <p>TAX ID: 00000012345678</p>
            </div>
          </div>
        </div>

        {/* table */}
        <div className="  flex p-3">
          <div className="flex flex-col justify-between  items-start w-1/4 ">
            <p className="text-gray-700 font-semibold">
              Invoice #:{" "}
              <span className="block text-gray-400 font-medium">
                {" "}
                A32224-01
              </span>
            </p>
            <p className="text-gray-700 font-semibold">
              Invoice date:{" "}
              <span className="block text-gray-400 font-medium">
                1 Aug. 2023
              </span>
            </p>
            <p className="text-gray-700 font-semibold">
              Reference:{" "}
              <span className="block text-gray-400 font-medium">IM-0527</span>
            </p>
            <p className="text-gray-700 font-semibold">
              Due date:{" "}
              <span className="block text-gray-400 font-medium">
                15 Aug. 2023
              </span>
            </p>
          </div>
          {/* table */}
          <div className="w-3/4 h-full">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-gray-700 font-semibold border">
                    Services
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    Qty
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    Base
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    Line total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">Item Name</td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">Item Name</td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">Item Name</td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">Item Name</td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-52 ">
              <div className=" flex justify-between px-4 text-gray-700 font-medium  my-2 border-t-2">
                <div>
                  <p>Subtotal</p>
                  <p>Tax (10%)</p>
                </div>
                <div>
                  <p>Subtotal</p>
                  <p>Tax (10%)</p>
                </div>
              </div>

              <div className="flex justify-between px-4 font-medium text-[#4C63ED] my-2">
                <div>
                  <p>Total due</p>
                </div>
                <div>
                  <p>US$ 9,900.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* foooter */}
        <div className="flex justify-between items-center bg-slate-100 px-5  h-20">
          <p className="text-gray-600">www.punta.hz</p>
          <p className="text-gray-600">+31 00030 00000</p>
          <p className="text-gray-600">info@punta.com</p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
