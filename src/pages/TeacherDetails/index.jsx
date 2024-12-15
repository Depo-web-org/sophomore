
import Breadcrumbs from "../../Components/Common/BreadCrumbs/Breadcrumbs";
import EnrollCard from "./components/EnrollCard";
import TeacherInfos from "./components/TeacherInfos";


export default function TeacherDetails() {
 
  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3">
      <Breadcrumbs />
      <div className="flex items-start gap-4 flex-col lg:flex-row justify-between pt-8">
        <TeacherInfos />
        <EnrollCard />
      </div>
    </div>
  );
}
