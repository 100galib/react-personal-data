import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SinglePerson.css'

const SinglePersonDetails = () => {
    const singleUser = useLoaderData();
    return (
        <div className='style-single-personal'>
            <h1>{singleUser.title}</h1>
            <p>{singleUser.body}</p>
        </div>
    );
};

export default SinglePersonDetails;