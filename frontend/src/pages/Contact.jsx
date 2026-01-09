// import React from "react";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import NewsletterBox from "../components/NewsletterBox";

// const Contact = () => {
//   return (
//     <div>
//       <div className="text-center text-2xl pt-10 border-t">
//         <Title text1={"CONTACT"} text2={"US"} />
//       </div>

//       <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
//         <img
//           className="w-full md:max-w-[480px]"
//           src={assets.contact_img}
//           alt="contact_img"
//         />
//         <div className="flex flex-col justify-center items-start gap-6">
//           <p className="font-semibold text-xl text-gray-600">Our Store</p>
//           <p className="text-gray-500">
//             54709 willms Station <br /> Suite 350, Washington, USA
//           </p>
//           <p className="text-gray-500">
//             Tel: (415) 555-0132 <br /> Email: admin@forever.com
//           </p>
//           <p className="font-semibold text-xl text-gray-600">
//             Careers at Forever
//           </p>
//           <p className="text-gray-500">
//             Learn more about our teams and job openings.
//           </p>
//           <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
//             Explore Jobs
//           </button>
//         </div>
//       </div>

//       <NewsletterBox />
//     </div>
//   );
// };

// export default Contact;



import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="border-t">
      {/* Header */}
      <div className="text-center text-2xl pt-12">
        <Title text1={"CONTACT"} text2={"ME"} />
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Have a question, feedback, or opportunity? Feel free to reach out.
        </p>
      </div>

      {/* Main Content */}
      <div className="my-16 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto px-4">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          <img
            src={assets.contact_img}
            alt="Contact illustration"
            className="rounded-xl shadow-sm"
          />

          <div>
            <h3 className="font-semibold text-lg text-gray-700">
              About Me
            </h3>
            <p className="text-gray-500 mt-2">
              Hi, I’m <span className="font-medium text-gray-700">Sivans Rawat</span>, 
              a Full Stack Developer passionate about building scalable web
              applications using modern technologies.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-700">
              Contact Details
            </h3>
            <p className="text-gray-500 mt-2">
              Email: rawatsivans@gmail.com <br />
              Location: India <br />
              Availability: Open to internships & full-time opportunities
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-700">
              Work & Collaboration
            </h3>
            <p className="text-gray-500 mt-2">
              If you’re looking to collaborate on a project, discuss an idea,
              or explore hiring opportunities, I’d be happy to connect.
            </p>
          </div>
        </div>

        {/* Right Section – Message Form */}
        <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-black"
            />
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-black"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
