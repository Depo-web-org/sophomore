import React from "react";

export default function Subscriptions() {
  const Subscriptions = [
    {
      id: "0987",
      name: "PMath ",
      grade: "Grade 1",
      img: "https://s3-alpha-sig.figma.com/img/2ea7/3fb8/a57668df10fd5bd8d75fd99351111818?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k2SXFfG6AGXGqit3edm-4PzFommVRtau~mGfejL~LWCtV5XSHKMMK3AgM2aDiS67sWsANL-hooPqDmteCkGbmMYJXNkXjdvu5FtBmlVr6rd2No8sGeewDRf2YUdWwB0tyhxuWiO76kKwJdXDPLeHsJl8iNwy35piYMqohPkz5-RBu7sn6XDKH16r8YFaIDYHHZ6lBNR~I~ZkaHW2UAyNYPWFjTuQp3M538SnMyqRvJTixZ3c4gOePjARjT6wq~iuJ6jRcHu4S~0NGGwYsDazuimTGcWx1gXWGjSiAT4liWNkBxGHuEMuDfJsntzrx3TtTkx8ktiBSqX4v3YOmBxWXw__",
    },
    {
      id: "7654",
      name: "French",
      grade: "Grade 2",
      img: "https://s3-alpha-sig.figma.com/img/6a06/0f35/0a9f3673e9ba6ed54fbc216cd955860f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kS22EL5wzW2nW~EBwCqw3Y9R22Mwa7a1A5w12bGl15LwNEljZWqlAY7drRud-2vtNPzlIJsJFkaPcLj2wchxXN7aV6Tz9V-bd9PjSVZvm1bSR2q052dQbUUkYUa8KQeeQmk~xWN5GVrXzjifuRMqN6bJvynqiztqjZgBQ0JeI6Xf1N1-SiA8IxoNAo2e3gkETlCTSw5GAT2FyyjhycyWFnfYMCuUK7Cq-Ko68blsj-UEB8aKLi~V1lmMxOxFp2SajXPhxnGXaS7ObteIf1XBzd7VQaOdW87e1CK5FSFlcpsfKZe5e6rbt2UbFsoCDFR9ssB0ydF0KXK9oMtidwGi-w__",
    },
  ];

  return (
    <>
      {/* top Text */}
      <div>
        <div className="flex justify-between text-white font-bold">
          <p>Subscriptions</p>
          <p>Available until</p>
        </div>
        <div className="flex justify-between text-sm my-2 text-gray-500 font-normal">
          <p>Subscriptions</p>
          <p>Available until</p>
        </div>
      </div>

      {/* Card Subscriptions*/}

      <div className="grid grid-cols-2 gap-5 pt-10">
        {Subscriptions.map((item) => {
          return (
            <>
              <div className="flex flex-col w-[auto] min-h-[328px]">
                <div className="relative w-full min-h-[285px]">
                  <img
                    src={item.img}
                    alt="learning card"
                    className="w-full min-h-[285px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full pt-2">
                  <p className="text-xl font-medium text-white">{item.name}</p>
                  <p className="text-base font-normal text-[#FFFFFF57]">
                    {item.grade}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
