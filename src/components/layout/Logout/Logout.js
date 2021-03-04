import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {

    let history = useHistory();

    const handleClick = () => {
        // console.log('Click happened');
        localStorage.clear();
        history.push("/");
    }

    return (
        <button className="btn btn-outline-light my-2 my-sm-0" onClick={handleClick}>Log out</button>
    )
}

export default Logout;
