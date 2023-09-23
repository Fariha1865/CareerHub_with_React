import PropTypes from 'prop-types';
import {GrLocation} from 'react-icons/gr'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import { Link} from 'react-router-dom';
const Job = ({job}) => {

    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    

    return (
        <div className='border border-solid border-purple-800 p-10 rounded-md'>
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
            
          
                <Link to={`/JobDetails/${job.id}`} className="mt-5 btn lg:mr-20 bg-gradient-to-r from-blue-400 to-purple-600 text-white">View Details</Link>
            
            </div>
        )
    };

    Job.propTypes={
        job: PropTypes.object.isRequired
    }
    export default Job;

