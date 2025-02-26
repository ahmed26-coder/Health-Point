import { IoIosArrowForward } from "react-icons/io";
import { DataCard } from "../Components/Constant";
import { FaPhoneVolume } from "react-icons/fa6";
import Data from "../Components/Data";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-bg text-center py-7 md:px-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Services
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>
      <div className=" mt-10 pb-20">
        <h1 className="text-text text-3xl font-bold ml-5 md:w-[25%] md:ml-30">
          Highly Innovative Technology & Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-[15%]">
          {DataCard.map((item) => (
            <Link href={`/Services/${item.id}`} key={item.id} prefetch={true}>
            <article
              className="bg-white rounded-lg h-[100%] p-4 flex flex-col border-2 border-gray-200"
            >
              <img src={item.img} alt={item.title} className=" w-[25%] mb-15" />
              <p className="text-gray-600 text-sm text-center mb-15">
                {item.dish}
              </p>
              <div className=" border-1 border-gray-200 w-full mt-4"></div>
              <h2 className="text-lg font-semibold flex items-center text-center gap-2 mt-3 text-blue-600 hover:text-green-600">
                {item.title} <IoIosArrowForward className=" ml-40" />
              </h2>
            </article>
            </Link>
          ))}
        </div>
        <button className=" text-lg text-bg2 border-1 border-bg2 px-3 py-0.5 rounded-sm mx-[15%] mt-5 hover:bg-bg2 hover:text-white">
          View More
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center md:pl-20 gap-6 md:gap-10 py-10">
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
          <h1 className="text-3xl font-bold text-gray-800">
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
      <Data />
    </>
  );
};

export default page;
