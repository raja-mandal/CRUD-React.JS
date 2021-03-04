import React, { useState } from 'react';
import './Signin.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast, zoom, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Signin = () => {

    const [loading, setloading] = useState(false)

    let history = useHistory();

    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        setloading(true)

        //  login api call
        axios.post('https://jivandeep.herokuapp.com/api/admin/login', data)
            .then(res => {
                // alert('connected');
                console.log(res)
                toast.success('Successfully login');
                history.push("/dashboard");
                localStorage.setItem('login', JSON.stringify(res.data.token))
                setloading(false)
            })
            .catch(res => {
                setloading(false)
                toast.error('Incorrect username or password');
                // console.log('disconnected')
            })
    }




    return (
        <div>
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                    <h4 className="card-title mt-3 text-center">Sign In</h4>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <input name className="form-control" placeholder="Email address" type="email" name="email"
                                ref={register({
                                    required: 'Email is Invalid*',
                                    pattern: /^\S+@\S+$/i,
                                })} />
                        </div> {/* form-group// */}
                        {errors.email && (
                            <p style={{ color: 'red' }}>{errors.email.message}</p>
                        )}

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-key" /> </span>
                            </div>
                            <input name className="form-control" placeholder="Password" type="password" name="password"
                                ref={register({
                                    required: 'Password is invalid*',
                                    minLength: { value: 8, message: 'Too sort' },
                                })} />
                        </div> {/* form-group// */}
                        {errors.password && (
                            <p style={{ color: 'red' }}>{errors.password.message}</p>
                        )}

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary "> Login </button>
                        </div> {/* form-group// */}
                    </form>
                </article>
            </div>
            {/* preloader */}
            {loading ? <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div> : (null)}
            {/* card.// */}
            {/*container end.//*/}
        </div>
    );
}

export default Signin;
