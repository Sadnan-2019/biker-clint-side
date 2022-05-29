import React from "react";

const Newreview = ({ review }) => {
  const { name, reviewdescription, rating } = review;
  return (
    <div>
      <p className="text-5xl font-bold">{name}</p>
    </div>
  );
};

export default Newreview;
