import { useState } from 'react';
import MonitoringBtn from './MonitoringBtn';
import CanvasForExp from './CanvasForExp';

const MonitoringSystem = () => {

  const [openMonitor, setOpenMonitor] = useState(false);


  return (
    <div className='bg-slate-950 lg:h-[100vh] h-full'>



      {
        openMonitor ?

            <div>
              {/* =============== Canvas =============  */}


              <CanvasForExp openMonitor={openMonitor} setOpenMonitor={setOpenMonitor}  />


              {/* =============== Canvas =============  */}


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


