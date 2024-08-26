//  ========= Feed ===========

import StopMonitoring from "./StopMonitoring";

const Feed = ({ setOpenMonitor, openMonitor }) => {
  return (
    <div className="h-[540px] flex flex-col justify-between">
      <h2 className="text-4xl  font-semibold lg:text-start text-center">Emotion Feed</h2>
      <div className="">
        <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center">
          <button className="text-4xl">😄</button>
          <button className="text-4xl">  17:08:20 </button>
        </div>
        <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center">
          <button className="text-4xl">😄</button>
          <button className="text-4xl">  17:08:20 </button>
        </div>
        <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center">
          <button className="text-4xl">😄</button>
          <button className="text-4xl">  17:08:20 </button>
        </div>
        <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center">
          <button className="text-4xl">😄</button>
          <button className="text-4xl">  17:08:20 </button>
        </div>
        <div className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center">
          <button className="text-4xl">😄</button>
          <button className="text-4xl">  17:08:20 </button>
        </div>
      </div>
      {/* =============== StopMonitoring =============  */}

      <div className="flex items-end w-full">
        <StopMonitoring openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />
      </div>

      {/* =============== StopMonitoring =============  */}
    </div>
  );
};

export default Feed;