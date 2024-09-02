import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home(){
    return (
        <>
        {/* section----------1 */}
        <section className="flex flex-wrap w-full h-auto items-center text-center flex-col p-10">
            <div className="flex flex-wrap flex-col h-auto w-full items-center mb-4">
                <p className="text-center text-white text-2xl">Make Your Dream Into Reality</p>
                <div className="border-b-2 border-orange-500 rounded-lg w-20 mt-2 mb-2"></div>
            </div>
            <div className="w-full flex flex-wrap justify-evenly mt-2 rounded py-5">
                <div className="w-46 flex-col items-center mb-2">
                    <FontAwesomeIcon icon="fa-regular fa-font-awesome"  className="text-2xl mb-2"/>
                    <p className="text-2xl font-bold mb-2">Types Of Jobs</p>
                    <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                        Illum, consequatur?</p>
                </div>

                <div className="w-46 flex-col items-center mb-2">
                    <FontAwesomeIcon icon="fa-regular fa-user"  className="text-2xl mb-2"/>
                    <p className="text-2xl font-bold mb-2">Fresher/Experienced</p>
                    <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                        Illum, consequatur?</p>
                </div>

                <div className="w-46 flex-col items-center mb-2">
                    <FontAwesomeIcon icon="fa-regular fa-envelope-open"  className="text-2xl mb-2"/>
                    <p className="text-2xl font-bold mb-2">World-Wide Support</p>
                    <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
                        Illum, consequatur?</p>
                </div>
            </div>
        </section>

        {/* section---------2 */}
        <section className="flex flex-wrap w-full h-auto items-center text-center flex-col p-10 b-2 hidden md:block">
            <div className="flex flex-wrap flex-col h-auto w-full items-center mb-2">
                <p className="text-2xl mb-2">Start Your Carrer With Job-Dashboard</p>
                <div className="w-20 border-b-2 border-orange-500 mb-2"></div>
            </div>
            <div className="flex w-full h-auto items-center">
                <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-[500px] h-auto mr-4 object-cover max-h-80 max-w-full" alt="" />
                <div className="">
                <p className= "flex-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Reprehenderit dolore harum ad consequatur, obcaecati cum eius ab corporis ipsam iusto deserunt molestiae aperiam ea optio?</p>
                </div>
                
            </div>
        </section>

        {/* section---------3 */}
        <section className=" px-5 py-10 flex flex-wrap flex-col justify-center items-center">
            <div className="flex flex-wrap w-full flex-col h-auto font-bold justify-center mb-3 items-center rounded ">
                <p className="mb-2">CheckOut Domains</p>
                <div className="border-b-2 border-orange-500 w-20"></div>
            </div>

            <div>
            <ul className="md:flex font-semibold">
                    <li className="mx-[10px]">Domain-1</li>
                    <li className="mx-[10px]">Domain-1</li>
                    <li className="mx-[10px]">Domain-1</li>
                    <li className="mx-[10px]">Domain-1</li>
            </ul>
            </div>
        </section>
        </>
    )
}