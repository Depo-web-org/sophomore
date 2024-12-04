import useFetch from "../../Hooks/UseFetch";

const Teachers = () => {
  const { data, error, loading } = useFetch(
    "https://os1907.github.io/Schools//grades/subject/Teacher/Teacher.json"
  );
  console.log(data, error, loading);
  return (
    <>
      <section className="min-h-screen w-full pt-24 px-4 lg:px-[124px]"></section>
    </>
  );
};

export default Teachers;
