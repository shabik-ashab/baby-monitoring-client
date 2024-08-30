import { Link } from "react-router-dom";
import H1 from "../../components/H1";
import image from '../../Assets/babybanner.jpg';
import ExploreNow from "../../components/ExploreNow";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Banner = () => {

    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
       },[])
   
    return (
        <div className='flex lg:flex-row flex-col-reverse gap-20 justify-evenly bg-slate-950 items-center p-20'>
        <div data-aos="fade-up" className='flex-1'>
         <H1 title="Baby Monitoring System"/>
        <p  className='text-xl mb-6'>Our web application functions as a baby monitoring system, notifying users when it detects any negative emotions on the baby’s face.</p>
       <Link to="Monitoring"><ExploreNow/></Link>
        </div>
         <div data-aos="fade-down" className='flex-1'>
             <img className='rounded-3xl -z-10' src={image} alt="" />
         </div>
     </div>
    );
};

export default Banner;