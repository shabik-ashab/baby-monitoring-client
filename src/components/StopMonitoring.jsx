

const StopMonitoring = ({setOpenMonitor}) => {
    return (
             <button className="btn btn-primary mt-[20px] text-white w-full" onClick={() => setOpenMonitor(false)}>Stop Monitoring</button>
    );
};

export default StopMonitoring;