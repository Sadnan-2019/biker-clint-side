import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [user,loading,error] = useAuthState(auth)

    const onSubmit = (data, e) => {
        // console.log(data);
  e.target.reset();

  const url=(`http://localhost:5000/review`)
  fetch(url,{
            method: "POST",
            headers:{
                      "content-type": "application/json"
            },
            body:JSON.stringify(data)
  })
  .then(res => res.json())
  .then(result =>{
            console.log(result)
        
        
        })

};

  return (
   
  <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className=" font-bold text-2xl text-center">Add Tool</h1>
    <div className="card-body  w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mt-5   p-5 "
      >
        <div className="form-control w-full max-w-xs mb-2  ">
          <input
            {...register("name")}
            className="input input-bordered w-full max-w-xs  "
            placeholder="name"
            required
            value={user.displayName}
          />
        </div>

         
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="text"
            {...register("reviewdescription")}
            className="input input-bordered w-full max-w-xs"
            placeholder="review"
            required
          />
        </div>
        <div className="form-control w-full max-w-xs mb-2">
          <input
            type="number"
            {...register("rating")}
            className="input input-bordered w-full max-w-xs"
            placeholder="rating"
            required
          />
        </div>

        
        
       
        
        <input className="btn btn-info" type="submit" />
      </form>
    </div>
  </div>
  




      
  );
};

export default AddReview;
