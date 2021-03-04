import React, { useState, useEffect } from 'react';
import './DashboardTable.css';
// import AddUser from '../../../components/users/AddUser';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardComp = () => {

    //   user's data
    const [users, setUser] = useState([])

    //  search filter
    const [searchTerm, setSearchTerm] = useState('')



    // show per page
    // const [showPerPage, setShowPerPage] = useState(5)

    // table pagination
    // const [pagination, setPagination] = useState({
    //     start: 0,
    //     end: showPerPage,
    // })

    //    pagination count
    // const onPaginationChange = (start, end) => {
    //     console.log(start, end);
    //     setPagination({ start: start, end: end })
    // }

    useEffect(() => {
        loadUsers();
    }, [])

    // user's api data
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3002/users');
        console.log('users data', result.data)
        setUser(result.data.reverse());
        // console.log(result.data);
    }

    // implement delete function
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }
    // end implement delete function

    return (
        <div className="container">
            <h2 className="text-left pt-4">Dashboard</h2>
            <div className="table-responsive shadow" style={{ height: 450 }}>
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="btn-box">
                                    <Link to="/users/add" type="button" class="btn btn-outline-primary btn-sm">Add User</Link>
                                </div>
                            </div>
                            {/* <div className="col-sm-8"></div> */}
                            <div className="col-sm-6">
                                <div className="search-box">
                                    <i className="material-icons"></i>
                                    <input type="text" className="form-control" placeholder="Search by name" onChange={event => { setSearchTerm(event.target.value) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Name <i className="fa fa-sort" /></th>
                                <th>Username</th>
                                <th>Email <i className="fa fa-sort" /></th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.filter((user) => {
                                    if (searchTerm == "") {
                                        return user
                                    } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return user
                                    }
                                }).map((user, index) => (
                                    <tr key={user.id}>
                                        {/* <th scope="row">{index + 1}</th> */}
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/users/view/${user.id}`} className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></Link>
                                            <Link to={`/users/edit/${user.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>
                                            <Link href="#" className="delete" title="Delete" data-toggle="tooltip" onClick={() => deleteUser(user.id)}><i className="material-icons"></i></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {/* <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={users.length} /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardComp;
