
const LoadingAnimation = () => {
  return (
    <>
    <div className="flex flex-row gap-2 justify-center">
                <div className="size-4 rounded-full bg-white
        animate-bounce [animation-delay:.7s] transition-all"></div>
<div className="size-4 rounded-full bg-white
   animate-bounce [animation-delay:.3s]"></div>
  <div className="size-4 rounded-full bg-white
   animate-bounce [animation-delay:.7s]"></div>
</div>
        </>
  )
}

export default LoadingAnimation
