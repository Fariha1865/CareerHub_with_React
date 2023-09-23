import { useEffect, useState } from "react";
import Job from "./Job";


const Featured = () => {

    const [jobs, setJobs] = useState([]);
    const [jobsLength,setJobsLength] = useState(4);
    

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mt-52 md:mt-64 lg:mt-10">
            <h1 className="text-4xl font-bold text-center mb-3">Featured Jobs</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-20">
                {
                    jobs.slice(0,jobsLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex justify-center">
                    <button onClick={jobsLength === jobs.length ? ()=>setJobsLength(4) : ()=>setJobsLength(jobs.length)} className="btn bg-gradient-to-r from-blue-400 to-purple-600 text-white w-40">{jobsLength === jobs.length ? "Collapse" : "Show All Jobs"}</button>

                </div>
        </div>
    );
};

export default Featured;