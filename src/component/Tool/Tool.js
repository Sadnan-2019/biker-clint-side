import React from "react";

const Tool = ({ tool }) => {
  const { name, availablequantity, img, shortdescription } = tool;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Name:{name}</h2>
        <p>Short-Description:{shortdescription}</p>
        <p>Available-Quentity:{availablequantity}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
