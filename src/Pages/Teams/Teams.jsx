import image from "../../Assats/babybanner.jpg";
import image1 from "../../Assats/babybanner.jpg";
import image2 from "../../Assats/babybanner.jpg";
import image3 from "../../Assats/babybanner.jpg";

const Teams = () => {
    return (
                <div className="py-16 h-[100vh] flex items-center">
                <div className="container text-center">
                <h2 className="text-4xl font-semibold text-bold w-full text-white text-center mb-2">Our Teams</h2>
                  <div className="flex justify-center mb-10">
                  <div className="bg-primary w-20 h-1 rounded border-primary flex justify-center"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-4 items-center justify-center gap-6 lg:mx-20">
                   <div className="h-fit lg:w-80 md:w-80 w-90 group">
                    <div className="relative overflow-hidden">
                   <img className="lg:w-80 md:w-80 w-90" src={image} alt="" />
                   <div className="absolute w-full h-full transition-all flex items-center justify-center duration-300 hover:top-0 right-0 top-40 bg-blue-950/85 opacity-0 hover:opacity-100">
                    <h2 className="text-2xl font-semibold text-blue-white">Name</h2>
                    {/* Team Details */}
                   </div>
                    </div>
                   </div>
                   <div className="h-fit lg:w-80 md:w-80 w-90 group">
                    <div className="relative overflow-hidden">
                   <img className="lg:w-80 md:w-80 w-90" src={image1} alt="" />
                   <div className="absolute w-full h-full transition-all flex flex-col items-center justify-center duration-300 hover:top-0 right-0 top-40 bg-blue-950/85 opacity-0 hover:opacity-100">
                    <h2 className="text-2xl font-semibold text-blue-white">Hiramon Nahar Eva</h2>
                    <h2 className="text-[18px] font-semibold text-blue-white">hiramonnahareva@gmail.com</h2>
                    {/* Team Details */}
                   </div>
                    </div>
                   </div>
                   <div className="h-fit lg:w-80 md:w-80 w-90 group">
                    <div className="relative overflow-hidden">
                   <img className="lg:w-80 md:w-80 w-90" src={image2} alt="" />
                   <div className="absolute w-full h-full transition-all flex items-center justify-center duration-300 hover:top-0 right-0 top-40 bg-blue-950/85 opacity-0 hover:opacity-100">
                    <h2 className="text-2xl font-semibold text-blue-white">Name</h2>
                    {/* Team Details */}
                   </div>
                    </div>
                   </div>
                   <div className="h-fit lg:w-80 md:w-80 w-90 group">
                    <div className="relative overflow-hidden">
                   <img className="lg:w-80 md:w-80 w-90" src={image3} alt="" />
                   <div className="absolute w-full h-full transition-all flex items-center justify-center duration-300 hover:top-0 right-0 top-40 bg-blue-950/85 opacity-0 hover:opacity-100">
                    <h2 className="text-2xl font-semibold text-blue-white">Name</h2>
                    {/* Team Details */}
                   </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
    );
};

export default Teams;