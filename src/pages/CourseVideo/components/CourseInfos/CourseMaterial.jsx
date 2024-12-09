import React from "react";

export default function CourseMaterial() {
  return (
    <div className="flex flex-col items-start justify-start gap-8">
      <UnitTest />
      <Material />
    </div>
  );
}

function UnitTest() {
  return (
    <div className="flex flex-col md:items-start justify-center w-full gap-2">
      <p className="text-lg md:text-xl font-bold text-white">Unit Test</p>
      <div className="flex justify-between items-center gap-2 w-full border-[1px] p-4 rounded-lg">
        <p className="text-base md:text-lg font-semibold text-white">
          Unit Test
        </p>
        <button className="text-white text-base md:text-lg font-semibold  hover:text-gray-700 px-4 py-2 bg-primary rounded-md">
          Start Test
        </button>
      </div>
    </div>
  );
}

function Material() {
  const courseMaterials = [
    {
      name: "Introduction to Mathematics.pdf",
      url: "/path/to/Introduction-to-Mathematics.pdf",
    },
    {
      name: "Physics Fundamentals.pdf",
      url: "/path/to/Physics-Fundamentals.pdf",
    },
    {
      name: "Chemistry Basics.pdf",
      url: "/path/to/Chemistry-Basics.pdf",
    },
    {
      name: "Programming 101.pdf",
      url: "/path/to/Programming-101.pdf",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full gap-2">
        <p className="text-lg md:text-xl font-bold text-white">
          Course Material
        </p>
        {courseMaterials.map((material, index) => (
          <div
            key={index}
            className="flex justify-between items-center w-full gap-2 border-[1px] p-4 rounded-lg"
          >
            <p className="text-sm md:text-lg font-semibold text-white">
              {material.name}
            </p>
            <a
              href={material.url}
              download={material.name}
              className="text-white text-sm md:text-lg font-semibold hover:text-gray-700 px-4 py-2 bg-primary rounded-md"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
