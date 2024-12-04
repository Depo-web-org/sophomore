// import { staticSchools } from "../../Helpers/Static";
import { useParams } from "react-router-dom";

import CardInfo from "../../Components/Common/CardInfo/CardInfo";

const schoolGrades = [
  {
    Name: "Elementary",
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
    Name: "Preparatory/Middle School",
    grades: [
      {
        Name: "7 grade",
        img: "https://s3-alpha-sig.figma.com/img/9c8a/52d9/40dc459658c7a9cce0362fa37ed69042?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeVx47-Tbm6xutpo2CbyNlhCdUb2ML3YMhRHwARuK8qDn-OYnAAO~27R88PMOaOnCeJkUf-SHf-RS10xaPGa5kFzqxs6L6EKU1j09udsUMcErHyuoCCTnvxmXDnTGutHfwRnwyrr7uDzhSAIYM6it5ewEdj33SZ7p6oik0ttdlKl-ViimIpI3H8dOjwWDvDmp9woPSWXg9vGcEARLscsixaGYLsLm0OSPHHytfDMBy9ZCpzTrc2Vs62wDKMnFuRmLFPBsqx6yV0y9F0w-sg3TLjENGgNUg3HTVm~ycXFVdoQhsdz3El1GZHG8T4m2wfmNjkXcAMVp2ALxIRJhV183Q__",
      },
      {
        Name: "8 grade",
        img: "https://s3-alpha-sig.figma.com/img/9c8a/52d9/40dc459658c7a9cce0362fa37ed69042?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeVx47-Tbm6xutpo2CbyNlhCdUb2ML3YMhRHwARuK8qDn-OYnAAO~27R88PMOaOnCeJkUf-SHf-RS10xaPGa5kFzqxs6L6EKU1j09udsUMcErHyuoCCTnvxmXDnTGutHfwRnwyrr7uDzhSAIYM6it5ewEdj33SZ7p6oik0ttdlKl-ViimIpI3H8dOjwWDvDmp9woPSWXg9vGcEARLscsixaGYLsLm0OSPHHytfDMBy9ZCpzTrc2Vs62wDKMnFuRmLFPBsqx6yV0y9F0w-sg3TLjENGgNUg3HTVm~ycXFVdoQhsdz3El1GZHG8T4m2wfmNjkXcAMVp2ALxIRJhV183Q__",
      },
      {
        Name: "9 grade",
        img: "https://s3-alpha-sig.figma.com/img/9c8a/52d9/40dc459658c7a9cce0362fa37ed69042?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JeVx47-Tbm6xutpo2CbyNlhCdUb2ML3YMhRHwARuK8qDn-OYnAAO~27R88PMOaOnCeJkUf-SHf-RS10xaPGa5kFzqxs6L6EKU1j09udsUMcErHyuoCCTnvxmXDnTGutHfwRnwyrr7uDzhSAIYM6it5ewEdj33SZ7p6oik0ttdlKl-ViimIpI3H8dOjwWDvDmp9woPSWXg9vGcEARLscsixaGYLsLm0OSPHHytfDMBy9ZCpzTrc2Vs62wDKMnFuRmLFPBsqx6yV0y9F0w-sg3TLjENGgNUg3HTVm~ycXFVdoQhsdz3El1GZHG8T4m2wfmNjkXcAMVp2ALxIRJhV183Q__",
      },
    ],
  },
  {
    Name: "Secondary/High School",
    grades: [
      {
        Name: "10 grade",
        img: "https://s3-alpha-sig.figma.com/img/cb58/45ee/4d2f30c9f5dee4515e0c9e6c2e391157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCCuPy3sxA32WVSvf9DIcwSsAF3e3~5oSIDi0aY8y0Wl~FxQtuHMa5Fs4qn2Vwb4Iu68pjz0O2SdN~d-RKfj4uviFkHOJQVWq~0J7C1u8AztCT8QDpyTOEXZSQmdYKspExhqOn1VBydHKkE6lE4cDjxCqpN6w-mzhaT7k0PbVBZTuq54SuanCOzbQJNTxRPbzmj43rxAsRXQrfN~rh9lz6W3EluXiKm9iTDyuMHojPNhHak75dOrF0SFBGRyBazn9dSDM~QGqolJpkIxlgaWgQm0WbP9wFjqI4wpUdEhE3JKUNJ33OOqdLfJ3zTEnIDRjIsnYOv-gcjc5Cb6MesCiw__",
      },
      {
        Name: "11 grade",
        img: "https://s3-alpha-sig.figma.com/img/cb58/45ee/4d2f30c9f5dee4515e0c9e6c2e391157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCCuPy3sxA32WVSvf9DIcwSsAF3e3~5oSIDi0aY8y0Wl~FxQtuHMa5Fs4qn2Vwb4Iu68pjz0O2SdN~d-RKfj4uviFkHOJQVWq~0J7C1u8AztCT8QDpyTOEXZSQmdYKspExhqOn1VBydHKkE6lE4cDjxCqpN6w-mzhaT7k0PbVBZTuq54SuanCOzbQJNTxRPbzmj43rxAsRXQrfN~rh9lz6W3EluXiKm9iTDyuMHojPNhHak75dOrF0SFBGRyBazn9dSDM~QGqolJpkIxlgaWgQm0WbP9wFjqI4wpUdEhE3JKUNJ33OOqdLfJ3zTEnIDRjIsnYOv-gcjc5Cb6MesCiw__",
      },
      {
        Name: "12 grade",
        img: "https://s3-alpha-sig.figma.com/img/cb58/45ee/4d2f30c9f5dee4515e0c9e6c2e391157?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCCuPy3sxA32WVSvf9DIcwSsAF3e3~5oSIDi0aY8y0Wl~FxQtuHMa5Fs4qn2Vwb4Iu68pjz0O2SdN~d-RKfj4uviFkHOJQVWq~0J7C1u8AztCT8QDpyTOEXZSQmdYKspExhqOn1VBydHKkE6lE4cDjxCqpN6w-mzhaT7k0PbVBZTuq54SuanCOzbQJNTxRPbzmj43rxAsRXQrfN~rh9lz6W3EluXiKm9iTDyuMHojPNhHak75dOrF0SFBGRyBazn9dSDM~QGqolJpkIxlgaWgQm0WbP9wFjqI4wpUdEhE3JKUNJ33OOqdLfJ3zTEnIDRjIsnYOv-gcjc5Cb6MesCiw__",
      },
    ],
  },
];

export const Grade = () => {
  const { schoolName } = useParams();
  return (
    <>
      <div className="bg-slate-900 min-h-screen pt-24 px-4 lg:px-[124px]">
        <div className="w-full">
          <p className="text-4xl text-white font-semibold leading-[54px] text-left">
            What is your current school grade?
          </p>
        </div>
        <div className="flex flex-col py-3">
          {schoolGrades.map((grade) => (
            <div className="pt-8" key={grade.Name}>
              <p className="text-white text-2xl font-semibold leading-[42px]">
                {grade.Name}
              </p>
              <div className="grid grid-cols-6  lg:grid-cols-12 gap-4 ">
                {grade.grades.map((gradeItem) => (
                  <div key={gradeItem.img} className="col-span-3 lg:col-span-4">
                    <CardInfo
                      item={gradeItem}
                      path={`/school/${schoolName}/grade/${gradeItem.Name}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
