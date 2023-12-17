import React from 'react';
import { useGetusersQuery, useDeleteUserMutation } from '../../src/redux/api/userApi';
import { User } from './users.types';
import { useNavigate } from 'react-router-dom';

export default function ListUsers() {
  const { data, isFetching } = useGetusersQuery(null);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const navigate = useNavigate();
  const isData = data && !isFetching;
  const handleUpdateUser = (userId: number) => {
    navigate(`/update/${userId}`, {state: data.find((user: { id: number; }) => user.id === userId)});
  };
  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUser(userId);
      window.location.reload();
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  return (
    <div>
      {isData && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <br></br>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: User) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                <button onClick={() => handleUpdateUser(user.id)} disabled={isLoading}>
                    Update
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} disabled={isLoading}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isFetching && <div>Loading...</div>}
    </div>
  );
}
