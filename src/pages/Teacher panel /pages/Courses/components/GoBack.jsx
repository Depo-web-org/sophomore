import React from 'react'
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const GoBack =  ({title}) => {
    const navigate = useNavigate();
  const goBack = ({Title}) => {
    navigate(-1); 
  };
    return (
      <div className=" flex justify-start items-center gap-x-2 ">
        <div
          className="cursor-pointer bg-white rounded-full p-2 "
          onClick={goBack}
        >
          <TiArrowBack className="text-2xl text-mainGray  " />
        </div>
  
        <h2 className="text-mainGray font-semibold text-4xl"> {title}</h2>
      </div>
    );
  }

export default GoBack