import { IoArrowForwardSharp } from "react-icons/io5";

const page = () => {
  return (
    <>
      <div className="bg-bg text-center py-7 md:px-0 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text">
          Contact Us
        </h1>
        <p className="text-center mx-auto w-full sm:w-[75%] md:w-[50%] lg:w-[25%] text-sm sm:text-base">
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="flex gap-5 px-4 md:px-0 items-center text-center md:text-left">
          <img
            className="w-[50px] h-[50px] rounded-full p-2 bg-blue-100"
            src="/contact1.png"
            alt="email"
          />
          <div>
            <h2 className="text-2xl text-text font-bold">Email us</h2>
            <p className="text-gray-500">
              Please feel free to drop us a line. We will respond as soon as
              possible.
            </p>
            <h5 className="flex items-center justify-center md:justify-start text-lg hover:text-blue-800 text-button">
              Leave a message <IoArrowForwardSharp className="mt-1 ml-2" />
            </h5>
          </div>
        </div>

        <div className="flex gap-5 px-4 md:px-0 items-center text-center md:text-left">
          <img
            className="w-[50px] h-[50px] rounded-full p-2 bg-blue-100"
            src="/contact2.png"
            alt="Gift"
          />
          <div>
            <h2 className="text-2xl text-text font-bold">Careers</h2>
            <p className="text-gray-500">
              Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum
            </p>
            <h5 className="flex items-center justify-center md:justify-start text-lg hover:text-blue-800 text-button">
              Send an application <IoArrowForwardSharp className="mt-1 ml-2" />
            </h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto mt-[3%] px-4">
        <iframe
          className="w-full max-w-[1000px] h-[400px] rounded-lg shadow-lg"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631531574!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1611817350617!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" border-1 border-gray-300 my-[3%]"></div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center mx-auto w-full max-w-4xl p-5">
        <div className="w-full md:w-auto">
          <h1 className="text-text text-3xl font-bold text-center md:text-left">
            Get Online Consultation
          </h1>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
            {[
              { label: "First name", name: "firstName", type: "text" },
              { label: "Last name", name: "lastName", type: "text" },
              { label: "Email address", name: "email", type: "email" },
              { label: "Specialist", name: "specialist", type: "number" },
              { label: "Date", name: "date", type: "date" },
              { label: "Time", name: "time", type: "time" }
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block text-gray-800 font-semibold text-sm"
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  placeholder={label}
                  className="block w-full sm:w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mt-2"
                />
              </div>
            ))}
          </form>
          <button className="text-white bg-button py-2 px-6 text-lg rounded-lg mt-10 w-full sm:w-auto block mx-auto md:mx-0">
            Make an appointment
          </button>
        </div>
        <img src="/contact3.png" alt="Contact" className="w-80 sm:w-96" />
      </div>
    </>
  );
};

export default page;
