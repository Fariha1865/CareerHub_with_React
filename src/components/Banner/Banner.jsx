const Banner = () => {
    return (
        <div className="mt-40 md:mt-72 lg:mt-0 flex flex-col lg:flex-row justify-center items-center max-h-screen">
            <div className="flex-1 pl-5 md:pl-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-5">One Step<br/> Closer To Your<br/> <span className="text-purple-800">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="mt-5 btn mr-20 bg-gradient-to-r from-blue-400 to-purple-600 text-white">Get Started</button>

            </div>
            <div className="flex-1">
                <img src="user.png" alt=""/>
            </div>
        </div>
    );
};

export default Banner;