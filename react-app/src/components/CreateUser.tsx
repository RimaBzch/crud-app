import React, { useState } from 'react';
import { useCreateUserMutation, useGetusersQuery } from '../../src/redux/api/userApi';
import { User } from './users.types';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const [user, setUser] = useState<User>({
    id: NaN,
    firstName: '',
    lastName: '',
    email: '',
  });
  const [createUser, { isError, isLoading }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSaveUser = async () => {
    await createUser(user)
      .unwrap()
      .then((res) => {
        if (res) {
          navigate('/');
        }
      });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={(e) =>
              setUser({ ...user, firstName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="button" onClick={onSaveUser} disabled={isLoading}>
          Save
        </button>
      </form>
      {isError && <div>Error creating user</div>}
    </div>
  );
}
