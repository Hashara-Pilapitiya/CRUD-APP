import React, { useState } from 'react';
import './AddUser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddUser = () => {

    const users = {
        name: "",
        email: "",
        address: ""
    };

    const [user, setUser] = useState(users);

    const navigate = useNavigate();

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name,value);

        setUser({...user, [name]: value});
    }

    const submitForm = async(e) => {
        e.preventDefault();
        await axios
        .post("http://localhost:8000/api/user", user)
        .then((response) => {
            toast.success(response.data.message, {position: 'top-right'});   
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (

    <div className='addUser'>

        <Link to="/" type="button" class="btn btn-secondary">Back</Link>

        <h3>Add New User</h3>

        <form className='addUserForm' onSubmit={submitForm}>

            <div className='form-group'>
                <label for='name'>Name</label>
                <input type='text' className='form-control' name='name' onChange={inputHandler} id='name' placeholder='Enter Your Name...' />
            </div>

            <div className='form-group'>
                <label for='email'>E-mail</label>
                <input type='email' className='form-control' name='email' onChange={inputHandler} id='email' placeholder='Enter Your Email...' />
            </div>

            <div className='form-group'>
                <label for='address'>Address</label>
                <input type='text' className='form-control' name='address' onChange={inputHandler} id='address' placeholder='Enter Your Address...' />
            </div>

            <div className='form-group'>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>

        </form>
    </div>
  )
}

export default AddUser;