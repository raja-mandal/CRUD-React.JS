import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data);
        // console.log(result);
    }

    return (
        <>
            <h4>User ID {id}</h4>
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
            </ul>
        </>
    );
};

export default ViewUser;