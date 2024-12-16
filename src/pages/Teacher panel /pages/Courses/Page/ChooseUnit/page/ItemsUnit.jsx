import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { Link } from 'react-router-dom';
import SubmitUnitsModel from './components/SubmitUnitsModel';

const units = [
  "Unit 1",
  "Unit 2",
  "Unit 3",
  "Unit 4",
  "Unit 5",
  "Unit 6",
  "Unit 7",
  "Unit 8",
  "Unit 9",
  "Unit 10",
];



const ItemsUnit = () => {
  const [modelOpen, setModelOpen] = useState()
  return (
    <>
      <div className=" w-full">

        
        {/* Head Title */}
        <GoBack  title={"Choose Unit"}/>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  my-8 w-full ">
          {units.map((i, index) => {
            return (
              <div
                key={i+index} 
                className=" bg-mainGray   text-white h-32  rounded-lg  font-semibold"
              >
                <Link to={`${i}`} className='h-full w-full flex items-center justify-center'>
                {i}
                </Link>
              </div>
            );
          })}
        </div>
        {/* Submit Button  */}
        <div className="w-full  flex items-center justify-end">
          <button onClick={()=>setModelOpen(true)} className="bg-primary py-2 px-10 text-white rounded-md">
            Submit All
          </button>
        </div>
        {
          modelOpen&&<SubmitUnitsModel setModelOpen={setModelOpen}/>
        }
      </div>
    </>
  );
};

export default ItemsUnit;
