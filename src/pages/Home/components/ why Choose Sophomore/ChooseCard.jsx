// export default function ChooseCard() {
//   const Sophomore = [
//     {
//       id: "tabs-11",
//       Name: "Personalized Learning Paths",
//       dec: "Customized curriculum based on your goals and current skill level",
//       //   img: " ",
//     },
//     {
//       id: "tabs-222",
//       Name: "Expert Instructors",
//     },
//     {
//       id: "tabs-333",
//       Name: "Interactive Content",
//     },
//   ];

//   return (
//     <section>
//       <div className="px-4">
//         <span className="block text-2xl lg:text-4xl font-semibold leading-10">
//           Why Choose
//         </span>
//         <span className="text-md font-bold cursor-pointer ">Sophomore</span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 cursor-pointer">
//         {Sophomore.map((item) => {
//           return (
//             <div key={item.id} className="relative overflow-hidden mt-4">
//               <img
//                 src={item.img}
//                 alt={item.Name}
//                 className="w-full h-64 object-cover rounded-md hover:scale-110 hover:opacity-30 transition duration-500 ease-in-out"
//               />

//               <span className="absolute bottom-6 left-3 flex justify-center items-center text-2xl lg:text-4xl font-bold text-white">
//                 {item.Name}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
