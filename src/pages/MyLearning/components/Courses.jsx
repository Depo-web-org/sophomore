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
    <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-4">
      {courses.map((course) => (
        <div key={course.name}>
          <LearningCard course={course} />
        </div>
      ))}
    </div>
  );
}
