import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePerson from './SinglePerson';
import './SinglePerson.css'

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>The Home User number : {users.length}</h1>
            <div className='wrap-user'>
                {
                    users.map(user => <SinglePerson key={user.id} user={user}></SinglePerson>)
                }
            </div>
        </div>
    );
};

export default Home;