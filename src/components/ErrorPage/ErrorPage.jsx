import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    const goBack = () => {

        navigate("/");
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-40">Ooopsss!!!</h1>
            <p className="text-xl font-bold text-center mt-10">{error.statusText || error.error.message}</p>
            {
                error.status = "404" && <div className="text-xl font-bold text-center mt-10">

                    <h1>Page Not Found</h1>
                    <div className="flex justify-center mt-10">
                    </div>
                </div>


            }
            {
                <div className="flex justify-center">

                    <button onClick={goBack} className="btn bg-blue-700 text-white hover:bg-blue-800 mb-10">Go Back</button>

                </div>
            }
        </div>
    );
};

export default ErrorPage;