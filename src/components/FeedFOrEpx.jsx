import StopMonitoring from "./StopMonitoring";

const FeedFOrEpx = ({ lastFiveEmotions, emotionToEmoji, openMonitor, setOpenMonitor }) => {
  return (
    <div className="h-[540px] flex flex-col justify-between">
      <h2 className="text-4xl font-semibold lg:text-start text-center">Emotion Feed</h2>

      {lastFiveEmotions.length === 0 ? (
        <div>No Data Available Yet...</div>
      ) : (
        <div className="">
          {lastFiveEmotions.map((item, index) => (
            <div
              key={index}
              style={{ fontSize: '2rem' }}
              className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center"
            >
              <button className="text-4xl">
                {emotionToEmoji[item.emotion] || '❓'}
              </button>
              <button className="text-4xl">{item.time}</button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-end w-full">
        <StopMonitoring openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />
      </div>
    </div>
  );
};

export default FeedFOrEpx;
