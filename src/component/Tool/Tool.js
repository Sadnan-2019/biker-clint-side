import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id,name, availablequantity, img, shortdescription } = tool;

  const navigate=useNavigate()
  const navigatePurchase =(id)=>{

    // console.log(id)

    navigate(`/purchase/${id}`)
  



  }
  return (
    <div className="card  bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10 ">
        <img
          src={img}
          alt=""
          className="rounded-xl w-[50%]   "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name:{name}</h2>
        <p className="text-justify">Short-Description:{shortdescription}</p>
        <p className="text-justify">Available-Quentity:{availablequantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>navigatePurchase(_id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
