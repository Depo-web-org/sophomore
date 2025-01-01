import { IoClose } from "react-icons/io5";
export default function ModalOops({ setIsModalOopsOpen }) {
  return (
    <div
      onClick={() => setIsModalOopsOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center px-4"
    >
      <div
        className="bg-slate-900  rounded-lg p-6 min-w-[280px] border-r-2 border-b-2 border-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-end justify-end">
          <button
            onClick={() => setIsModalOopsOpen(false)}
            className="text-white hover:text-gray-400"
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <p className="mb-4 text-white text-2xl font-bold">Oops!</p>
          <span className="text-base font-normal leading-6 text-center text-[#72777A]">
            Please login to Continue
          </span>
          <button className="bg-primary text-white px-4 py-2 min-w-[279px] rounded-full">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
