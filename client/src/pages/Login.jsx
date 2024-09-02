import { Link } from "react-router-dom";

export default function Login(){
    return (
        <form className="max-w-sm mx-auto mt-6 rounded-lg shadow-md text-center py-4">
            <h1 className="font-bold text-xl mb-4">Login</h1>
            <input type="email" placeholder="example@email.com" className="w-full py-4 px-2 rounded outline-none bg-slate-600 text-white my-2"/><br />
            <input type="password" placeholder="password@1234" className="w-full py-4 px-2 rounded outline-none bg-slate-600 text-white my-2"/><br />
            <p> Dont Have Account? <Link to={"/register"} className="hover:text-orange-600 hover:border-b-2 my-2 text-orange-400">Register</Link></p>
            <button type="submit" className="hover:transition-colors hover:bg-orange-700 bg-orange-600 w-full p-4 rounded text-2xl my-2">Login</button>
        </form>
    )
}