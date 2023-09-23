import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
const showAppliedJobs = ({ jobs }) => {

    const { id,logo, job_title, company_name, location, salary,remote_or_onsite,job_type } = jobs
    return (
        <div className='mt-10 max-w-3xl mx-auto mb-7 flex border border-solid border-purple-800 items-center justify-between'>
            <div className=' p-10 rounded-md'>
                <img src={logo} alt="" />
                <h1 className='text-2xl font-bold my-3'>{job_title}</h1>
                <p>{company_name}</p>
                <div className='flex gap-5 mt-3 mb-3'>
                    <h1 className='border border-solid border-purple-600 py-1 px-4 text-lg text-purple-500 font-bold'>{remote_or_onsite}</h1>
                    <h1 className='border border-solid border-purple-600 py-1 px-4 text-lg text-purple-500 font-bold'>{job_type}</h1>
                </div>
                <div className='flex gap-5'>
                    <h1 className='flex items-center gap-2'><GrLocation></GrLocation>{location}</h1>
                    <h1 className='flex items-center gap-2'><AiOutlineDollarCircle></AiOutlineDollarCircle>{salary}</h1>
                </div>


                
            </div>
            <Link to={`/JobDetails/${id}`} className="mt-5 btn lg:mr-20 bg-gradient-to-r from-blue-400 to-purple-600 text-white">View Details</Link>

        </div>
    );
};

showAppliedJobs.propTypes = {
    jobs: PropTypes.object.isRequired
}
export default showAppliedJobs;