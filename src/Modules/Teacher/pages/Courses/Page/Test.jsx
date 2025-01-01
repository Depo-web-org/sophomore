import React from "react";
import { useForm } from "react-hook-form";
import GoBack from "../components/GoBack";

export default function Test() {
  return (
    <div className="w-full ">
      <GoBack title={"Q01"} />
      <TestIndex />
    </div>
  );
}

function TestIndex() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-6 md:pt-12 w-full">
      <p className="text-lg md:text-2xl font-medium text-[#4B5563]">
        Write your question title and answers{" "}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 md:gap-8 w-full pt-8"
      >
        <div className="flex flex-col w-full md:w-1/2">
          <label
            htmlFor="title"
            className="text-base font-normal text-[#00000078]"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
            {...register("title", { required: "Title is required" })} // Register field and validation
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}{" "}
          {/* Display error message */}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="correctAnswer"
              className="text-base font-normal text-[#00000078]"
            >
              Correct Answer
            </label>
            <input
              id="correctAnswer"
              name="correctAnswer"
              type="text"
              placeholder="Enter The Correct Answer"
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
              {...register("correctAnswer", {
                required: "Correct Answer is required",
              })} // Register field and validation
            />
            {errors.correctAnswer && (
              <p className="text-red-500">{errors.correctAnswer.message}</p>
            )}{" "}
            {/* Error for correct answer */}
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="answer2"
              className="text-base font-normal text-[#00000078]"
            >
              Answer 2
            </label>
            <input
              id="answer2"
              name="answer2"
              type="text"
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
              {...register("answer2", { required: "Answer 2 is required" })} // Register Answer 2
            />
            {errors.answer2 && (
              <p className="text-red-500">{errors.answer2.message}</p>
            )}{" "}
            {/* Error for Answer 2 */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="answer3"
              className="text-base font-normal text-[#00000078]"
            >
              Answer 3
            </label>
            <input
              id="answer3"
              name="answer3"
              type="text"
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
              {...register("answer3", { required: "Answer 3 is required" })} // Register Answer 3
            />
            {errors.answer3 && (
              <p className="text-red-500">{errors.answer3.message}</p>
            )}{" "}
            {/* Error for Answer 3 */}
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="answer4"
              className="text-base font-normal text-[#00000078]"
            >
              Answer 4
            </label>
            <input
              id="answer4"
              name="answer4"
              type="text"
              className="bg-[#E8E8E8] min-h-[51px] rounded-lg outline-none ring-0 py-1 px-2"
              {...register("answer4", { required: "Answer 4 is required" })} // Register Answer 4
            />
            {errors.answer4 && (
              <p className="text-red-500">{errors.answer4.message}</p>
            )}
            {/* Error for Answer 4 */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
          <button className="bg-primary rounded-md p-2 text-white text-lg font-semibold ">
            Add new Question
          </button>
          <button
            type="submit"
            className="bg-primary rounded-md p-2 text-white text-lg font-semibold "
          >
            Submit Test
          </button>
        </div>
      </form>
    </div>
  );
}
