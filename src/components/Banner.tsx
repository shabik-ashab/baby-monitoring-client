import Link from "next/link";
import React from "react";
import Header from "./Header";
import Image from 'next/image';
import image from "../../public/babybanner.jpg"                                                                                                                                                                       

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-20 justify-evenly bg-slate-950 items-center p-20">
      <div data-aos="fade-up" className="flex-1">
        <Header title="Baby Monitoring System" />
        <p className="text-xl mb-6">
          Our web application functions as a baby monitoring system, notifying
          users when it detects any negative emotions on the baby’s face.
        </p>
        <Link href="/monitoring">                                         
          <button className="btn btn-primary text-white">Explore Now</button>     
        </Link>
      </div>
      <div data-aos="fade-down" className="flex-1">
      <Image className="rounded-3xl -z-10" src={image} alt="baby banner" />
      </div>
    </div>
  );
};

export default Banner;
