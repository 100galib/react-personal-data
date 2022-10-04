import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePerson = ({user}) => {
    const {id, name, username, email, company} = user;
    const navigae = useNavigate();
    const postGetData = ()=> {
        navigae(`/personal/${id}`)
    }
    return (
        <div className='single-user'>
            <h1>{name}</h1>
            <p>User: {username}</p>
            <p>Email: <small><a className='email-link' href='/email'>{email}</a></small></p>
            <p>Company Name: {company.name}</p>
            <p>Company Details: {company.catchPhrase}</p>
            <p>Company Type: {company.bs}</p>
            <button onClick={postGetData} className='personal-button'>Personal Info</button>
        </div>
    );
};

export default SinglePerson;