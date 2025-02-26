"use client";

import { useRef } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
  IoArrowForwardCircle
} from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import Data from "../Components/Data";

const page = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      });
    }
  };
  return (
    <>
      <div className="bg-bg text-center py-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          About Us
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 justify-center items-center p-10 sm:p-20">
        <img src="/about.png" alt="" className="w-[70%] sm:w-[40%]" />

        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[30%] text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-text font-bold">
            Highly Innovative Technology
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            We help startups who want to rise above the ordinary with
            extraordinary messaging that speaks to their audience.
          </p>
          <button className="mt-6 bg-button text-white rounded-lg py-1 px-4 hover:text-button hover:bg-white border border-button">
            Contact Us
          </button>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4">
            <p className="flex items-center gap-1 text-base font-bold">
              <IoCheckmarkCircleSharp className="text-button text-lg" /> Expert
              Help
            </p>
            <p className="flex items-center gap-1 text-base font-bold">
              <IoCheckmarkCircleSharp className="text-button text-lg" /> Proven
              results
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 p-10 md:p-20 rounded-lg">
        <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Health Point History
            </h2>
            <p className="text-gray-600 mt-2">
              Sometimes by accident, sometimes chunks as necessary making this
              the first true generator
            </p>
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <button
                onClick={() => scroll("left")}
                className="text-blue-500 hover:text-blue-700 text-3xl"
              >
                <IoArrowBackCircleOutline />
              </button>
              <button
                onClick={() => scroll("right")}
                className="text-blue-500 hover:text-blue-700 text-3xl"
              >
                <IoArrowForwardCircleOutline />
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-2/3 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar"
            >
              <div className="min-w-[250px] bg-white rounded-lg p-4">
                <h3 className="text-3xl font-bold text-button mb-2">
                  2016–2018
                </h3>
                <p className="text-gray-600">
                  Normal distribution of letters, as opposed to using 'Content
                  here, content here'
                </p>
                <img className="mt-8" src="/about2.png" alt="history1" />
              </div>
              <div className="min-w-[250px] bg-white rounded-lg p-4">
                <h3 className="text-3xl font-bold text-button mb-2">
                  2019–2021
                </h3>
                <p className="text-gray-600">
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing
                </p>
                <img className="mt-8" src="/about3.png" alt="history2" />
              </div>
              <div className="min-w-[250px] bg-white rounded-lg p-4">
                <h3 className="text-3xl font-bold text-button mb-2">
                  2022–2024
                </h3>
                <p className="text-gray-600">
                  Normal distribution of letters, as opposed to using 'Content
                  here, content here'
                </p>
                <img className="mt-8 " src="/about4.png" alt="history3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-20 p-10 max-w-6xl mx-auto">
        <div className="relative w-full lg:w-1/2">
          <img src="/about5.png" alt="Doctor" className="w-full rounded-lg" />
          <div className="absolute top-20 w-[28%] md:w-[20%] -right-2  md:-right-10 bg-button text-white px-2 md:px-4 py-3 rounded-lg shadow-lg">
            <h1 className="md:text-3xl text-lg font-bold">13+</h1>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-primary">Medical Culture</h1>
          <p className="text-gray-600 mt-4">
            We are a dedicated team of passionate product managers, full stack
            developers, UX/UI designers, QA engineers and marketing experts
            helping businesses of every size — from new startups.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "Vestibulum non sapien mattis commodo.",
              "Donec luctus tincidunt ornare.",
              "Quisque pretium erat ac dui posuere.",
              "Fusce eleifend vitae eleifend ullamcor."
            ].map((text, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-base text-gray-700 font-bold"
              >
                <IoCheckmarkCircleSharp className="text-button text-3xl" />
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" border-1 border-gray-200"></div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-15 mt-10 px-[10%] md:px-[27%] py-[5%]">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Customers Testimonials
          </h3>
          <div className="border border-gray-300 my-10 md:my-[40%]"></div>
          <h1 className="text-3xl md:text-4xl text-button font-bold">1950+</h1>
          <p className="text-button">clients & 4.9 Rating based on 5</p>
          <button className="text-button mt-5 md:mt-[20%] hover:bg-button hover:text-white border border-button py-1 px-4">
            More Testimonials
          </button>
        </div>

        <div className="">
          <div className="flex items-start">
            <FaQuoteLeft className="text-4xl md:text-6xl mr-2 md:mr-[5%] text-bg2" />
            <p className="text-gray-500 text-sm md:text-base">
              Letraset sheets containing Lorem Ipsum passages and more recently
              with desktop publishing. Various versions have evolved over the
              years, sometimes.
            </p>
          </div>

          <div className="flex justify-between items-center mt-5 md:mt-[5%]">
            <div>
              <h5 className="text-base md:text-lg font-bold">Stephanie Sue</h5>
              <p className="text-gray-500 text-sm">Designation</p>
            </div>
            <div className="flex items-center gap-2">
              <IoArrowBackCircleOutline className="text-3xl md:text-5xl" />
              <IoArrowForwardCircle className="text-3xl md:text-5xl text-blue-600" />
              <h6 className="text-lg md:text-2xl font-bold">01/09</h6>
            </div>
          </div>

          <img
            className=" w-[70%] mt-3 md:mt-[4%] rounded-md left-1/2 md:left-auto"
            src="/happy.png"
            alt=""
          />
        </div>
      </div>
      <div className=""></div>
      <Data />
    </>
  );
};

export default page;
