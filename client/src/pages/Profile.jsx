export default function Profile(){
    return (
        <form className="max-w-lg mx-auto p-6  shadow-md rounded-md mt-8">
            <h5 className="text-center font-bold text-2xl ">Make Your Profile</h5>
            {/* Skills Section */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Skills</label>
                <div className="space-y-6 mb-6">
                    <div className="flex spcae-x-4">
                        <input type="text" placeholder="SkillName" required className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md mx-2"/>
                        <select className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md" required>
                            <option>Select-Level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-6 mb-6">
                    <div className="flex spcae-x-4">
                        <input type="text" placeholder="SkillName" required className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md mx-2"/>
                        <select className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md" required>
                            <option>Select-Level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-6 mb-6">
                    <div className="flex spcae-x-4">
                        <input type="text" placeholder="SkillName" required className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md mx-2"/>
                        <select className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md" required>
                            <option>Select-Level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Education section */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Education</label>
                <div className="space-y-4">
                    <div>
                        <input type="text" placeholder="InstitutionName" required className="outline-none w-full bg-slate-600 py-4 px-6 rounded-md mb-4"/>
                        <input type="text" placeholder="Qualification" required className="outline-none w-full bg-slate-600 py-4 px-6 rounded-md mb-4"/>
                    
                        <div className="flex space-x-4">
                            <input type="text" placeholder="StartYear" required className="w-full bg-slate-600 outline-none rounded-md px-6 py-4"/>
                            <input type="text" placeholder="EndYear" required className="w-full bg-slate-600 outline-none rounded-md px-6 py-4"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">ContactInfo</label>
                <input type="email" placeholder="user@email.com" required className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"/>
                <input type="text" placeholder="Phone-Number" required className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"/>
                <input type="text" placeholder="Address" required className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"/>
            </div>
            {/* experience */}
            <div className="mb-6">
                <label className="text-left block mb-2 font-medium">Experience</label>
                <div className="space-y-6 mb-4">
                    <input type="text" placeholder="OrganizationName" className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"/>
                </div>
                <div className="flex space-x-4 mb-4">
                    <input type="date" placeholder="Start-Date" className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"/>
                    <input type="date" placeholder="End-Date" className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"/>
                </div>
                <input type="text" placeholder="Role" className="w-full bg-slate-600 outline-none rounded-md py-4 px-6"/>
            </div>
            {/* gender */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Gender</label>
                <select className="w-full bg-slate-600 outline-none rounded-md py-4 px-6" required>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Ohters</option>
                </select>
            </div>
            {/* type of  */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Type</label>
                <select className="w-full outline-none bg-slate-600 px-6 py-4 rounded-md">
                    <option>Fresher</option>
                    <option>Experienced</option>
                </select>
            </div>
            {/* resume upload */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Upload Resume</label>
                <input type="file" required className="w-full bg-slate-600 px-6 py-4 rounded-md outline-none mb-4"/>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:transition-colors hover:bg-orange-700 py-4 px-6 mb-2 cursor-pointer">Create Profile</button>
        </form>
    )
}