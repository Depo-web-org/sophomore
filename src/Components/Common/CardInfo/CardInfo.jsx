import { Link } from "react-router-dom";



const CardInfo = ({ item, path }) => {
  return (
    <>
      <div className="relative overflow-hidden mt-2 lg:mt-4 rounded-3xl group ">
        <Link to={path}>
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-32 w-full sm:h-full object-cover group-hover:scale-110 group-hover:opacity-30 transition duration-500 ease-in-out"
          />
          <h4
            className="absolute bottom-[5%] left-[5%] text-nowrap text-base sm:text-xl lg:text-2xl
               xl:text-4xl font-bold text-white   group-hover:bottom-1/2  group-hover:translate-y-1/2 
               group-hover:left-1/2 group-hover:-translate-x-1/2 duration-300 transition-all "
          >
            {item.name}
          </h4>
        </Link>
      </div>
      
    </>
  );
};

export default CardInfo;
