import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
export default function Navbar(){
    const {user , logout} = useAuth();
    return (
        <nav className="bg-orange-700 flex flex-wrap justify-between w-full items-center p-4 shadow-sm md:p-4 h-25">
            <div className="text-2xl text-white-700">
                <Link to={"/"}>Job-DashBoard</Link>
            </div>
            {
                user && user.role === "JobSeeker" ? (
                    <div className="text-white-700">
                        <ul className="md:flex hidden font-semibold">
                            <Link to={"/application"}><li 
                            className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2 px-2 py-2">Applications</li></Link>
                            <Link to={"/savedjobs"}><li 
                            className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2 px-2 
                            py-2">Saved Jobs</li></Link>
                            <button className="mx-[10px] hidden md:block bg-slate-900 rounded px-2 py-2 text-white cursor-pointer 
                            text-bold" onClick={logout}>logout</button>
                        </ul>
                    </div>
                ) : (
                    <div className="text-white-700">
                        <Link to={"/register"}><div className="hidden md:block bg-slate-900 rounded px-4 py-4 text-white cursor-pointer text-bold">Register/Login</div></Link>
                    </div>
                )
            }
            
            {/* <div className="text-white-700">
                <ul className="md:flex hidden font-semibold">
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2 hover:text-orange-400 hover:shadow">Home</li></Link> 
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2 ">Applications</li></Link>
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2">logout</li></Link>
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2">Home</li></Link>
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2">Home</li></Link>
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2">Home</li></Link>
                    <Link><li 
                    className="mx-[10px] cursor-pointer hover:border-b-2 hover:bg-slate-700 hover:rounded hover:px-2">Home</li></Link>
                </ul>
            </div> */}
            {/* <div className="flex flex-wrap">
                <input type="text" className="outline-none mx-2"/>
                <div>
                <button type="" className="px-2 cursor-pointer">search</button>
                </div>
                
            </div> */}
            
            <div className="text-white md:hidden text-xl">
                <Link>&#8801;</Link>
            </div>
        </nav>
    )
}