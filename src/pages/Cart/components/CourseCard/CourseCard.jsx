import { MdOutlineDeleteOutline } from 'react-icons/md'
import courseSVG from '/public/Cart/Course.svg'

const CourseCard = ({course}) => {
  return (
    <>
    
    <div  className='bg-dark my-1 rounded-ee-full rounded-tt-full rounded-r-full h-32 shadow-sm shadow-gray-600 flex items-center  '>
  <div className=' w-full md:w-custom-md  mx-auto flex  justify-between  '>
    {/* Div which have SVG and Course information */}
    <div className='flex  gap-x-3 items-center '>

    <div>
<img src={courseSVG} alt="Grade" />
    </div>
    <div className='text-white'>
      <p className='text-2xl font-medium'>
        {course.subject}
      </p>
      <p className='font-medium  '>
        {course.teacher}

      </p>
      <span className='text-gray-300'>
        {course.grade}

      </span>
    </div>
    </div>
    {/* Price and Delete */}
    <div className='flex flex-col items-center justify-between '>

    <span className='text-white text-xl font-medium block'>
     {course.price}
    </span>
    <span onClick={()=> console.log(course)} className='text-red-700 text-4xl mb-3'>
    <MdOutlineDeleteOutline />
    </span>
    
    </div>




  </div>
        </div> 
    
    
    
    
    
    
    
    
    </>
  )
}

export default CourseCard