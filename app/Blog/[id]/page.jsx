"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { DataDoctors } from "../../Components/Constant";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = DataDoctors.find((doc) => doc.id.toString() === id);

  if (!doctor) {
    return <p className="text-center text-red-500">Doctor not found</p>;
  }

  const [visibleCards, setVisibleCards] = useState(3); 

  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (   
    <>
      <div className="bg-bg flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[10%] text-center py-7 md:px-0 px-2">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-text w-full md:w-[40%]">
          Insights into Modern Medicine: Exploring the Latest Breakthroughs
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <img
            src="/www1.png"
            alt="Client"
            className="w-12 h-12 sm:w-auto sm:h-auto"
          />
          <div className="text-center sm:text-left">
            <h6 className="text-lg font-bold">Silicaman</h6>
            <p className="text-gray-600">Author</p>
          </div>
        </div>
      </div>

      <div className=" max-w-3xl mx-auto mt-10 p-5">
        <img
          src={doctor.img}
          alt={doctor.title}
          className="w-[100%] h-fit z-0 rounded-lg"
        />
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="w-full">
            <h1 className="text-2xl text-text font-bold">{doctor.title}</h1>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the
            </p>

            <p className="flex items-center mt-10 text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Vivamus eu lacus scelerisque, placerat commodo lectus.
            </p>
            <p className="flex items-center mt-2 text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Etiam etanteatex porta fringilla.
            </p>
            <p className="flex items-center mt-2 text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Nullam dignissim sem eu magna aliquet.
            </p>

            <img
              className="mt-5 w-full rounded-lg"
              src="/image89.png"
              alt="Doctors"
            />

            <p className="my-5 text-gray-600">
              Unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the
            </p>

            <div className="border-l-4 pl-4 text-lg font-bold border-blue-600">
              <h3>
                We are a dedicated team of passionate product
                managers,developers, UX/UI designers, QA engineers experts
                helping businesses from new startups
              </h3>
            </div>

            <p className="mt-5 text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable making this the first true generator on the
              Internet. It uses a dictionary
            </p>

            <div className="border-b border-green-200 mt-5"></div>

            <div className="flex flex-wrap gap-2 mt-4">
              <h2 className="font-bold text-lg">Tags:</h2>
              <h4 className="text-button py-1 px-3 bg-blue-300 rounded-lg">
                Trends
              </h4>
              <h4 className="text-button py-1 px-3 bg-blue-300 rounded-lg">
                Design
              </h4>
              <h4 className="text-button py-1 px-3 bg-blue-300 rounded-lg">
                Research
              </h4>
            </div>

            <div className="border-b border-green-200 mt-5"></div>
          </div>

          <div className="md:shadow-lg rounded-2xl w-full md:w-auto h-fit mt-5 p-3">
            <h4 className="text-2xl font-bold">Share</h4>
            <div className="grid gap-3">
              <button className="bg-blue-600 hover:bg-blue-800 py-1 px-3 rounded-lg flex items-center text-white">
                <FaFacebookF className="text-2xl mr-2" />
                Facebook
              </button>
              <button className="bg-cyan-600 hover:bg-cyan-800 py-1 px-3 rounded-lg flex items-center text-white">
                <FaLinkedinIn className="text-2xl mr-2" />
                LinkedIn
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-lg flex items-center text-white">
                <CiTwitter className="text-2xl mr-2" />
                Twitter
              </button>
            </div>

            <div className="border-b border-gray-300 my-4"></div>

            <h3 className="text-lg font-bold">Join our newsletter</h3>
            <form action="">
              <input
                className="border border-button py-1 px-2 rounded-lg text-button w-full focus:border-2 focus:border-button outline-none"
                type="text"
                placeholder="Email address"
              />
              <button className="bg-button text-white mt-4 w-full py-1 rounded-lg hover:bg-blue-700 text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-bg px-[15%] py-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-text text-3xl font-bold">Latest blog & news</h2>
        {visibleCards < DataDoctors.length && (
          <button onClick={showMoreCards} className="flex  hover:text-blue-900 text-lg font-bold items-center text-blue-600">
            View More <IoArrowForward className="text-lg font-black ml-2 mt-1" />
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DataDoctors.slice(0, visibleCards).map((item) => (
          <Link href={`/Blog/${item.id}`} key={item.id} prefetch={true}>
            <article className="cursor-pointer border-2 p-2 border-bg hover:border-gray-300 rounded-lg">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full z-0 rounded-lg"
                />
                <h5 className="absolute bg-button text-white py-0.5 px-2 rounded-md top-4 left-4">
                  {item.type}
                </h5>
              </div>
              <h1 className="text-lg mt-1 text-text">{item.title}</h1>
              <small className="text-gray-400">{item.dish}</small>
            </article>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default DoctorDetails;
