//  ========= Feed ===========

import StopMonitoring from "./StopMonitoring";

const Feed = ({ setOpenMonitor, openMonitor }) => {
  return (
    <div>
      <h2 className="text-4xl mb-10 font-semibold lg:text-start text-center">Emotion Feed</h2>
      <div className="">
     <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[10px] gap-[10px] lg:justify-start justify-center">
     <button className="text-4xl">😄</button>
     <button className="text-4xl">  17:08:20 </button>
     </div>
     <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[10px] gap-[10px] lg:justify-start justify-center">
     <button className="text-4xl">😄</button>
     <button className="text-4xl">  17:08:20 </button>
     </div>
     <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[10px] gap-[10px] lg:justify-start justify-center">
     <button className="text-4xl">😄</button>
     <button className="text-4xl">  17:08:20 </button>
     </div>
     <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[10px] gap-[10px] lg:justify-start justify-center">
     <button className="text-4xl">😄</button>
     <button className="text-4xl">  17:08:20 </button>
     </div>
     <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[10px] gap-[10px] lg:justify-start justify-center">
     <button className="text-4xl">😄</button>
     <button className="text-4xl">  17:08:20 </button>
     </div>
      </div>
       {/* =============== StopMonitoring =============  */}

       <div className="flex justify-center w-full">
                <StopMonitoring openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />
              </div>

              {/* =============== StopMonitoring =============  */}
    </div>
  );
};

export default Feed;