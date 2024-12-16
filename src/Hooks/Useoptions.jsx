import { useState } from "react";

const Useoptions = () => {
  const options = [
    {
      id: "001",
      title: "What School type do you teach?",
      name: "e.g American",
      opations: [
        "American International School",
        "British Academy",
        "Canadian Learning Center",
      ],
    },
    {
      id: "002",
      title: "Choose the subject you are applying for",
      name: "e.g Science",
      opations: ["Mathematics", "Science", "History", "English Literature"],
    },
    {
      id: "003",
      title: "What Grades are you applying for?",
      name: "e.g grade 1",
      opations: [
        "Grade 1 - Grade 5 (Elementary)",
        "Grade 6 - Grade 8 (Middle School)",
        "Grade 9 - Grade 12 (High School)",
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

  return { options, allFilled, selectedValues, handleSelectChange };
};

export default Useoptions;
