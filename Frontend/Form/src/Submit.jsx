import React from 'react';
import { Link } from 'react-router-dom';
const Submit = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} className="display-4 mb-3">
            <div>
                <h1 style={{ fontSize: "50px" }} className="lead">Thank you for submitting the form !</h1>
                <Link to={"/"}>
                    <button style={{ marginLeft: "18rem", width: "20%" }} type="button" className="btn btn-primary">Back</button>
                </Link>

            </div>
        </div>
    );
}

export default Submit;
