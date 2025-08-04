import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        {/* Giữ nguyên phần tiêu đề */}
        <div className="flex flex-col text-center mb-10 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2 text-gray-900">
            Skills
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Technical Expertise
          </p>
        </div>

        {/* Bố cục mới cho các kỹ năng */}
        <div className="space-y-12">
          {SkillsData.map((category, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000">
              {/* Tên danh mục */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
                {category.category}
              </h3>
              {/* Lưới chứa các icon kỹ năng */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center w-24"
                    data-aos="zoom-in"
                    data-aos-delay={100 * skillIndex} // Hiệu ứng xuất hiện lần lượt
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="max-w-full max-h-full object-contain transition duration-300 hover:scale-110"
                      />
                    </div>
                    <p className="mt-2 font-medium text-gray-700 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;