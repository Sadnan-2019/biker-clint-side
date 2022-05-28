import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import User from "./User";
// import Loading from '../Loading/Loading';

const Users = () => {
  // const [users,setUsers] = useState([])

  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3>users{users.length}</h3>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <User key={user._id} user={user} i={i}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
