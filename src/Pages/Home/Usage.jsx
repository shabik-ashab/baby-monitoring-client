import H1 from '../../components/H1';
import Screenshot1 from '../../Assets/Screenshot1.png'
import Screenshot2 from '../../Assets/Screenshot2.png'
import { MdOutlineArrowRightAlt } from 'react-icons/md';


const Usage = () => {
    return (
        <div>
            <H1 title="How to use it?" />
            <div className='flex lg:flex-row flex-col justify-evenly items-center my-20'>
            <div className='flex flex-col items-start'>
                <img width={300} src={Screenshot1} alt="" />
                <h2 className='text-2xl font-bold py-4'>Step 1: Press Explore Button</h2>
            </div>
            <div>
                <MdOutlineArrowRightAlt className='text-[150px] text-red-700'/>
            </div>
            <div className='flex flex-col items-start'>
                <img width={300} className=' shadow-lg' src={Screenshot2} alt="" />
            <h2 className='text-2xl font-bold py-4'>Step 2: Click the Monitor Button</h2>
            </div>
            </div>
        </div>
    );
};

export default Usage;