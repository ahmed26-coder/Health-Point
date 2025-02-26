import { GrMapLocation } from "react-icons/gr";

const Data = () => {
        return (
          <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-5">
          <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden w-full md:w-auto">
        
            {/* القسم الأول: معلومات التواصل */}
            <div className="bg-button pt-10 p-6 md:p-10 text-white w-full md:w-[50%]">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Get Quick Free Professional Consultation
              </h2>
              <p className="mb-3 text-sm">
                <span className="font-semibold text-base">Mon-Fri:</span> 9:00 am – 10:00 pm
              </p>
              <p className="mb-3 text-sm">
                <span className="font-semibold text-base">Sat-Sun:</span> 9:00 am – 8:00 pm
              </p>
        
              <div className="mb-4 text-sm">
                <p><span className="font-semibold text-base">Phone:</span> (+690) 2560 0020</p>
                <p><span className="font-semibold text-base">Email:</span> booking@healthpoint.com</p>
              </div>
        
              <p className="mb-6 text-sm">
                <span className="font-semibold text-base">Address:</span> Healthpoint, 4263 Wilkinson Street, Tennessee
              </p>
        
              <button className="bg-bg2 text-white flex items-center font-semibold px-4 py-2 rounded-md hover:bg-blue-400">
                <GrMapLocation className="mr-2 text-lg" />View Location Map
              </button>
            </div>
        
            {/* القسم الثاني: نموذج التواصل */}
            <div className="bg-bg2 p-6 md:p-10 flex justify-center items-center w-full md:w-[50%]">
              <form className="bg-white p-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                  <input type="email" placeholder="Email address" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                  <input type="text" placeholder="+91" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                  <input type="text" placeholder="Department" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                  <input type="text" placeholder="9:15" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                  <input type="date" className="border border-gray-300 p-2 focus:border-2 focus:border-button outline-none rounded-md" />
                </div>
                <textarea placeholder="Anything else you wanna communicate" className="mt-4 h-24 w-full border border-gray-300 p-2 outline-none focus:border-2 focus:border-button rounded-md"></textarea>
                <button className="mt-4 text-button border-2 border-button w-full md:w-[25%] py-2 rounded-md hover:bg-blue-700 hover:text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        
          );
        }
export default Data
