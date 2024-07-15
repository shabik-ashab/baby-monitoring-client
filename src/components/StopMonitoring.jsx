

const StopMonitoring = ({setOpenMonitor}) => {
    return (
             <button className="btn btn-neutral mt-[20px] w-full" onClick={() => setOpenMonitor(false)}>Stop Monitoring</button>
    );
};

export default StopMonitoring;