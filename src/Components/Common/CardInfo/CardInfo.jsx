import { Link } from "react-router-dom"

const CardInfo = ({item}) => {
  return (
    <>
     <div className="relative overflow-hidden mt-4 rounded-3xl group ">
              <Link to=''>
              <img
                src={item.img}
                alt={item.Name}
                className="w-full h-full object-fill  group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
                />
              <p className="absolute bottom-[5%] left-3 flex justify-center items-center text-xl lg:text-2xl
               xl:text-4xl font-bold text-white   group-hover:bottom-1/2  group-hover:translate-y-1/2 
               group-hover:left-1/2 group-hover:-translate-x-1/2 duration-300 transition-all ">
                {item.Name}
              </p>
                  </Link>
             
            </div>
    
    
    </>
  )
}

export default CardInfo



