import React from "react";
import { toast } from "react-toastify";

const User = ({ user, i ,refetch}) => {
  const { email,role} = user;
const makeAdmin=()=>{
     fetch(`http://localhost:5000/user/admin/${email}`,{

     method:"PUT",
     headers:{
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,

     }
     
     })
     .then(res => {
       if(res.status === 403){
         toast.error("Faild make admin")
       }
     })
     .then(data=>{
      if(data.modifiedCount > 0){
        toast("Make Admin Done")
        // console.log(data)
        refetch()
      }
     })

}
  return (
    <tr>
      <th>{i + 1}</th>
      <td className="">{email}</td>
      <td>
       {
         role !== "admin" && <button class="btn btn-xs " onClick={makeAdmin}>Make Admin</button>
       }
      </td>
    </tr>
  );
};

export default User;
