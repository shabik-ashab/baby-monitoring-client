"use client";

import { emotionToEmojiType } from "./MonitoringSystem";
import { emotionType } from "./MonitoringSystem";

const FeedFOrEpx = ({
  lastFiveEmotions,
  emotionToEmoji,
  setOpenMonitor,
}: {
  lastFiveEmotions: emotionType[];
  emotionToEmoji: emotionToEmojiType;
  setOpenMonitor: Function;
}) => {
  return (
    <div className="relative">
      <div className="h-[540px] flex flex-col justify-between">
        <h2 className="text-4xl font-semibold lg:text-start text-center">
          Emotion Feed
        </h2>

        {lastFiveEmotions.length === 0 ? (
          <div>No Data Available Yet...</div>
        ) : (
          <div className="">
            {lastFiveEmotions.map((item, index) => (
              <div
                key={index}
                style={{ fontSize: "2rem" }}
                className="flex bg-slate-900 rounded-lg text-4xl mt-[10px] px-[20px] py-[12px] gap-[10px] lg:justify-start justify-center"
              >
                <button className="text-4xl">
                  {emotionToEmoji[item.emotion] || "❓"}
                </button>
                <button className="text-4xl">{item.time}</button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-end w-full">
          <button
            className="btn btn-primary mt-[20px] text-white w-full"
            onClick={() => setOpenMonitor(false)}
          >
            Stop Monitoring
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedFOrEpx;
