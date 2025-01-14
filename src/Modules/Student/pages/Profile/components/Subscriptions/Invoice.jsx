import React from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineClose } from "react-icons/md";

const Invoice = ({ toggleInvoice }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed top-28 mx-5 inset-0 z-50 max-w-1/2 h-[85%] bg-white overflow-x-auto rounded-lg shadow-lg font-sans">
        {/* Name and logo and Company data */}
        <div className="p-5">
          {/* Name and logo */}
          <MdOutlineClose
            className="size-6 text-red-500 hover:rotate-180 duration-500"
            onClick={toggleInvoice}
          />
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {t("invoice.title")}
            </h1>
            <img
              className="size-20"
              src="/public/images/logos/logo.svg"
              alt="logo.svg"
            />
          </div>

          {/* Company data */}
          <div className="flex justify-between">
            <div className="mb-8 w-1/2 h-32 text-gray-600">
              <h2 className="text-sm font-semibold text-gray-800">
                {t("invoice.bilento")}
              </h2>
              <p>{t("invoice.sophomore")}</p>
              <p>{t("invoice.businessAddress")}</p>
              <p>{t("invoice.cityCountry")}</p>
            </div>

            <div className="text-sm text-right w-1/2 h-32 text-gray-600">
              <p className="text-[#4C63ED] font-bold">
                {t("invoice.sophomore")}
              </p>
              <p>{t("invoice.cityState")}</p>
              <p>{t("invoice.cityCountry")}</p>
              <p>{t("invoice.taxId")}</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex p-3">
          <div className="flex flex-col justify-between items-start w-1/4">
            <p className="text-gray-700 font-semibold">
              {t("invoice.invoiceNumber")}:{" "}
              <span className="block text-gray-400 font-medium">A32224-01</span>
            </p>
            <p className="text-gray-700 font-semibold">
              {t("invoice.invoiceDate")}:{" "}
              <span className="block text-gray-400 font-medium">
                1 Aug. 2023
              </span>
            </p>
            <p className="text-gray-700 font-semibold">
              {t("invoice.reference")}:{" "}
              <span className="block text-gray-400 font-medium">IM-0527</span>
            </p>
            <p className="text-gray-700 font-semibold">
              {t("invoice.dueDate")}:{" "}
              <span className="block text-gray-400 font-medium">
                15 Aug. 2023
              </span>
            </p>
          </div>

          {/* Table */}
          <div className="w-3/4 h-full">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-gray-700 font-semibold border">
                    {t("invoice.services")}
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    {t("invoice.qty")}
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    {t("invoice.base")}
                  </th>
                  <th className="p-3 text-gray-700 font-semibold border">
                    {t("invoice.lineTotal")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">
                    {t("invoice.itemName")}
                  </td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">
                    {t("invoice.itemName")}
                  </td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $3,000.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">
                    {t("invoice.itemName")}
                  </td>
                  <td className="p-3 text-gray-600 border text-center">1</td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                  <td className="p-3 text-gray-600 border text-right">
                    $1,500.00
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600 border">
                    {t("invoice.itemName")}
                  </td>
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

            <div className="mt-52">
              <div className="flex justify-between px-4 text-gray-700 font-medium my-2 border-t-2">
                <div>
                  <p>{t("invoice.subtotal")}</p>
                  <p>{t("invoice.tax")}</p>
                </div>
                <div>
                  <p>$9,000.00</p>
                  <p>$900.00</p>
                </div>
              </div>

              <div className="flex justify-between px-4 font-medium text-[#4C63ED] my-2">
                <div>
                  <p>{t("invoice.totalDue")}</p>
                </div>
                <div>
                  <p>US$ 9,900.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center bg-slate-100 px-5 h-20">
          <p className="text-gray-600">{t("invoice.website")}</p>
          <p className="text-gray-600">{t("invoice.phone")}</p>
          <p className="text-gray-600">{t("invoice.email")}</p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
