import React from "react";
import Header from "./Header";

const AboutFaceDetector = () => {
  return (
    <div>
      <Header title="What is CradleCam?" />
      <div className="flex justify-center pb-36 pt-10">
        <iframe
          className="rounded-lg lg:w-[700px] lg:h-[415px] w-[80%] md:h-[400px] h-[240px]"
          src="https://www.youtube.com/embed/vjFEgh9CaJw?si=Wc-pj8UKm20I_t2o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutFaceDetector;
