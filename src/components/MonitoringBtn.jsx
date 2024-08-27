
// =========== MonitoringBtn ==========

const MonitoringBtn = ({openMonitor, setOpenMonitor}) => {
    return (
        <button className="btn btn-primary text-white" onClick={() => setOpenMonitor(!openMonitor)}>Start Monitoring</button>
    );
};

export default MonitoringBtn;