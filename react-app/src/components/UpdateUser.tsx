import React, {useEffect, useState} from 'react';
import {useUpdateUserMutation} from '../../src/redux/api/userApi';
import {UserUpdate} from './usersupdate.types'
import {useLocation, useNavigate, useParams} from "react-router-dom";



export default function UpdateUserComponent() {
    const [updatedUser, setUpdatedUser] = useState<UserUpdate>({
        firstName: '',
        lastName: '',
        email: '',
        id: null
    });
    const [updateUser] = useUpdateUserMutation();

    const {id} = useParams();

    const {state} = useLocation()

    const navigate = useNavigate();

    const handleUpdateUser = async () => {
        try {
            // @ts-ignore
            await updateUser({
                id: updatedUser.id!, 
                user: {
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email,
                },
            });
           alert('User updated successfully');
           navigate('/');
        } catch (error) {
            alert('Error occurred while deleting user');
        }
    };

    useEffect(() => {
        console.log(id);
        console.log(state);
        setUpdatedUser(state)
    }, [id, state])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedUser({...updatedUser, [e.target.name]: e.target.value});
    };

    return (
        <div>
            <h2>Update </h2>
            
            <input
                type="text"
                name="firstName"
                value={updatedUser?.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                value={updatedUser?.lastName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="email"
                value={updatedUser?.email}
                onChange={handleChange}
            /><br></br><br></br>
            <button onClick={handleUpdateUser}>Update</button>
        </div>
    );
}
