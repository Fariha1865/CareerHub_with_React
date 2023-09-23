
function getFromLocalStorage(){

    const allAppliedJobs =JSON.parse(localStorage.getItem('AppliedJobs'));
    if(allAppliedJobs)
    {
        return allAppliedJobs;
    }else{
        return [];
    }

}

function addToLocalStorage(id){

    const appliedJobs = getFromLocalStorage();
    console.log(appliedJobs)
    const jobsApplied = appliedJobs.find(item=>parseInt(item)===id);
    if(!jobsApplied)
    {
        appliedJobs.push(id);
        localStorage.setItem('AppliedJobs',JSON.stringify(appliedJobs))
    }
    
}

export {getFromLocalStorage,addToLocalStorage}