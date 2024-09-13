export default function AdminDashboard(){
    
    return(
        <>
        <div className="mt-6 mb-6 flex justify-center text-center">
            <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md mt-6 mx-6">
                all users</button>
            <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md mt-6 mx-6">
                all Organizations</button>
            <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md mt-6 mx-6">
                all Jobs</button>
        </div>
        <div className="flex items-center flex-col">
            <div className="border-2 w-full max-w-screen-sm max-h-56 px-6 py-4 bg-slate-700 rounded-md">
                <div className="w-full">
                    <h5 className="text-lg font-bold mb-2">title of job</h5>
                    <h6 className="text-sm mb-4">name of the organization</h6>
                    {/* <div className="my-5 flex text-sm"> */}
                    <div>
                    <span className="mr-2 my-4 mb-4">duration</span>
                    <span className="mr-2 p-4 my-4 mb-4">location</span>
                    <span className="mr-2 p-4 my-4 mb-4">type</span>
                    </div>
                    
                    {/* </div> */}
                    <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md mt-6 mr-6">
                        Update</button>
                    <button className="bg-orange-500 hover:bg-orange-700 hover:transition-colors px-6 py-2 rounded-md mt-6">
                        Delete</button>
                </div>
            </div>
        </div>
        
        {/* <button>all </button> */}
        </>
    )
}