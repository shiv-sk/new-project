import { Link } from "react-router-dom";

export default function Register(){
    return (
        <form className="mx-auto text-center mt-6 shadow-md rounded-lg p-4 max-w-sm">
            <h1 className="text-center font-bold text-2xl mb-4">Register</h1>
            <input type="text" placeholder="username@123" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4"/><br />
            <input type="email" placeholder="example@email.com" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4"/><br />
            <input type="password" placeholder="pass@123" required className="my-2 outline-none bg-slate-600 rounded w-full focus:outline-none focus: px-2 py-4"/><br />
            <p>Already have account? <Link to={"/login"} className="text-orange-400 hover:text-orange-600 hover:border-b-2">Login</Link></p>
            <button type="submit" className="w-full bg-orange-600 p-3 rounded text-xl mt-2 text-white hover:bg-orange-700 transition-colors">Register</button>
        </form>
    )
} 