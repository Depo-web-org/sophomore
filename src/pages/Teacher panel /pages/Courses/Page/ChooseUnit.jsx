import React from 'react';
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import GoBack from '../components/GoBack';

const units = [
  "Unit 1",
  "Unit 2",
  "Unit 3",
  "Unit 4",
  "Unit 5",
  "Unit 1",
  "Unit 2",
  "Unit 3",
  "Unit 4",
  "Unit 5",
];



const ChooseUnit = () => {
  
  return (
    <>
      <div className=" w-full">

        
        {/* Head Title */}
        <GoBack  title={"Choose Unit"}/>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  my-8 w-full ">
          {units.map((i) => {
            return (
              <div
                key={i}
                className=" bg-mainGray   text-white h-32 flex items-center justify-center rounded-lg  font-semibold"
              >
                {i}
              </div>
            );
          })}
        </div>
        {/* Submit Button  */}
        <div className="w-full  flex items-center justify-end">
          <button className="bg-primary py-2 px-10 text-white rounded-md">
            Submit All
          </button>
        </div>
      </div>
    </>
  );
};

export default ChooseUnit;
