import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { Link } from "react-router-dom";


const Menu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
  
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-20">
            <ul className="text-center text-xl p-20">
                <Link to="/">
                    <li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Home</li>
                </Link >
                <Link to="Monitoring">
                    <li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Monitoring</li>
                </Link>
                <Link to="our_teams">
                    <li className="my-4 py-4 border-b border-slate-950 hover:bg-slate-800 hover:rounded">Our Teams</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-20 bg-slate-950 text-white lg:py-5 px-20 py-4 sticky top-0 border-b border-slate-900">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold"> CradleCam</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="/">
                    <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">Home</li>
                </Link>
                <Link to="Monitoring">
                    <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">Monitoring</li>
                </Link>
                <Link to="our_teams">
                    <li className="hover:text-primary transition border-b-2 border-slate-950 hover:border-primary cursor-pointer">Our Teams</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default Menu;