import { IoIosArrowForward } from "react-icons/io";
import { DataCard, MeetDoctors } from "./Components/Constant";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import Data from "./Components/Data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-bg pb-10 pt-5 px-10 gap-6">
        <div className="lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            Advanced Healthcare Made Personal
          </h1>
          <p className="mt-2 text-gray-600">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing
          </p>
          <button className="mt-4 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition">
            Book appointment
          </button>
        </div>
        <div className="grid grid-cols-2 z-0 sm:grid-cols-3 gap-4 flex-grow">
          <img
            className="w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-lg"
            src="/home1.png"
            alt=""
          />
          <img
            className="w-full h-[140px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-lg"
            src="/home2.png"
            alt=""
          />
          <img
            className="w-full h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px] object-cover rounded-lg"
            src="/home3.png"
            alt=""
          />
          <img
            className="w-full h-[160px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover rounded-lg"
            src="/hom4.png"
            alt=""
          />
          <img
            className="w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[200px] object-cover rounded-lg"
            src="/home5.png"
            alt=""
          />
          <img
            className="w-full h-[140px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-lg"
            src="/home6.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-10 mt-10 mx-auto px-5 md:px-20">
        <div className="space-y-3">
          <div className="flex gap-3 justify-center md:justify-start">
            <img className="w-[45%] md:w-[40%]" src="/home11.png" alt="" />
            <img className="w-[45%] md:w-[40%]" src="/home13.png" alt="" />
          </div>
          <img className="w-full" src="/home12.png" alt="" />
        </div>
        <div className="text-center md:mt-[5%] md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            The Heart and Science Of Medicine Service
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing. Various versions have evolved over the
            years, sometimes by accident, sometimes chunks as necessary making
            desktop publishing evolve over the years.
          </p>
          <button className="text-button border border-button px-4 py-1 mt-3 hover:bg-button hover:text-white">
            Read More
          </button>
        </div>
      </div>

      <div className=" mt-10 pt-15 bg-bg pb-20">
        <h1 className="text-text text-3xl font-bold ml-5 md:w-[25%] md:ml-30">
          Highly Innovative Technology & Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-[15%]">
          {DataCard.map((item) => (
            <Link href={`/Services/${item.id}`} key={item.id} prefetch={true}>
              <article
                key={item.id}
                className="bg-white hover:bg-gray-50 rounded-lg p-4 flex flex-col border-1 border-gray-200"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className=" z-0 w-[25%] mb-15"
                />
                <p className="text-gray-600 text-sm text-center mb-15">
                  {item.dish}
                </p>
                <div className=" border-1 border-gray-200 w-full mt-4"></div>
                <h2 className="md:text-lg font-semibold flex justify-between items-center mt-3 text-blue-600">
                  {item.title} <IoIosArrowForward className="" />
                </h2>
              </article>
            </Link>
          ))}
        </div>
        <button className=" text-lg text-bg2 border-1 border-bg2 px-3 py-0.5 rounded-sm mx-[15%] mt-5 hover:bg-bg2 hover:text-white">
          View More
        </button>
      </div>
      <div className="bg-bg flex flex-col md:flex-row items-center md:pl-20 gap-6 md:gap-10 py-10">
        <div className="relative">
          <img className="w-[70%] md:w-full" src="/doctor11.png" alt="Doctor" />
          <div className="flex gap-2 items-center bg-white shadow-md px-4 py-2 absolute bottom-0 left-0 rounded-bl-2xl">
            <FaPhoneVolume className="text-3xl text-blue-600" />
            <div>
              <p className="text-gray-600 text-sm">Emergency Service</p>
              <h2 className="text-lg font-bold text-blue-700">
                +(690) 2560 0020
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-5   md:p-10 w-[90%] md:w-[100%]">
          <h1 className=" text-2xl md:text-3xl font-bold text-gray-800">
            Support Groups for Depression & Anxiety
          </h1>
          <p className="text-gray-600 mt-3">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing. Various versions have evolved over the
            years, sometimes by accident.
          </p>
          <button className="text-lg text-bg2 border border-bg2 px-5 py-2 rounded-md block mx-auto mt-5 hover:bg-bg2 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-[5%] grid grid-cols-1 md:grid-cols-4 mx-[10%]">
        {MeetDoctors.map((item) => (
          <Link href={`/Doctors/${item.id}`} key={item.id} prefetch={true}>
            <article
              className={`mb-[5%] ${
                Number(item.id) === 1 ||
                Number(item.id) === 3 ||
                Number(item.id) === 5 ||
                Number(item.id) === 7
                  ? "md:mt-20"
                  : ""
              }`}
              key={item.id}
            >
              <div className="relative">
                <img className="z-0" src={item.img} alt="Doctor" />
                <div className="absolute text-3xl p-1 flex gap-3 bottom-0 left-0 bg-white rounded-bl-lg rounded-tr-lg">
                  <p className="hover:text-blue-600">{item.icon1}</p>
                  <p className="hover:text-blue-400">{item.icon2}</p>
                  <p className="hover:text-blue-500">{item.icon3}</p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-2">{item.title}</h2>
              <small className="text-base text-gray-600">{item.dish}</small>
            </article>
          </Link>
        ))}
      </div>

      <button className=" border-1 border-button rounded-lg text-button py-1 px-4 flex mx-auto mt-10 hover:bg-button hover:text-white ">
        View More
      </button>

      <div className="flex flex-col md:flex-row gap-5 md:gap-15 mt-10 bg-bg px-[10%] md:px-[27%] py-[5%]">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold">
            Customers Testimonials
          </h3>
          <div className="border border-gray-300 my-10 md:my-[40%]"></div>
          <h1 className="text-3xl md:text-4xl text-button font-bold">1950+</h1>
          <p className="text-button">clients & 4.9 Rating based on 5</p>
          <button className="text-button mt-10 md:mt-[20%] hover:bg-button hover:text-white border border-button py-1 px-4">
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
            className=" w-[70%] z-0 mt-3 md:mt-[4%] rounded-md left-1/2 md:left-auto"
            src="/happy.png"
            alt=""
          />
        </div>
      </div>
      <div className=""></div>
      <Data />
    </>
  );
}
