import { useState } from 'react';
import Feed from './Feed';
import Canvas from './Canvas';
import MonitoringBtn from './MonitoringBtn';
import CanvasForExp from './CanvasForExp';
import FeedFOrEpx from './FeedFOrEpx';

const MonitoringSystem = () => {

  const [openMonitor, setOpenMonitor] = useState(false);


  return (
    <div className='bg-slate-950 lg:h-[100vh] h-full'>



      {
        openMonitor ?
          // <div className='flex lg:flex-row flex-col justify-evenly p-20 gap-20'>

          // <div className=''>

            <div>
              {/* =============== Canvas =============  */}

              {/* <Canvas openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} /> */}


              <CanvasForExp openMonitor={openMonitor} setOpenMonitor={setOpenMonitor}  />


              {/* =============== Canvas =============  */}

             
            {/* </div> */}

            {/* =============== Feed =============  */}


            {/* <Feed openMonitor={openMonitor} setOpenMonitor={setOpenMonitor} /> */}

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


