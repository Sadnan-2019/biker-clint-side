import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Our User Review
      </h2>
     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 px-12 ">


     <div class="card w-96 bg-base-100 shadow-xl  ">
        <div class="card-body">
          {/* <div class="card-actions justify-end">
       
    </div> */}
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img src="https://api.lorem.space/image/face?hash=64318" alt="" />
            </div>
            <p className="mx-5">We are using cookies for no reason.</p>

          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {/* <div class="card-actions justify-end">
       
    </div> */}
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img src="https://api.lorem.space/image/face?hash=64318" alt="" />
            </div>
            <p className="mx-5">We are using cookies for no reason.</p>

          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {/* <div class="card-actions justify-end">
       
    </div> */}
          <div class="avatar">
            <div class="w-24 rounded-xl">
              <img src="https://api.lorem.space/image/face?hash=64318" alt="" />
            </div>
            <p className="mx-5">We are using cookies for no reason.</p>

          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Review;
