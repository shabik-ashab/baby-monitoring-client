

const Feed = ({setOpenMonitor, openMonitor}) => {
  return (
    <div className="overflow-y-scroll">

      <h2 className="text-4xl font-semibold lg:text-start text-center">Emotion Feed</h2>
      <div className="flex text-2xl mt-[20px] gap-[40px] lg:justify-start justify-center">
      <span> Emoji: 😄</span>
      <span> Time: </span>
      </div>
    <div className="flex lg:justify-start justify-center">
    <button className="btn btn-neutral mt-20" onClick={() => setOpenMonitor(false)}>Stop Monitoring</button>
    </div>
    </div>
  );
};

export default Feed;