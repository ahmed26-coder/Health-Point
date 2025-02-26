import { DataDoctors } from "../Components/Constant";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-bg text-center py-7 md:px-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Blog
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[8%] mt-[3%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {DataDoctors.map((item) => (
          <Link href={`/Blog/${item.id}`} key={item.id} prefetch={true}>
            <article className="cursor-pointer">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full rounded-lg"
                />
                <h5 className="absolute bg-button text-white py-0.5 px-2 rounded-md top-4 left-4">
                  {item.type}
                </h5>
              </div>
              <h1 className="text-2xl mt-1 text-text">{item.title}</h1>
              <small className="text-gray-400">{item.dish}</small>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
