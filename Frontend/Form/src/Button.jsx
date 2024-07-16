import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Button = () => {
    const userId = uuidv4();
    return (
        <button type="button" className="btn btn-primary"> <Link to={`/form/${userId}`}>Fill out the form</Link></button>
    );
};

export default Button;
