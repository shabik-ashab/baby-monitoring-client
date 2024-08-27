import AboutFaceDetector from './AboutFaceDetector';
import Banner from './Banner';
import Useges from './Usage';
import WhyUse from './WhyUse';

const Home = () => {
    
    return (
        <div className=''>
            
            <Banner/>
            <div className='text-center mt-20'>
            <AboutFaceDetector/>
            <Useges/>
            <WhyUse/>
            </div>
        </div>
    );
};

export default Home;