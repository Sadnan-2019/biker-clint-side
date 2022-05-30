import React, { useEffect, useState } from "react";
import Newreview from "../Newreview/Newreview";

const Review = () => {

const [reviews,setReview] = useState([])
useEffect(()=>{

  fetch(`http://localhost:5000/review`)
  .then(res => res.json())
  .then(data =>setReview(data))
},[])


  return (
    <div>
<h2 class="text-center text-slate-800 text-4xl font-bold   py-10">Our Customer Review</h2>
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 px-12 py-12 ">


{

  reviews.map(review =><Newreview
  key={review._id}
  review={review}
  >

  </Newreview>)
}
      </div>
    </div>
  );
};

export default Review;
