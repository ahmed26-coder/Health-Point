import Data from "../Components/Data";
import Link from "next/link";
import { MeetDoctors } from "../Components/Constant";
const page = () => {
  return (
    <>
      <div className="bg-bg text-center py-7 md:px-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Meet our Doctors
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
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
          >
            <div className="relative">
              <img className=" z-0" src={item.img} alt="Doctor" />
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
      <Data />
    </>
  );
};

export default page;
