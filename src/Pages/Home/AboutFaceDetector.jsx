import H1 from "../../components/H1";
import ReactVideo from "../../components/ReactVideo";


const AboutFaceDetector = () => {
    return (
        <div className="h-screen">
            <H1 title="What is CradleCam?"/>
            <div className="flex justify-center pb-36 pt-14">
            <ReactVideo/>
            </div>
        </div>
    );
};

export default AboutFaceDetector;