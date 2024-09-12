import { useState } from "react"

export default function Home(){
    const [salary , setSalary] = useState(0);
    const handleSalary = (e)=>{
        setSalary(e.target.value);
    }
    console.log("the selected salary is: " , salary);
    return (
        <section className="">
            {/* search---bar */}
            <div className="flex justify-center text-center mt-6">
                <input type="text" placeholder="search" className="outline-none px-6 py-4 bg-slate-700 mx-4 my-4 "/>
                <button type="button" className="bg-orange-600 hover:transition-colors hover:bg-orange-700 cursor-pointer md:px-6 
                px-3 py-4 rounded my-4">search</button>
            </div>
            {/* filter and job card */}
            <div className="flex flex-col md:flex-row justify-center mx-4 md:mx-10">
                {/* left filter section */}
                <aside className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h2 className="text-center font-bold text-2xl">Filters</h2>
                    <div className="mb-6">
                        <h5 className="font-semibold text-lg">Salary</h5>
                        <input type="range" min={0} max={100000} className="w-full outline-none" value={salary} onChange={handleSalary}/>
                            <div className="flex justify-between text-sm ">
                                <span>$0</span>
                                <span>$100</span>
                            </div>
                        </div>
                    <div>
                        <h5 className="text-lg font-semibold ">Type</h5>
                        <select className="w-full px-6 py-4 outline-none bg-slate-700">
                            <option>FullTime</option>
                        </select>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Locaton</h5>
                        {/* <input type="text"  className="bg-slate-700 outline-none px-6 py-4 "/> */}
                        <select className="bg-slate-700 outline-none px-6 py-4 w-full">
                            <option>option 1</option>
                        </select>
                </div>
                </aside>

                <div className="w-full md:w-2/4 flex justify-center mt-16 shadow-xl">
                    <div className="border-2 w-full max-w-screen-sm max-h-56 px-6 py-4 bg-slate-700 rounded-md">
                        <div className="w-full">
                            <h5 className="text-lg font-bold mb-2">title of job</h5>
                            <h6 className="text-sm mb-4">name of the organization</h6>
                            {/* <div className="my-5 flex text-sm"> */}
                                <span className="mr-2 my-4 mb-4">duration</span>
                                <span className="mr-2 p-4 my-4 mb-4">location</span>
                                <span className="mr-2 p-4 my-4 mb-4">type</span>
                            {/* </div> */}
                            <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md block mt-6">
                                More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <slectA />   */}
            
            
            
        </section>
    )
}