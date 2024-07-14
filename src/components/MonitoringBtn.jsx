
// =========== MonitoringBtn ==========

const MonitoringBtn = ({openMonitor, setOpenMonitor}) => {
    return (
        <button className="btn btn-neutral" onClick={() => setOpenMonitor(!openMonitor)}>Start Monitoring</button>
    );
};

export default MonitoringBtn;