// import React from "react";
// import Title from "../components/Title";
// import { assets } from "../assets/assets";
// import NewsletterBox from "../components/NewsletterBox";

// const About = () => {
//   return (
//     <div>
//       <div className="text-2xl text-center pt-8 border-t">
//         <Title text1={"ABOUT"} text2={"US"} />
//       </div>

//       <div className="my-10 flex flex-col md:flex-row gap-16">
//         <img
//           className="w-full md:max-w-[450px]"
//           src={assets.about_img}
//           alt="about_img"
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
//           <p>
//             Forever wa born out of a passion for innovation and a desire to
//             revolutionize the way people shop online. Our journey began with a
//             simple idea: to provide a platform where customers can easily
//             discover, explore, and purchase a wide range of products from the
//             comfort of their homes.
//           </p>
//           <p>
//             Since our inception, we've worked tirelessly to curate a diverse
//             selection of high-quality products that cater to every taste and
//             preference. From fashion and beauty to electronics and home
//             essentials, we offer an extensive collection sourced from trusted
//             brands and suppliers.
//           </p>
//           <b className="text-gray-800">Our Mission</b>
//           <p>
//             Our mission at Forever is to empower cistomers with choice,
//             convenience, and confidence. We're dedicated to providing a seamless
//             shopping experience that exceeds expectations, from browsing and
//             ordering to delivery and beyond.
//           </p>
//         </div>
//       </div>

//       <div className="text-xl py-4">
//         <Title text1={"WHY"} text2={"CHOOSE US"} />
//       </div>

//       <div className="flex flex-col md:flex-row text-sm mb-20">
//         <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
//           <b>Quality Assurance:</b>
//           <p className="text-gray-600">
//             We meticulously select and vet each product to ensure it meets our
//             stringent quality standards.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
//           <b>Convenience:</b>
//           <p className="text-gray-600">
//             With our user-friendly interface and hassle-free ordering process,
//             shopping has never been easier.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
//           <b>Exceptional Customer Service:</b>
//           <p className="text-gray-600">
//             Our team of dedicated professionals is here to assist you the way,
//             by ensuring your satisfaction is our top priority.
//           </p>
//         </div>
//       </div>

//       <NewsletterBox />
//     </div>
//   );
// };

// export default About;



import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="border-t">
      {/* Header */}
      <div className="text-2xl text-center pt-10">
        <Title text1={"ABOUT"} text2={"ME"} />
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          A glimpse into who I am and how this project was built.
        </p>
      </div>

      {/* About Section */}
      <div className="my-16 flex flex-col md:flex-row gap-16 max-w-6xl mx-auto px-4">
        <img
          className="w-full md:max-w-[450px] rounded-xl shadow-sm"
          src={assets.about_img}
          alt="About illustration"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Hi, I’m <span className="font-medium text-gray-800">Sivans Rawat</span>, 
            a Full Stack Developer with a strong interest in building scalable,
            user-focused web applications. This e-commerce platform was built as
            a hands-on project to apply real-world development practices.
          </p>

          <p>
            The goal behind this project was not just to design an online store,
            but to implement a complete end-to-end system — including product
            management, authentication, cart handling, and secure payments —
            using modern web technologies.
          </p>

          <p>
            Every part of this application, from the frontend UI to the backend
            APIs and database design, was carefully structured to reflect
            industry-level architecture and best practices.
          </p>

          <b className="text-gray-800">Project Mission</b>

          <p>
            The mission of this project is to demonstrate my ability to design,
            develop, and deploy a full-stack application that is clean,
            functional, and scalable — while delivering a smooth user
            experience.
          </p>
        </div>
      </div>

      {/* Why Choose This Project */}
      <div className="text-xl py-6 text-center">
        <Title text1={"WHY"} text2={"THIS PROJECT"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-24 max-w-6xl mx-auto px-4">
        <div className="border px-10 md:px-16 py-10 md:py-20 flex flex-col gap-4">
          <b>Real-World Architecture</b>
          <p className="text-gray-600">
            Built using the MERN stack with proper separation of concerns,
            RESTful APIs, and scalable folder structure.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-10 md:py-20 flex flex-col gap-4">
          <b>Modern Tech Stack</b>
          <p className="text-gray-600">
            Uses React, Node.js, MongoDB, Cloudinary, JWT authentication, and
            Stripe integration for payments.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-10 md:py-20 flex flex-col gap-4">
          <b>Portfolio-Focused</b>
          <p className="text-gray-600">
            Designed to showcase real development skills including UI design,
            backend logic, database handling, and deployment readiness.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
