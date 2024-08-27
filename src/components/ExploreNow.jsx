
// =========== ExploreNow ==========

const ExploreNow = ({openMonitor, setOpenMonitor}) => {
    return (
        <button className="btn btn-primary text-white" onClick={() => setOpenMonitor(!openMonitor)}>Explore Now</button>
    );
};

export default ExploreNow;