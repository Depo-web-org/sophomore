import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function ModalUnits({ setIsModalUnitsOpen, handleButtonClick }) {
  const [selectedUnits, setSelectedUnits] = useState([]);
  const unitPrice = 300;

  const handleUnitToggle = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  const calculateTotal = () => {
    return selectedUnits.length * unitPrice;
  };

  return (
    <div
      onClick={() => setIsModalUnitsOpen(false)}
      className="fixed inset-0 bg-slate-600 bg-opacity-50 flex items-center justify-center"
    >
      <div
        className="bg-slate-900 rounded-lg  p-6 w-[90%] max-w-md shadow-[4px_4px_0px_0px_#F15C54]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-white">Choose Your Package</h1>
          <button
            onClick={() => setIsModalUnitsOpen(false)}
            className="text-white hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="space-y-4">
          {["Unit 1", "Unit 2", "Unit 3", "Unit 4"].map((unit) => (
            <label
              key={unit}
              className="flex items-center space-x-3 bg-slate-900 rounded-lg px-4 py-2 text-primary hover:bg-slate-700 transition"
            >
              <input
                type="checkbox"
                className="w-5 h-5 text-primary border-gray-300 rounded checked:accent-primary"
                checked={selectedUnits.includes(unit)}
                onChange={() => handleUnitToggle(unit)}
              />
              <span className="text-white">{unit}</span>
            </label>
          ))}
        </div>

        <div className="mt-6 text-lg font-bold text-white">
          Total: <span className="text-primary">{calculateTotal()} LE</span>
        </div>

        <button
          className="mt-6 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg w-full transition duration-200"
          onClick={handleButtonClick}
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
}
