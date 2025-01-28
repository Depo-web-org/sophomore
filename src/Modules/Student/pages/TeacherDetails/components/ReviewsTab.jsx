import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa6";

export default function ReviewsTab() {
    const { t } = useTranslation();
  
  return (
    <section className="w-full flex flex-col items-start justify-start xl:pr-12   ">
      <div className="grid grid-cols-1 gap-8  ">
        <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto border-b border-gray-500">
          <div className="col-span-12 lg:col-span-10  ">
            <div className="flex  gap-4 lg:gap-6 justify-center lg:justify-start flex-wrap items-center w-full  ">
              <div className="w-full  flex justify-between gap-2">

              <img
                src="https://pagedone.io/asset/uploads/1704364459.png"
                alt="Robert image"
                className=" w-14 lg:w-16  h-14 lg:h-16 rounded-full object-cover"
              />
              <div className="flex justify-center flex-col xl:flex-row xl:justify-between  items-start xl:items-center gap-x-4   w-full">

              <p className="font-medium text-base lg:text-lg lg:leading-8 text-white ">
              Sara Gamal
                </p>

                <div className="flex items-center gap-1    ">
                  <FaStar className="text-secondary " />
                  <FaStar className="text-secondary " />
                  <FaStar className="text-secondary " />
                  <FaStar className="text-secondary " />
                  <FaStar className="text-secondary " />
                </div>
             
              </div>
              </div>
              <div className=" w-full">
               
                <p className="font-normal text-xs lg:text-sm   text-gray-400 mb-4 xl:pr-8 ">
                  {t("Reviews")}
                </p>
             
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6 ">
            <div className="flex items-center gap-2 lg:justify-between w-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2090)">
                  <path
                    d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2090">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2090)">
                  <path
                    d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2090">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2090)">
                  <path
                    d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2090">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2090)">
                  <path
                    d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2090">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clipPath="url(#clip0_13624_2090)">
                  <path
                    d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                    fill="#FBBF24"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13624_2090">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap ">
              Nov 01, 2023
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
