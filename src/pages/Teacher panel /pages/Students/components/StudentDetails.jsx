import React from "react";
import { IoIosSearch } from "react-icons/io";

const students = [
  {
    name: "Rami Zayd",
    id: "#34152",
    enrollmentDate: "Jun 24, 2024",
    progress: 45,
    courseName: "Math, Grade2",
    progressColor: "bg-yellow-400",
  },
  {
    name: "Samir Khalid",
    id: "#21450",
    enrollmentDate: "Mar 10, 2024",
    progress: 60,
    courseName: "Math, Grade1",
    progressColor: "bg-red-400",
  },
  {
    name: "Jana Fadila",
    id: "#40152",
    enrollmentDate: "Nov 10, 2024",
    progress: 70,
    courseName: "Math, Grade2",
    progressColor: "bg-pink-400",
  },
  {
    name: "Layla Noor",
    id: "#81153",
    enrollmentDate: "Dec 20, 2024",
    progress: 20,
    courseName: "Math, Grade1",
    progressColor: "bg-green-400",
  },
  {
    name: "Ali Karim",
    id: "#24152",
    enrollmentDate: "Jul 25, 2024",
    progress: 90,
    courseName: "Math, Grade2",
    progressColor: "bg-purple-400",
  },
];

export default function StudentDetails() {
  return (
    <div className="bg-white rounded-2xl w-full p-6 overflow-x-auto">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center w-full">
        <p className="text-xl font-semibold text-primary">Student details</p>
        <div className="flex items-center flex-col md:flex-row justify-center md:justify-evenly w-full md:w-1/2 ">
          <div className="relative w-4/5 md:w-1/2">
            <input
              className="border-[1px] w-full border-gray-400 rounded-lg outline-none ring-0 py-1 px-2 pl-10" // Add padding to the left for the icon
              type="search"
              placeholder="Search"
            />
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />{" "}
          </div>
          <button className="text-lg text-primary underline hover:underline-offset-0 hover:bg-slate-50 rounded-lg p-2 ">
            View all
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="py-4 px-6">Student Name</th>
              <th className="py-4 px-6">Student ID</th>
              <th className="py-4 px-6">Enrollment Date</th>
              <th className="py-4 px-6">Progress</th>
              <th className="py-4 px-6">Course Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`${
                  index % 2 === 0 ? "bg-[#E6F1FD]" : "bg-[#C3CCE5]"
                }  border-b-4 border-white`}
              >
                <td className="py-4 px-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  {student.name}
                </td>
                <td className="py-4 px-6">{student.id}</td>
                <td className="py-4 px-6">{student.enrollmentDate}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white rounded-full ">
                      <div
                        className={`h-full ${student.progressColor} rounded-full`}
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {student.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">{student.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
