import image from "../../Assats/yusra.jpg";
import image1 from "../../Assats/profile1.png";
import image2 from "../../Assats/shuvo.jpg";
import image3 from "../../Assats/shabik.png";

const Teams = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-white text-center mb-2">
          Our Teams
        </h2>
        <div className="flex justify-center mb-10">
          <div className="bg-primary w-20 h-1 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { img: image, name: "Yousra Amin", email: " yousraamin654@gmail.com" },
            { img: image1, name: "Hiramon Nahar Eva", email: "hiramonnahareva@gmail.com" },
            { img: image2, name: "Sk Shafiqul Islam Shuvo", email: "skshafiqulislamshuvo@gmail.com" },
            { img: image3, name: "Sayed Shabik Ashab", email: "shabik.ashab@gmail.com" },
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-lg">
                <img 
                  className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110" 
                  src={member.img} 
                  alt={member.name} 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/85 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                  <h2 className="text-2xl font-semibold text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    {member.name}
                  </h2>
                  {member.email && (
                    <h3 className="text-sm font-semibold text-white mt-2 opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {member.email}
                    </h3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;