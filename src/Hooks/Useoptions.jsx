import { useState } from "react";

const Useoptions = () => {

  const [selectedValues, setSelectedValues] = useState(["", "", ""]);

  const handleSelectChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  const allFilled = selectedValues.every((val) => val !== "");

  return {   allFilled, selectedValues, handleSelectChange };
};

export default Useoptions;
