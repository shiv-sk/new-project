export default function PostingJob(){
    return (
        <form className="max-w-sm mx-auto p-6 shadow-lg  rounded-md mt-8">
            <div className="mb-6">
                <label className="text-left block text-lg font-medium">requiredSkills</label>
                <div className="space-y-6 mb-6">
                    <input type="text" placeholder="skill1" required className="outline-none bg-slate-600 px-6 py-4 w-full rounded-md"/>
                </div>
                <div className="space-y-6 mb-6">
                    <input type="text" placeholder="skill2" required className="outline-none bg-slate-600 px-6 py-4 w-full rounded-md"/>
                </div>
                <div className="space-y-6 mb-6">
                    <input type="text" placeholder="skill3" required className="outline-none bg-slate-600 px-6 py-4 w-full rounded-md"/>
                </div>
                <div className="space-y-6 mb-6">
                    <input type="text" placeholder="skill4" required className="outline-none bg-slate-600 px-6 py-4 w-full rounded-md"/>
                </div>
                <div className="mb-6">
                    <label className="text-left block text-lg font-medium">Job Title</label>
                    <input type="text" placeholder="Job1" required className="outline-none bg-slate-600 px-6 py-4 rounded-md w-full"/>
                </div>
                <div className="mb-6">
                    <label className="text-left block text-lg font-medium">Description</label>
                    <textarea rows={6} className="w-full bg-slate-600 rounded-md outline-none px-6 py-4" placeholder="description"></textarea>
                </div>
                <div className="mb-6">
                    <label className="text-left block text-lg font-medium">Salary</label>
                    <input type="number" placeholder="1000" min={0} required className="outline-none bg-slate-600 py-4 px-6 rounded-md w-full "/>
                </div>
                <div className="mb-6">
                    <label className="text-left text-lg font-medium block">Location</label>
                    <input type="text" placeholder="remote" required className="outline-none bg-slate-600 py-4 px-6 rounded-md w-full"/>
                </div>
                <div className="mb-6">
                    <label className="text-left block text-lg font-medium">Duration</label>
                    <input type="text" placeholder="0 months" required className="outline-none bg-slate-600 py-4 px-6 rounded-md w-full"/>
                </div>
                <div className="mb-6">
                    <label className="text-left text-lg font-medium block">experience</label>
                    <input type="text" placeholder="0-1" required className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md"/>
                </div>
                <div className="mb-6">
                    <label className="text-left text-lg font-medium block">Opening</label>
                    <input type="text" placeholder="10" required className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md"/>
                </div>
                <div className="mb-6">
                    <label className="text-left text-lg font-medium block">JobType</label>
                    <select className="outline-none w-full bg-slate-600 px-6 py-4 rounded-md">
                        <option>Select Job Type</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="text-left text-lg font-medium block">Domain</label>
                    <select className="outline-none w-full bg-slate-600 px-6 py-4 rounded-md">
                        <option>select Domain</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-orange-500 px-6 py-4 hover:bg-orange-700 hover:transition-colors cursor-pointer">Post Job</button>
            </div>
        </form>
    )
}