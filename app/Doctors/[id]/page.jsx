"use client";

import { useParams } from "next/navigation";
import { MeetDoctors } from "../../Components/Constant";
import ScrollProgressBar from "../../Components/ScrollProgressBar"

const page = () => {
  const { id } = useParams();
  const doctor = MeetDoctors.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return <p className="text-center text-red-500">Doctor not found</p>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-10 p-6">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={doctor.img}
            alt={doctor.title}
            className="rounded-lg z-0 w-full h-auto md:max-h-[400px] object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800">{doctor.title}</h2>
          <p className="text-gray-600 my-4 leading-relaxed">
            Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It uses a
            dictionary of over 200 Latin words, combined with a handful of model
            sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from re
          </p>
          <div className="mb-6 space-y-3">
            {[
              { label: "Occupation", value: "Nephrology" },
              { label: "Experience", value: "20 years" },
              {
                label: "Certificates",
                value: "Robert L. Nobel Price, Edison Awards"
              },
              {
                label: "Skills",
                value: "Working with both children and adults"
              },
              { label: "Location", value: "380 Albert ST, Melbourne" },
              { label: "Phone", value: "+1 (230)-369-155-23" },
              { label: "Email", value: "jessica@joan.com" }
            ].map((item, index) => (
              <h5
                key={index}
                className="flex text-lg font-semibold text-gray-800"
              >
                {item.label}:
                <span className="ml-3 text-gray-500 text-base">
                  {item.value}
                </span>
              </h5>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Awards & Hours</h2>
          <p className="text-gray-600 my-4">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from re
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {[
              {
                img: "/qqq1.png",
                title: "Robert L. Nobel Price",
                desc: "Canadian Cancer Society"
              },
              {
                img: "/qqq5.png",
                title: "Edison Awards",
                desc: "Research in Developmental"
              }
            ].map((award, index) => (
              <div
                key={index}
                className="flex-1"
              >
                <img
                  src={award.img}
                  alt={award.title}
                  className="object-contain z-0 w-[20%] md:w-[30%] mb-3"
                />
                <h3 className="font-bold text-gray-800 text-lg">
                  {award.title}
                </h3>
                <p className="text-gray-500">{award.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-6">My Skills</h2>
          <p className="text-gray-600 mt-3">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate.
          </p>
          <div className="">
            <div className=" text-gray-500 text-lg flex px-5">
                <h4>Empathy</h4>
            </div>
            <ScrollProgressBar progressValue={95} />
          </div>
          <div className="">
            <div className=" text-gray-500 text-lg flex px-5">
                <h4>Technique</h4>
            </div>
            <ScrollProgressBar progressValue={84} />
          </div>
          <div className="">
            <div className=" text-gray-500 text-lg flex px-5">
                <h4>Operation</h4>
            </div>
            <ScrollProgressBar progressValue={80} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
