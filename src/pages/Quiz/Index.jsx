import React, { useCallback, useState } from 'react'
import Timer from './Components/Timer'
import useFetch from '../../Hooks/UseFetch'
import { useEffect } from 'react'
import Questions from './Components/Questions/Questions'


const Quiz = () => {
    const {data}=useFetch('https://opentdb.com/api.php?amount=10&category=21&type=multiple')
    const [Answers, setAnswers] = useState([])
    const [trueAnswers, setTrueAnswers] = useState([])
const getTrueAnswers=useCallback(()=>{
  const correctAnswers=data?.results.map((item, index) => ({ [index + 1]: item.correct_answer }))
  setTrueAnswers(correctAnswers)
},[data])
useEffect(()=>{
      getTrueAnswers()
      console.log(trueAnswers )
    },[data])
  return (
    <>
<section className='relative pb-20'>
  <div  className='min-h-screen pt-32  container w-full md:w-custom-md xl:w-custom-xl mx-auto '>

    <div className='py-10'>


        <div className='text-white flex justify-between'>
            <p className='font-semibold text-3xl border-b'>
                Math Test
            </p>
              {/* <Timer/> */}
        </div>




{/* Quiz */}

<Questions studentAnswer={setAnswers} data={data}/>



</div>
  </div>



    </section>
    </>
  )
}

export default Quiz 