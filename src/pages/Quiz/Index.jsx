import React, { useCallback, useState } from 'react'
import useFetch from '../../Hooks/UseFetch'
import { useEffect } from 'react'
import Questions from './Components/Questions/Questions'
import Results from './Components/Questions/Results/Results'
import Timer from './Components/Timer/Timer'


const Quiz = () => {
  // get data 
    const {data ,success}=useFetch('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
    //get all answers
    const [Answers, setAnswers] = useState([])
    // Store all true answers
    const [trueAnswers, setTrueAnswers] = useState([])
    //status of exam
  const [isExamFinished, setIsExamFinished] = useState(false);

  //get all true answers 
const getTrueAnswers=useCallback(()=>{
  const correctAnswers=data?.results.map((item, index) => ({ [index + 1]: item.correct_answer }))
  setTrueAnswers(correctAnswers)
},[data])

useEffect(()=>{
      getTrueAnswers()
    },[data])
  return (
    <>
<section className='relative pb-20 xl:pb-0 '>
  <div  className='min-h-[calc(100vh-128px)] xl:min-h-screen pt-20 lg:pt-32  overflow-hidden   '>

    <div className='py-10'>


{
  !isExamFinished &&<div className=' container w-full md:w-custom-md xl:w-custom-xl mx-auto'>

  <div className='text-white flex justify-between'>
      <p className='font-semibold text-3xl border-b'>
          Math Test 
      </p>
      
      {/* timer start when get all question  */}
      {success &&<Timer  ExamFinished={setIsExamFinished} isExamFinished={isExamFinished}/> }
     
  </div>
</div> 
}




{/* Quiz */}

{ isExamFinished ?  
    <Results  Answers={Answers} TrueAnswers={trueAnswers}/> :
    <Questions studentAnswer={setAnswers} data={data} Answers={Answers} TrueAnswers={trueAnswers} setIsExamFinished={setIsExamFinished} />

}




</div>
  </div>



    </section>
    </>
  )
}

export default Quiz 



