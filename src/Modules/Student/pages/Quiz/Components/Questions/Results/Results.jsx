import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import {  FaRegCircle } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
const compareAnswers = (Answers, trueAnswers) => {
  let result = Answers.map((answer, index) => {
    const trueAnswer = trueAnswers[index];
    const isCorrect = Object.entries(answer).every(([key, value]) => {
      return trueAnswer[key] === value;
    });
    return {
      result: isCorrect,
      answer: Object.values(answer).toString(),
      trueAnswer: Object.values(trueAnswer).toString(),
    };
  });

  const totalCorrect = result.filter((r) => r.result).length;
  const totalQuestions = trueAnswers.length;
  const successPercentage = (totalCorrect / totalQuestions) * 100;
  if (result.length === 0) {
    result = [
      {
        answer: "You didn't answer the questions",
        result: false,
        trueAnswer: "",
      },
    ];
  }
  return {
    result,
    totalCorrect: totalCorrect || 0,
    totalQuestions,
    successPercentage: (successPercentage || 0).toFixed(0),
  };
};

const Results = ({ Answers, TrueAnswers }) => {
    const {i18n}=useTranslation()
  
  const result = compareAnswers(Answers, TrueAnswers);
  return (
    <div className="relative h-screen  ">
      
<FaRegCircle className=" text-9xl lg:text-[300px] text-primary absolute -left-10" />
<FaRegCircle className=" text-9xl lg:text-[300px] text-secondary absolute bottom-1/4 -right-10" />
      <div className="absolute top-10 md:top-0 left-1/2 transform -translate-x-1/2 w-full container   ">
        <div className="text-white  w-full lg:w-full mx-auto text-center font-semibold">
          <p className="text-8xl pb-2">{result.successPercentage}%</p>
          <p className="text-2xl sm:text-3xl  ">
          {
            i18n.language === "ar"? "لقد حصلت علي ": "You got"
          }    {result.totalCorrect}/{result.totalQuestions} {
            i18n.language === "ar"? "  من الأسئلة ": "Questions"
          } 
          </p>
        </div>

        <div dir='ltr' className="mx-auto font-bold rounded  text-white  w-full lg:min-w-96 h-auto py-5   mb-5 lg:mb-10 mt-3 lg:mt-5 text-center flex justify-center items-center ">
          <div>
            {result?.result.map((answers) => {
              return (
                <div
                  key={answers.answer}
                  className="flex justify-items-center items-center flex-wrap"
                >
                  {answers.result ? (
                    <AiFillCheckCircle className="text-green-400 w-6 h-6 my-2 me-1" />
                  ) : (
                    <AiFillCloseCircle className="text-red-500 w-6 h-6 my-2 me-1" />
                  )}
                  -<p className="text-sm lg:text-base mx-1"> {answers.answer}</p>{" "}
                  <p className="text-sm lg:text-base mx-1 text-green-400"> {answers.trueAnswer}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Link to={"/mylearning"}>
          <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="mx-auto block rounded buttonHover px-4 lg:px-6 pb-2 pt-2.5 text-base lg:text-lg font-semibold text-white"
          >
          {
            i18n.language === "ar"? "تعليمي": "My learning"
          }
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
