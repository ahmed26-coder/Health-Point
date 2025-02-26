"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { IoIosArrowForward, IoMdCheckmarkCircle } from "react-icons/io";
import { DataCard } from "../../Components/Constant";
import Data from "@/app/Components/Data";

const page = () => {

  const { id } = useParams();
  const data = DataCard.find((doc) => doc.id.toString() === id);

  if (!data) {
    return <p className="text-center text-red-500">Data not found</p>;
  }

  return (
    <>
      <div className="bg-bg text-center py-7 md:px-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Cardiology
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 max-w-4xl mx-auto mt-5 p-5">
        <div className="border border-gray-300 p-5 w-full md:w-[50%] h-fit rounded-lg">
          <div className="flex gap-2 items-center mb-3">
            <img
              className="w-[20%] md:w-[15%] lg:w-[10%]"
              src={data.img}
              alt={data.title}
            />
            <h3 className="text-lg font-bold">{data.title}</h3>
          </div>
          <h3 className="text-lg font-bold">Our Services</h3>
          <div className=" mt-3">
          {DataCard.map((item) => (
            <Link href={`/Services/${item.id}`} key={item.id} prefetch={true}>
              <h3 className="flex items-center justify-between text-lg pl-3 sm:text-base">
                {item.title} <IoIosArrowForward className={` text-2xl ${String(item.id) === String(data.id) ? "text-blue-800" : "text-blue-300"}`} />
              </h3>
              <div className="border border-blue-300 my-1"></div>
            </Link>
          ))}
          </div>
        </div>

        <div className="w-full">
          <img
            src="/Rectangle388.png"
            alt="Doctor"
            className="w-full rounded-lg mx-auto md:mx-0"
          />
          <h2 className="text-2xl font-bold text-text text-center md:text-left mt-4">
            Support Groups for Depression
          </h2>
          <p className="mt-5 text-gray-500">
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident
          </p>
          <p className="mt-5 text-gray-500">
          Sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re
          </p>

          <div className="mt-5 space-y-3">
            <p className="flex items-center text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Vivamus eu lacus scelerisque, placerat commodo lectus.
            </p>
            <p className="flex items-center text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Etiam etanteatex porta fringilla.
            </p>
            <p className="flex items-center text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Nullam dignissim sem eu magna aliquet.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-text my-5 text-center md:text-left">
            Online simple step for appointment
          </h2>
          <p className="mt-5 text-gray-500">
          Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident sometimes on purpose (injected humour and the like).
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start my-6">
            <img
              className="w-[30%] md:w-[30%]"
              src="/11.png"
              alt=""
            />
            <img
              className="w-[30%] md:w-[30%]"
              src="/22.png"
              alt=""
            />
            <img
              className="w-[30%] md:w-[30%]"
              src="/33.png"
              alt=""
            />
          </div>

          <h2 className="text-2xl font-bold text-text text-center md:text-left">
            How is the Emergency Department staffed?
          </h2>
          <p className="mt-5 text-gray-500">
          Sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re
          </p>
          <p className="flex items-center mt-4 text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Vivamus eu lacus scelerisque, placerat commodo lectus.
            </p>
            <p className="flex items-center text-gray-600">
              <IoMdCheckmarkCircle className="text-lg text-button mr-2" />
              Etiam etanteatex porta fringilla.
            </p>
        </div>
      </div>
      <Data />
    </>
  );
};

export default page;
