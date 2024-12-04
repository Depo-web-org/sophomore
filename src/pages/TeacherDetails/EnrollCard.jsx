export default function EnrollCard() {
  return (
    <div className="w-[376px] h-[406px] bg-slate-600 bg-opacity-25 border border-slate-700 rounded-lg flex flex-col justify-start items-start gap-2 p-4 shadow-[4px_4px_0px_0px_#F15C54]">
      <p className="text-[18px] font-semibold leading-[27px] text-primary">
        Grade 1 Math - Fundamentals of Numbers & Operations
      </p>{" "}
      <p className="text-[16px] pt-3 font-normal leading-[18.75px] text-[#FFFFFF66]">
        This course covers the essential concepts of mathematics for Grade 1
        students, focusing on basic arithmetic, problem-solving, and logical
        reasoning through engaging activities and interactive lessons.
      </p>
      <div className="flex flex-col items-start justify-start gap-4 pt-4">
        <div className="flex items-center justify-center gap-2">
          <img src="/TeacherDetails/Frame.svg" alt="svg" />
          <p className="text-[16px] font-normal leading-[18.75px] text-white">
            Till the end of semester
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <img src="/TeacherDetails/Frame (1).svg" alt="svg" />
          <p className="text-[16px] font-normal leading-[18.75px] text-white">
            Recorded Sessions{" "}
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 min-w-full">
          <button className="bg-primary text-white rounded-md p-2 w-[160px] ">
            Enroll now
          </button>
          <button className="bg-white text-primary rounded-md p-2 w-[160px] ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
