import React from 'react';
import './AddUser.css';
import { Link } from 'react-router-dom';

const AddUser = () => {
  return (
    <div className='addUser'>

        <Link to="/" type="button" class="btn btn-secondary">Back</Link>

        <h3>Add New User</h3>

        <form className='addUserForm'>

            <div className='form-group'>
                <label for='name'>Name</label>
                <input type='text' className='form-control' id='name' placeholder='Enter Your Name...' />
            </div>

            <div className='form-group'>
                <label for='email'>E-mail</label>
                <input type='email' className='form-control' id='email' placeholder='Enter Your Email...' />
            </div>

            <div className='form-group'>
                <label for='address'>Address</label>
                <input type='text' className='form-control' id='address' placeholder='Enter Your Address...' />
            </div>

            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>

        </form>
    </div>
  )
}

export default AddUser;