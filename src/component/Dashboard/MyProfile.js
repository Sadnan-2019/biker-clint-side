import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
     
    
      

      <div class="card w-96 bg-base-100 shadow-xl image-full mt-5">
        <figure>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />

        </figure>
        <div class="card-body">
          <h2 class="card-title">My Email:{user.email}</h2>
          <p className="font-bold">Full Name:  {user.displayName}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">More About</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
