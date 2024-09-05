import {Link} from "react-router-dom"
export default function ContineousPage(){
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="text-center py-5 my-5 mx-auto">
                <Link to={"/organization"}><button className="mx-4 bg-orange-500 rounded-md px-4 my-4 py-4 text-xl hover:ease-in-out shadow-md hover:bg-orange-700 hover:transition">Continue as Employer</button></Link>
                <Link to={"/profile"}><button className="mx-4 bg-orange-500 rounded-md px-4 my-4 py-4 text-xl hover:ease-in-out shadow-md hover:bg-orange-700 hover:transition">Continue as JobSeeker</button></Link>
                
            </div>
        </section>
    )
}