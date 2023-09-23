import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { SlCalender } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { addToLocalStorage } from "../../utilities/localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const warning = () => toast("Successfully Applied !!");
const JobDetails = () => {

    const jobs = useLoaderData();


    const selectedJobId = useParams();

    const selectedJobs = jobs.find(item => item.id === parseInt(selectedJobId.jobId));


    const { id,job_description, job_responsibility, educational_requirements, experiences } = selectedJobs;
    const { job_title, salary, contact_information } = selectedJobs;

    const handleAddingAppliedJobs = () =>{
           addToLocalStorage(id);
           warning();
           
           
    }

    return (

        <>
            <h1 className="text-4xl font-bold text-center mt-10 mb-10">Job Details</h1>
            <div className="flex px-20 justify-between">


                <div>
                    <div>
                        <h1><span className="text-xl font-bold">Job Description: </span>{job_description}</h1>

                        <h1 className="mt-7"><span className="text-xl font-bold">Job Responsibility: </span> {job_responsibility}</h1>

                        <h1 className="text-xl font-bold mt-7">Educational Requirements: <br /></h1>
                        <h1 className="mt-5 mb-5">{educational_requirements}</h1>

                        <h1 className="text-xl font-bold mt-7">Experiences: <br /></h1>
                        <h1 className="mt-5 mb-5">{experiences}</h1>
                    </div>
                </div>
                <div className="bg-blue-300 rounded-md">
                    <div className="p-7">
                        <h1 className="text-xl font-bold">Job Details</h1>

                        <h1 className='flex items-center gap-2 mt-4'><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</h1>
                        <h1 className='flex items-center gap-2 mt-4'><SlCalender></SlCalender>{job_title}</h1>

                        <h1 className="text-xl font-bold mt-8">Contact Information</h1>

                        <h1 className='flex items-center gap-2 mt-4'><BsTelephone></BsTelephone>{contact_information.phone}</h1>
                        <h1 className='flex items-center gap-2 mt-4'><AiOutlineMail></AiOutlineMail>{contact_information.email}</h1>
                        <h1 className='flex items-center gap-2 mt-4'><GrLocation></GrLocation>{contact_information.address}</h1>

                    </div>
                    <button onClick={handleAddingAppliedJobs} className="btn mt-7 w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white">Apply Now</button>
                    <ToastContainer/>







                </div>
            </div>
        </>
    );
};

export default JobDetails;