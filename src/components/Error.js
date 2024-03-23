import { useRouteError } from "react-router-dom";
// with the help of useRouteError we can show more information about the error

const Error = () => {
    const err = useRouteError();
    // here we store the information of error
    console.log(err);
    return(
        <div>
            <h1>Oops!!!!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
};


export default Error;