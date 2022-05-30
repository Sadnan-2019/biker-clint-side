import React from "react";

const Newreview = ({ review }) => {
   
  const { name, reviewdescription, rating } = review;
  return (
    <div class="card bg-gradient-to-r flex from-green-400 to-blue-500 shadow-xl  text-white mb-5   p-4 ">
    

      <div class="flex items-center  justify-center ">
        <div>
          <div class="avatar">
            <div class="w-24 mx-10 rounded-full ring ring-primary ring-offset-base-100  mr-5">
            <img className="" src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png" alt="" />
            </div>
          </div>
        </div>

        <div class="mr-5  ">
          <h2>{name}</h2>
          <h2>{reviewdescription}</h2>
         
       <div className="flex items-center ">
       <div><h2 className="">{rating}</h2></div>
         <div class="rating gap-1 mx-2 mt-2" >
  <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
  <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
</div>
       </div>
         

   
        </div>
      </div>
    </div>
  );
};

export default Newreview;
