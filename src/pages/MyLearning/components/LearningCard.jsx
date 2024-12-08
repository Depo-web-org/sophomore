export default function LearningCard() {
  return (
    <div>
      <div className="flex flex-col w-[286px] lg:w-[376px] min-h-[328px]">
        <div className="relative w-full min-h-[285px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/2ea7/3fb8/a57668df10fd5bd8d75fd99351111818?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxaenovmVtLN4bW97IpM5AYZteoE9lmgfLcvtPUkgDo-ZuPN8xcZydC6S5U6GHThkDgadlENVu0uSuj1ZYA4AVIEzwN~0NXER26JJGLgXoZTeY5rb0spIxCqntu5Gr7r17eveavSviN-WMOqr6u9FmGtEiCg81tGSwd99oW9kPoN4wbylqBN-wJUu7SyZdntYd7GtYhGqNL9TViZKC6K4OmG1~738gMjyrUJNw5Mgi2mb~CgSZqLRn~hLLnimM7EwLmtks6BDEuhDmTTy3tVtdzcywx87AkQX6OK7w3uLAxzh2ht6wp555Sn7Cko9Eeb8MUHW0cVMuYSaykDb6xIRQ__"
            alt="learning card"
            className="w-full min-h-[285px] object-cover rounded-lg"
          />
          <div className="absolute bottom-[-38px] left-[50%] translate-x-[-50%]">
            <img
              src="/MyLearning/Group.svg"
              alt="play"
              className="w-16 lg:w-20 h-20"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full pt-2">
          <p className="text-xl font-medium text-white">Math</p>
          <p className="text-base font-normal  text-[#FFFFFF57]">Grade 1</p>
        </div>
      </div>
    </div>
  );
}
