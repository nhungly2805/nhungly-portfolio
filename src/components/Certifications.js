// src/components/Certifications.js

import React from "react";
import CertificationsData from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="py-10 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        {/* Tiêu đề của mục */}
        <div className="flex flex-col text-center mb-12 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2 text-gray-900">
            Certifications
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Professional Accreditations
          </p>
        </div>

        {/* Lưới chứa các thẻ chứng chỉ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CertificationsData.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-slate-100 rounded-lg p-6 flex items-start gap-5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src={cert.image}
                  alt={`${cert.issuer} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              {/* Thông tin chứng chỉ */}
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-gray-800">
                  {cert.title}
                </h4>
                <p className="text-base text-gray-600 font-medium mt-1">
                  {cert.issuer}
                </p>
                {/* ĐÃ XÓA PHẦN NGÀY CẤP TẠI ĐÂY */}
              </div>
              {/* ĐÃ XÓA NÚT VIEW CREDENTIAL TẠI ĐÂY */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;