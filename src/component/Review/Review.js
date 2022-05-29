import React, { useEffect, useState } from "react";
import Newreview from "../Newreview/Newreview";

const Review = () => {

const [reviews,setReview] = useState([])
useEffect(()=>{

  fetch(`http://localhost:5000/review`)
  .then(res => res.json())
  .then(data =>console.log(data))
},[])


  return (
    <div>

      <div className="">
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
