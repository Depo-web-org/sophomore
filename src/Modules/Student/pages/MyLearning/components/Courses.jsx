import LearningCard from "./LearningCard";

const courses = [
  {
    name: "Math",
    grade: "Grade 1",
    image: "/images/MyLearning/subject1.webp",
    isFinished: false,
  },
  {
    name: "Science",
    grade: "Grade 2",
    image: "/images/MyLearning/subject2.webp",
    isFinished: true,
  },
  {
    name: "History",
    grade: "Grade 3",
    image: "/images/MyLearning/subject3.webp",
    isFinished: false,
  },
  {
    name: "English",
    grade: "Grade 4",
    image: "/images/MyLearning/subject1.webp",
    isFinished: true,
  },
  {
    name: "Geography",
    grade: "Grade 5",
    image: "/images/MyLearning/subject1.webp",
    isFinished: false,
  },
  {
    name: "Physics",
    grade: "Grade 6",
    image: "/images/MyLearning/subject2.webp",

    isFinished: true,
  },
  {
    name: "Chemistry",
    grade: "Grade 7",
    image: "/images/MyLearning/subject1.webp",
    isFinished: false,
  },
  {
    name: "Biology",
    grade: "Grade 8",
    image: "/images/MyLearning/subject4.webp",
    isFinished: true,
  },
  {
    name: "Computer Science",
    grade: "Grade 9",
    image: "/images/MyLearning/subject2.webp",
    isFinished: false,
  },
  {
    name: "Art",
    grade: "Grade 10",
    image: "/images/MyLearning/subject3.webp",
    isFinished: true,
  },
];

export default function Courses() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-4 ">
        <p className="text-2xl font-semibold text-white py-8">
          Not finished yet{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {courses
            .filter((cur) => cur.isFinished === true)
            .map((course) => (
              <LearningCard
                key={course.name}
                course={course}
                image={course.image}
                path={`/mylearning/course/${course.name}`}
              />
            ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 pt-2 border-t-[1px] border-gray-500">
        <p className="text-2xl font-semibold text-white py-8">
          {" "}
          Finished Courses{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {courses
            .filter((cur) => cur.isFinished === false)
            .map((course) => (
              <LearningCard
                key={course.name}
                course={course}
                image={course.image}
                path={`/mylearning/course/${course.name}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
