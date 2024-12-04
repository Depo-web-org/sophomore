// import { staticSchools } from "../../Helpers/Static";
import { useParams } from "react-router-dom";

import CardInfo from "../../Components/Common/CardInfo/CardInfo";

const schoolGrades = [
  {
    name: "Elementary",
    grades: [
      {
        Name: "1 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
      {
        Name: "2 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
      {
        Name: "3 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
      {
        Name: "4 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
      {
        Name: "5 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
      {
        Name: "6 grade",
        img: "https://s3-alpha-sig.figma.com/img/4ed1/40cf/a12330ac5d478ccf9febe50af9514a05?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0xKSyYIxUcDJce3X9mkJ9A9ms-a7RcAUexWw8zm3va-O1Wm8knmRFyx-sc4lu8H0AurrOtgp0VAnpDdbMkh55gscFBg1nqRHzEkqCjy4H-S6FRn6HSd7~nW0JQ8InBT0QMcNhOsT4TV1dIZupL-xAtyjq5~IIssU1-jZYsjN7qRdX12fVpr2geC023AZw7QlTK-RJvdbr3AsXBVtA9K~8ElV-oyYtslnCO58F72tp9PqvvXeAZOcgz0pxR04ZW8bGMTl3P80zqCWJDN5GJImCCFzC0jw3JA7J3A-GSMxyYHDbi3hYXQ2K6jrM0m5-aKHIjvytTxZSUNt-QPoq7OTw__",
      },
    ],
  },
  {
    Name: "Middle School",
    grades: [
      { Name: "7 grade", img: "image_url_for_grade_7.jpg" },
      { Name: "8 grade", img: "image_url_for_grade_8.jpg" },
      { Name: "9 grade", img: "image_url_for_grade_9.jpg" },
    ],
  },
  {
    Name: "High School",
    grades: [
      { Name: "10 grade", img: "image_url_for_grade_10.jpg" },
      { Name: "11 grade", img: "image_url_for_grade_11.jpg" },
      { Name: "12 grade", img: "image_url_for_grade_12.jpg" },
    ],
  },
];

export const Grade = () => {
  const { schoolName } = useParams();
  console.log(schoolName);
  console.log(schoolGrades[0].Name, schoolGrades[0].grades[0].Name);
  return (
    <>
      <div className="bg-slate-900 min-h-screen pt-24 px-4 lg:px-[124px]">
        <div className="w-full">
          <p className="text-4xl text-white font-semibold leading-[54px] text-left">
            What is your current school grade?
          </p>
        </div>
        <div className="flex flex-col">
          {schoolGrades.map((grade) => (
            <div key={grade.Name}>
              <p className="text-white text-3xl">{grade.Name}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {grade.grades.map((gradeItem) => (
                  <CardInfo
                    key={gradeItem.img}
                    item={gradeItem}
                    path={`/school/${schoolName}/grade/${gradeItem.Name}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
