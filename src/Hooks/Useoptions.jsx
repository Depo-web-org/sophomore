import { useState } from "react";

const Useoptions = () => {
  const options = [
    {
      id: "001",
      title: "What School type do you teach?",
      name: "e.g American",
      opations: [
        { id: "101", value: "American International School" },
        { id: "102", value: "British Academy" },
        { id: "103", value: "Canadian Learning Center" },
      ],
    },
    {
      id: "002",
      title: "What Grades are you applying for?",
      name: "e.g grade 1",
      opations: [
        { id: "201", value: "Grade 1 - Grade 5 (Elementary)" },
        { id: "202", value: "Grade 6 - Grade 8 (Middle School)" },
        { id: "203", value: "Grade 9 - Grade 12 (High School)" },
      ],
    },
    {
      id: "003",
      title: "Choose the subject you are applying for",
      name: "e.g Science",
      opations: [
        { id: "301", value: "Mathematics" },
        { id: "302", value: "Science" },
        { id: "303", value: "History" },
        { id: "304", value: "English Literature" },
      ],
    },
  ];
  const [selectedValues, setSelectedValues] = useState(["", "", ""]);

  const handleSelectChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  const allFilled = selectedValues.every((val) => val !== "");

  return { options,  allFilled, selectedValues, handleSelectChange };
};

export default Useoptions;
