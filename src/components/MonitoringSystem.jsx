import { useState } from 'react';
import Feed from './Feed';
import Canvas from './Canvas';
import MonitoringBtn from './MonitoringBtn';

const MonitoringSystem = () => {

  const [openMonitor, setOpenMonitor] = useState(false);


  return (
    <div className="">



      {
        openMonitor ?
          <div className='flex lg:flex-row flex-col justify-evenly m-20 gap-20'>

            {/* =============== Canvas =============  */}

            <Canvas openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />

            {/* =============== Canvas =============  */}

            {/* =============== Feed =============  */}


            <Feed openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />

            {/* =============== Feed =============  */}
          </div>
          :
          <div className='h-[100vh] flex justify-center items-center'>

            {/* =============== MonitoringBtn =============  */}

            <MonitoringBtn openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} />

            {/* =============== MonitoringBtn =============  */}

          </div>


      }

    </div>
  );
}

export default MonitoringSystem;


