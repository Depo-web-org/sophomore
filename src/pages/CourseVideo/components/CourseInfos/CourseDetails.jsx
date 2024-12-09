import { HiInformationCircle } from "react-icons/hi";

export default function CourseDetails() {
  return (
    <div className="flex items-start justify-start gap-2">
      <div>
        <HiInformationCircle className="text-lg h-8 w-8 text-secondary" />
      </div>
      <p className="text-lg font-semibold text-white">
        Dive into the world of mathematics with this beginner-friendly course
        designed to build a strong foundation. Explore essential topics like
        basic arithmetic, fractions, decimals, and an introduction to algebra
        and geometry. Through engaging lessons and practical examples, you’ll
        develop problem-solving skills and gain confidence in tackling everyday
        math challenges. Perfect for learners starting their math journey or
        looking to strengthen their basics! 4o
      </p>
    </div>
  );
}
