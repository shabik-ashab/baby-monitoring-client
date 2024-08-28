"use client";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Header = ({title}:{title:string}) => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div>
      <h2 data-aos="fade-down" className="text-4xl font-semibold pb-8">
        {title}
      </h2>
    </div>
  );
};

export default Header;
