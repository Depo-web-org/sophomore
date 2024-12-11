import React, { useState, useEffect } from 'react'
import SkeletonLoader from './SkeletonLoader';

const Questions = ({ data, studentAnswer  , setIsExamFinished}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [randomAnswers, setRandomAnswers] = useState([]);

  const Question = data?.results[activeQuestionIndex];

  useEffect(() => {
    if (Question) {
      const answers = [...new Set([...Question.incorrect_answers, Question.correct_answer])];
      const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
      setRandomAnswers(shuffledAnswers);
      setSelectedAnswer(null);
    }
  }, [activeQuestionIndex, Question]);

  const addAnswer = (e) => {
    const textElement = e.currentTarget.querySelector('.answer-text');
    const answerText = textElement?.textContent;
    setSelectedAnswer(answerText);
    studentAnswer((prev) => {
      const newAnswers = [...prev];
      newAnswers[activeQuestionIndex] = { [activeQuestionIndex + 1]: answerText };
      return newAnswers;
    });
  };

  const handleContinue = () => {
    if (selectedAnswer) {
      if (activeQuestionIndex + 1 >= data?.results?.length) {
        setIsExamFinished(true);
      } else {
        setActiveQuestionIndex((prev) => prev + 1);
      }
    }
  };

  if (!Question) {
    return <SkeletonLoader />;
  } else {
    return (
      <>
        { (
          <>
            <div className='text-white my-10'>
              <p className='text-center font-semibold text-xl xl:text-2xl'>
                <span>{activeQuestionIndex + 1} - </span> {Question.question}
              </p>
              <div className='flex flex-col items-center justify-center my-5 gap-y-2'>
                {randomAnswers.map((ques, index) => {
                  const isSelected = ques === selectedAnswer;
                  return (
                    <div
                      key={ques + index}
                      onClick={(e) => addAnswer(e)}
                      className={`h-14 w-4/5 xl:w-1/2 ${isSelected ? 'bg-primary' : 'bg-white hover:bg-primary'} group cursor-pointer transition-all duration-500 rounded-md flex items-center justify-start px-5 text-black font-semibold gap-x-5`}
                    >
                      <span className={`${isSelected ? 'bg-white text-black' : 'bg-zinc-300 group-hover:bg-white group-hover:text-black'} px-3 py-1 rounded-full`}>
                        {index + 1}
                      </span>
                      <span className={`answer-text ${isSelected ? 'text-white' : 'group-hover:text-white'}`}>
                        {ques}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='absolute w-full bg-white z-10 h-20 left-0 bottom-0 flex items-center justify-center gap-x-5'>
              <div className="h-auto w-1/5 bg-neutral-200 rounded-full relative">
                <div
                  className="h-3 bg-emerald-700 rounded-full"
                  style={{ width: `${((activeQuestionIndex + 1) / data?.results?.length) * 100}%` }}
                />
              </div>
              <span>
                {activeQuestionIndex + 1}/{data?.results?.length}
              </span>
              <button
                onClick={handleContinue}
                disabled={!selectedAnswer}
                className={`${selectedAnswer ? "bg-secondary" : "bg-zinc-500"} text-white rounded-lg py-3 px-8`}
              >
                {activeQuestionIndex + 1 === data?.results?.length ? "Finish" : "Continue"}
              </button>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Questions;

