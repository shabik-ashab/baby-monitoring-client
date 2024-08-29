import StopMonitoring from "./StopMonitoring";
import H1 from "./H1";

const FeedFOrEpx = ({ lastFiveEmotions, lastSadEmotion, emotionToEmoji, openMonitor, setOpenMonitor }) => {
  return (
    <div className="h-[540px] flex flex-col justify-between">
      <H1 title="Emotion Feed" />

      {lastSadEmotion && (
        <div className="bg-red-600 text-white p-2 rounded-lg mb-2 flex items-center gap-2">
          <img
            src={lastSadEmotion.screenshot}
            alt="Sad Emotion Screenshot"
            className="w-[100px] h-[auto] border border-gray-300 rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold">
              😢 <span className="text-sm">Need Attention</span>
            </p>
            <p className="text-sm mt-1">⏰ {lastSadEmotion.time}</p>
          </div>
        </div>
      )}

      {lastFiveEmotions.length === 0 ? (
        <div>No Data Available Yet...</div>
      ) : (
        <div>
          {lastFiveEmotions.map((item, index) => (
            <div
              key={index}
              style={{ fontSize: '1.5rem' }}
              className="flex bg-slate-900 rounded-lg text-2xl mt-[10px] px-[12px] py-[8px] gap-[10px] justify-center"
            >
              <button className="text-2xl">
                {emotionToEmoji[item.emotion] || '❓'}
              </button>
              <button className="text-2xl">{item.time}</button>
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
