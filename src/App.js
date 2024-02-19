import React from "react";
import reviews from "./data";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 ...">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-black h-[4px] w-1/2 mt-1 mx-auto"></div>
      </div>
      <Testimonial reviews={reviews} />
    </div>
  )
};

export default App;
