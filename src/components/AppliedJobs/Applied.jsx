import { useLoaderData } from "react-router-dom";
import { getFromLocalStorage } from "../../utilities/localStorage";
import ShowAppliedJobs from "./showAppliedJobs";
import { useEffect, useState } from "react";
import { FaFilter } from 'react-icons/fa'
const Applied = () => {

    const allJobs = useLoaderData();
    const [allAppliedJobs, setAllAppliedJobs] = useState([]);
    const appliedJobs = getFromLocalStorage();



    useEffect(() => {
        if (allJobs.length > 0) {
            setAllAppliedJobs(allJobs.filter(job => appliedJobs.includes(job.id)));

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleFilter(type) {


        const tempAppliedJobs = allJobs.filter(job => appliedJobs.includes(job.id))
        setAllAppliedJobs(tempAppliedJobs.filter(job => job.remote_or_onsite === type))


    }
    console.log(allAppliedJobs)
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">Applied Jobs</h1>
            <div className="mt-10 flex justify-end max-w-3xl mx-auto items-end">
                <details className="dropdown">
                    <summary className="m-1 btn flex items-center bg-gray-500 text-white hover:bg-gray-700">Filter<FaFilter></FaFilter></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>setAllAppliedJobs(allJobs.filter(job => appliedJobs.includes(job.id)))}><a>All</a></li>
                        <li onClick={() => handleFilter("Remote")}><a>Remote</a></li>
                        <li onClick={() => handleFilter("Onsite")}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                allAppliedJobs.map(jobs => <ShowAppliedJobs key={jobs.id} jobs={jobs}></ShowAppliedJobs>)
            }
        </div>
    );
};

export default Applied;