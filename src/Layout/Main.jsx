import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MonitoringSystem from "../components/MonitoringSystem";
import NotFound from "../Pages/NotFound";
import Teams from "../Pages/Teams/Teams";


const Main = () => {
    return (
        <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Monitoring' element={<MonitoringSystem />}></Route>
     <Route path='/our_teams' element={<Teams />}></Route>
     <Route path='*' element={<NotFound />}></Route>
     </Routes>
    );
};

export default Main;