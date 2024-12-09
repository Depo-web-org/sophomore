import LearningCard from "./LearningCard";

const courses = [
  {
    name: "Math",
    grade: "Grade 1",
    image: "https://example.com/math-image.jpg",
    isFinished: false,
  },
  {
    name: "Science",
    grade: "Grade 2",
    image: "https://example.com/science-image.jpg",
    isFinished: true,
  },
  {
    name: "History",
    grade: "Grade 3",
    image: "https://example.com/history-image.jpg",
    isFinished: false,
  },
  {
    name: "English",
    grade: "Grade 4",
    image: "https://example.com/english-image.jpg",
    isFinished: true,
  },
  {
    name: "Geography",
    grade: "Grade 5",
    image: "https://example.com/geography-image.jpg",
    isFinished: false,
  },
  {
    name: "Physics",
    grade: "Grade 6",
    image: "https://example.com/physics-image.jpg",
    isFinished: true,
  },
  {
    name: "Chemistry",
    grade: "Grade 7",
    image: "https://example.com/chemistry-image.jpg",
    isFinished: false,
  },
  {
    name: "Biology",
    grade: "Grade 8",
    image: "https://example.com/biology-image.jpg",
    isFinished: true,
  },
  {
    name: "Computer Science",
    grade: "Grade 9",
    image: "https://example.com/computer-science-image.jpg",
    isFinished: false,
  },
  {
    name: "Art",
    grade: "Grade 10",
    image: "https://example.com/art-image.jpg",
    isFinished: true,
  },
];

export default function Courses() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-4 ">
        <p className="text-2xl font-semibold text-white">Not finished yet</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {courses
            .filter((cur) => cur.isFinished === true)
            .map((course) => (
              <LearningCard
                key={course.name}
                course={course}
                path={`/mylearning/course/${course.name}`}
              />
            ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 pt-2 border-t-[1px] border-gray-500">
        <p className="text-2xl font-semibold text-white"> finished </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {courses
            .filter((cur) => cur.isFinished === false)
            .map((course) => (
              <LearningCard
                key={course.name}
                course={course}
                path={`/mylearning/course/${course.name}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
