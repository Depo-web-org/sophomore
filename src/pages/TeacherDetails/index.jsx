import EnrollCard from "./EnrollCard";
import TeacherInfos from "./TeacherInfos";

export default function TeacherDetails() {
  return (
    <div className="min-h-screen w-full pt-24 px-4 lg:px-[124px]">
      <div className="flex items-start gap-4 flex-col md:flex-row justify-between pt-24">
        <TeacherInfos />
        <EnrollCard />
      </div>
    </div>
  );
}

export function ReviewsTab() {
  return (
    <div className="text-white">
      <h2>Reviews</h2>
      <p>Student reviews will be displayed here.</p>
    </div>
  );
}
