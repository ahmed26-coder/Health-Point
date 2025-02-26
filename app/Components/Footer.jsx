import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" text-gray-800 py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-28 md:px-30">
        <div>
          <div className="flex items-center mb-4">
            <img src="/Vector.png" alt="logo" className="w-10 h-10" />
            <h1 className="ml-2 text-2xl font-bold text-text">Health Point</h1>
          </div>
          <p className="text-sm leading-relaxed">
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing. Various versions have evolved over the
            years, sometimes.
          </p>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-3">Departments</h1>
          <ul className="space-y-[6px]">
            <li className="hover:text-blue-500 cursor-pointer">Cardiology</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Sports Injury
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Radiology</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Lung Diseases
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Gynecology</li>
            <li className="hover:text-blue-500 cursor-pointer">Eye Care</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-3">Major Links</h1>
          <ul className="space-y-[6px]">
            <li className="hover:text-blue-500 cursor-pointer">Doctors</li>
            <li className="hover:text-blue-500 cursor-pointer">Departments</li>
            <li className="hover:text-blue-500 cursor-pointer">Appointment</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Working Hours
            </li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-3">Quick Links</h1>
          <ul className="space-y-[6px]">
            <li className="hover:text-blue-500 cursor-pointer">
              Health Insurance
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Medical Records
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Online Bill Pay
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Emergency Service
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Covid-19 Info
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6 mx-[10%]"></div>
      <div className="flex flex-col md:flex-row justify-between px-30 items-center">
        <div className="flex gap-5 text-4xl">
          <FaFacebookSquare className="text-blue-600  hover:text-blue-800 cursor-pointer" />
          <FaInstagramSquare className="text-blue-700  hover:text-pink-700 cursor-pointer" />
          <IoLogoLinkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
        </div>
        <h1 className="text-lg font-semibold mt-4 md:mt-0">Newsletter</h1>
        <div className="flex items-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
