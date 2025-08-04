import React from "react";
import EducationData from "../data/education";

const Education = () => {
  // Lấy thông tin học vấn đầu tiên từ mảng dữ liệu
  const education = EducationData[0];

  return (
    <section id="education" className="py-10 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        {/* Tiêu đề của mục */}
        <div className="flex flex-col text-center mb-8 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2 text-gray-900">
            Education
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            My Academic Background
          </p>
        </div>

        {/* Khung chứa thông tin */}
        <div className="max-w-4xl mx-auto bg-slate-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-start gap-6 shadow-md">
          
          {/* Phần bên trái: Thông tin chi tiết về bằng cấp */}
          <div className="flex-grow">
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {education.degree}
            </h4>
            <p className="text-base md:text-lg text-blue-600 font-semibold mb-4">
              {education.university}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 text-sm md:text-base gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>{education.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <ion-icon name="location-outline"></ion-icon>
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* Phần bên phải: Điểm CGPA */}
          <div className="flex-shrink-0">
            <div className="bg-slate-200 rounded-xl p-4 text-center w-28 h-28 flex flex-col justify-center items-center">
              <p className="text-4xl font-bold text-blue-600">
                {education.grade.split(" ")[0]}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {education.grade.split(" ")[1]}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;