import React from "react";
const EnrollmentProgress = () => {
  const progress = 50;
  const increaseValue = 50;

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-base font-normal text-[#666666] mb-4">
        New Enrollments
      </h1>

      <ProgressCircle progress={progress} />
      <ProgressInfo value={increaseValue} />
    </div>
  );
};

const ProgressCircle = ({ progress }) => {
  const rotation = (progress / 100) * 360;

  return (
    <div className="relative w-32 md:w-56 h-32 md:h-56">
      <div className="absolute w-full h-full rounded-full bg-gradient-to-b from-[#0DB4F3] to-[#737BFC]" />

      <svg
        className="relative w-full h-full progress-dot"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="282.6"
          strokeDashoffset={282.6 - (282.6 * progress) / 100}
          transform="rotate(-90 50 50)"
        />
        <circle
          cx={
            50 + 45 * Math.cos(((progress / 100) * 360 - 90) * (Math.PI / 180))
          }
          cy={
            50 + 45 * Math.sin(((progress / 100) * 360 - 90) * (Math.PI / 180))
          }
          r="3"
          fill="white"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-normal text-white">{progress}%</span>
      </div>
    </div>
  );
};

const ProgressInfo = ({ value }) => {
  return (
    <div className="mt-4 flex items-end gap-1">
      <span className="text-green-500 text-2xl">▲</span>
      <span className="text-base font-normal text-[#666666]">{value}</span>
    </div>
  );
};

export default EnrollmentProgress;
