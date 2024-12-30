/* eslint-disable no-unused-vars */
import useFetch from "../../../../Hooks/UseFetch";
import { TeacherCard } from "../Teachers";

export default function WishList() {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools//grades/subject/Teacher/Teacher.json"
  );
  return (
    <div className="min-h-screen w-full pt-24 container md:w-custom-md xl:w-custom-xl mx-auto 3">
      <div>
        <h2 className="text-white  text-lg lg:text-4xl font-semibold pb-4 md:pb-10 xl:pb-20">
          Your Wishlist
        </h2>
      </div>

      <center>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 w-full">
          {data?.Teacher.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              gradeName={"grade 1"}
              schoolName={"IG"}
              subjectName={"math"}
              teacher={teacher}
              isSelecteted={true}
              image={teacher.imageUrl}
            />
          ))}
        </div>
      </center>
    </div>
  );
}
