import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
          console.log(data);
    e.target.reset();

    const url=(`http://localhost:5000/tools`)
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


          <div class="hero min-h-screen bg-base-200">
      <div class="hero-content lg:grid-cols-12">
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
            />
          </div>

          <div className="form-control w-full max-w-xs mb-2">
            <input
              {...register("price")}
              className="input input-bordered w-full max-w-xs"
              placeholder="price"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <input
              type="text"
              {...register("shortdescription")}
              className="input input-bordered w-full max-w-xs"
              placeholder="shortdescription"
              required
            />
          </div>

          <div className="form-control w-full max-w-xs mb-2">
            <input
              type="text"
              {...register("availablequantity")}
              className="input input-bordered w-full max-w-xs"
              placeholder="availablequantity"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <input
              type="text"
              {...register("minimumquantity")}
              className="input input-bordered w-full max-w-xs"
              placeholder="minimumquantity"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <input
              type="text"
              {...register("suppliername")}
              className="input input-bordered w-full max-w-xs"
              placeholder="suppliername"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs mb-2">
            <input
              type="text"
              {...register("img")}
              className="input input-bordered w-full max-w-xs"
              placeholder="photo-url"
              required
            />
          </div>
          <input className="btn btn-info" type="submit" />
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddProduct;
