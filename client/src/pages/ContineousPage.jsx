import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';


const ProfileForm = () => {
    // State to manage multiple skill objects
    const [skills, setSkills] = useState([{ skillName: '', level: '' }]);
    const [educations , setEducations] = useState([{institution:"" , qualification:"" , startYear:"" , endYear:""}]);
    const [gender , setgender] = useState("");
    const [typeOf , setTypeOf] = useState("");
    const [experience , setExperience] = useState([{organizationName:"" , startDate:"" , endDate:"" , role:""}]);
    const [contactInfo , setContactInfo] = useState([{phoneNo:"" , email:"" , address:""}]);
    const [userId , setUserId] = useState(null);
    const [resume , setResume] = useState(null);
    // console.log("resume localstate: " , resume);

    //setting user
    const {user} = useAuth();
    useEffect(()=>{
        if(user){
            setUserId(user?._id);
        }else{
            setUserId(null);
        }
    } , [user]);
    // console.log("user form contineous page: " , user);

    // Handle input change for skills
    const handleInputChange = (index, event , section , setSection) => {
        const { name, value } = event.target;
        const updatedsection = [...section];
        updatedsection[index][name] = value;  // Update the specific skill in the array
        setSection(updatedsection);
    };

    // Add a new skill input set
    const addField = (setSection , defaultObject) => {
        setSection((prevSection)=>[...prevSection , defaultObject]);  // Add a new empty skill object
    };

    // Remove a skill input set
    const removeField = (index , section , setSection) => {
        const updatedSections = section.filter((_, i) => i !== index);
        setSection(updatedSections);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];  // Access the selected file
        setResume(file);  // Set the resume state with the selected file
    };

    //form data to make new profile of user
    const formData = new FormData();
    formData.append("gender" , gender);
    formData.append("type" , typeOf);
    formData.append("user" , userId);
    formData.append("resume" , resume);
    formData.append("skills" , JSON.stringify(skills));
    formData.append("education" , JSON.stringify(educations));
    formData.append("contactInfo" , JSON.stringify(contactInfo));
    formData.append("experience" , JSON.stringify(experience));

    //newprofile function from profile-context
    const {newProfile} = useProfile();

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            newProfile(formData);
        } catch (error) {
            console.log("error from profile page: " , error);
        }
    };

    //static profile form
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  shadow-md rounded-md mt-8">
            <label className="font-bold text-lg">Skills</label>
            {skills.map((skill, index) => (
                <div key={index} className="skill-input mb-6" >
                    <div className="">
                        <div className="flex spcae-x-4">
                            <input
                                type="text"
                                name="skillName"
                                placeholder="Skill Name"
                                value={skill.skillName}
                                onChange={(event) => handleInputChange(index, event , skills , setSkills)}
                                required
                                className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md mx-2"
                            />
                            
                            
                            <select
                                name="level"
                                value={skill.level}
                                onChange={(event) => handleInputChange(index, event , skills , setSkills)}
                                required
                                className="outline-none bg-slate-600 py-4 px-6 w-full rounded-md"
                            >
                                <option value="">Select Level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                    </div>
                    {/* Button to remove skill input */}
                    {skills.length > 1 && (
                        <button type="button" onClick={() => removeField(index , skills , setSkills)}
                        className="mt-1 hover:underline hover:ease-in"
                        >
                            Remove
                        </button>
                    )}
                </div>
            ))}
            {/* Button to add more skill inputs */}
            <button type="button" onClick={()=>addField(setSkills , { skillName: '', level: '' })} 
            className="hover:bg-orange-700 bg-orange-500 px-4 py-2 hover:transition-colors mb-2">Add Skill</button>
            
            {/* Education section */}
            <div className="mt-2">
                <label className="font-lg font-bold mb-2">Education</label>
                {
                    educations.map((education , index)=>(
                        <div key={index}>
                            <div className="space-y-4">
                                <div>
                                    <input type="text" placeholder="InstitutionName" required
                                    name="institution" 
                                    className="outline-none w-full bg-slate-600 py-4 px-6 rounded-md mb-4"
                                    value={education.institution || ""}
                                    onChange={(event) => handleInputChange(index, event , educations , setEducations)}
                                    />
                                    <input type="text" placeholder="Qualification" required
                                    name="qualification" 
                                    className="outline-none w-full bg-slate-600 py-4 px-6 rounded-md mb-4"
                                    value={education.qualification || ""}
                                    onChange={(event) => handleInputChange(index, event , educations , setEducations)}
                                    />
                                
                                    <div className="flex space-x-4">
                                        <input type="text" placeholder="StartYear" required
                                        name="startYear" 
                                        className="w-full bg-slate-600 outline-none rounded-md px-6 py-4"
                                        value={education.startYear || ""}
                                        onChange={(event) => handleInputChange(index, event , educations , setEducations)}
                                        />
                                        <input type="text" placeholder="EndYear" required
                                        name="endYear" 
                                        className="w-full bg-slate-600 outline-none rounded-md px-6 py-4"
                                        value={education.endYear || ""}
                                        onChange={(event) => handleInputChange(index, event , educations , setEducations)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                educations.length > 1 && (<button type="button" onClick={() => removeField(index , educations , setEducations)}
                                className="mt-1 hover:underline hover:ease-in">Remove</button>)
                            }
                        </div>
                    ))
                }
                <button type="button" onClick={()=>addField(setEducations , {institution:"" , qualification:"" , startYear:"" , endYear:""})} 
                className="hover:bg-orange-700 bg-orange-500 px-4 py-2 hover:transition-colors mb-2 mt-3">Add Education</button>
            </div>

            {/* gender section */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Gender</label>
                <select 
                className="w-full bg-slate-600 outline-none rounded-md py-4 px-6" 
                required
                value={gender}
                onChange={(e)=>setgender(e.target.value)}
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Ohters</option>
                </select>
            </div>

            {/* type of section */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Type</label>
                <select
                name="gender" 
                className="w-full outline-none bg-slate-600 px-6 py-4 rounded-md"
                value={typeOf}
                onChange={(e)=>setTypeOf(e.target.value)}
                >
                    <option>Fresher</option>
                    <option>Experienced</option>
                </select>
            </div>

            {/* experience section */}
            <div className="mb-6">
                <label className="text-left block mb-2 font-medium">Experience(Optional)</label>
                {
                    experience.map((exp , index)=>(
                        <div key={index}>
                            <div className="space-y-6 mb-4">
                                <input type="text" placeholder="OrganizationName" 
                                className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"
                                name="organizationName"
                                value={exp.organizationName || ""}
                                onChange={(event)=>handleInputChange(index, event , experience , setExperience)}
                                />
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <input type="date" placeholder="Start-Date" 
                                className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"
                                name="startDate"
                                value={exp.startDate || ""}
                                onChange={(event)=>handleInputChange(index, event , experience , setExperience)}
                                />
                                <input type="date" placeholder="End-Date" 
                                className="w-full outline-none py-4 px-6 bg-slate-600 rounded-md"
                                name="endDate"
                                value={exp.endDate || ""}
                                onChange={(event)=>handleInputChange(index, event , experience , setExperience)}
                                />
                            </div>
                            <input type="text" placeholder="Role" 
                            className="w-full bg-slate-600 outline-none rounded-md py-4 px-6"
                            name="role"
                            value={exp.role || ""}
                            onChange={(event)=>handleInputChange(index, event , experience , setExperience)}
                            />
                        </div>
                    ))
                }
            </div>

            {/* Contact Info */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">ContactInfo</label>
                {
                    contactInfo.map((contact , index)=>(
                        <div key={index}>
                            <input type="email" placeholder="user@email.com" required
                            name="email"
                            value={contact.email}
                            onChange={(event)=>handleInputChange(index, event , contactInfo , setContactInfo)} 
                            className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"/>
                            <input type="text" placeholder="Phone-Number" required 
                            className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"
                            name="phoneNo"
                            value={contact.phoneNo}
                            onChange={(event)=>handleInputChange(index, event , contactInfo , setContactInfo)}
                            />
                            <input type="text" placeholder="Address" required 
                            className="outline-none px-6 py-4 bg-slate-600 rounded-md w-full mb-4"
                            name="address"
                            value={contact.address}
                            onChange={(event)=>handleInputChange(index, event , contactInfo , setContactInfo)}
                            />

                            {
                                contactInfo.length > 1 && (<button type="button" onClick={() => removeField(index , contactInfo , setContactInfo)}
                                className="mt-1 hover:underline hover:ease-in">Remove</button>)
                            }
                        </div>
                    ))
                }
                <button type="button" onClick={()=>addField(setContactInfo , {phoneNo:"" , email:"" , address:""})} 
                className="hover:bg-orange-700 bg-orange-500 px-4 py-2 hover:transition-colors mb-2 mt-3">Add ContsctInfo</button>
            </div>

            {/* resume field */}
            <div className="mb-6">
                <label className="text-left block font-medium mb-2">Upload Resume</label>
                <input type="file" required 
                className="w-full bg-slate-600 px-6 py-4 rounded-md outline-none mb-4"
                name="resume"
                onChange={(event)=>handleFileChange(event)}
                />
            </div>
            <button type="submit" 
            className="w-full bg-orange-500 hover:transition-colors hover:bg-orange-700 py-4 px-6 mb-2 
            cursor-pointer">Create Profile</button>
        </form>
    );
};

export default ProfileForm;
