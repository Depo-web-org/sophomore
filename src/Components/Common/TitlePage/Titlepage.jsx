
const TitlePage = ({name, items}) => {
  return (
    <>
    
    <div className="flex justify-between border-b border-white items-center pb-4 w-full  "> 
            <h2 className="text-white  text-3xl lg:text-4xl font-semibold  ">
           {name} 
          </h2>
          <p className="text-2xl text-white font-semibold">
         {items}  
         <span className="mx-1">
         {
            typeof(items) === "number"&& "items"
         }
         </span>
          </p>
            </div>
    </>
  )
}

export default TitlePage