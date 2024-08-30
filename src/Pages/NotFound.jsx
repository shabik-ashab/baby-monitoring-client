
import { Link } from "react-router-dom";
import H1 from "../components/H1";


const NotFound = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <H1 title="Not Found..."/>
            <Link to="/"><button className="btn btn-primary text-white">Go Home</button></Link>
        </div>
    );
};

export default NotFound;