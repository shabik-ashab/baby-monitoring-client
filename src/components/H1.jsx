import Aos from "aos";
import { useEffect } from "react";


const H1 = ({title}) => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
       },[])
    return (
        <div>
            <h2 data-aos="fade-down" className='text-4xl font-semibold pb-4'>{title}</h2>
        </div>
    );
};

export default H1;