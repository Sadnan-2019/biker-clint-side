import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { toolId } = useParams();
  const [purchase, setPurchase] = useState({});
  const [user,loading,error] =useAuthState(auth)

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${toolId}`)
      .then((res) => res.json())
      .then((data) => setPurchase(data));
  }, []);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src={purchase.img}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-bold">{purchase.name}</h2>
            <p className="font-bold">Short-Description:{purchase.shortdescription}</p>
            <p className="font-bold">Minimum Quentity:{purchase.minimumquantity}</p>
            <p className="font-bold">Available Quentity:{purchase.availablequantity}</p>
            
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
                    <form >
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered"
                value={user?.email}
                disabled
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered"
                value={user?.displayName}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="Phone"
                class="input input-bordered"
              />
            </div>
<div className="grid lg:grid-cols-3 m-4">
<button className="btn btn-secondary m-4">+</button>
<input type="text"  class="   input input-bordered w-full max-w-xs "   value={purchase.minimumquantity} />
<button className="btn btn-primary m-4">-</button>
</div>

            <div class="form-control mt-6">


              <input class="btn btn-primary" value="Order"/>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
