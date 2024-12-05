import Breadcrumbs from "../../Components/Common/CardInfo/Breadcrumbs";
import EnrollCard from "./EnrollCard";
import TeacherInfos from "./TeacherInfos";

export default function TeacherDetails() {
  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3">
      <Breadcrumbs />
      <div className="flex items-start gap-4 flex-col lg:flex-row justify-between pt-24">
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
