"use client";
import { Emoji } from "emoji-type";
import React from "react";
import { useState } from "react";
import CanvasForExp from "./CanvasForExp";

const MonitoringSystem = () => {
  const [openMonitor, setOpenMonitor] = useState(false);
  return (
    <div className="bg-slate-950 lg:h-[100vh] h-full">
      {openMonitor ? (
        <div>
          <CanvasForExp
            setOpenMonitor={setOpenMonitor}
          />
        </div>
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          <button
            className="btn btn-primary text-white"
            onClick={() => setOpenMonitor(!openMonitor)}
          >
            Start Monitoring
          </button>
        </div>
      )}
    </div>
  );
};

export default MonitoringSystem;

export type emotionToEmojiType = {
  [key: string]: Emoji;
};

export type emotionType = {
  emotion: string;
  time: string;
};
