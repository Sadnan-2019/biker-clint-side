import React from "react";

const Category = () => {
  return (
    <div>
      <h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Our Tools Category
      </h2>

      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-12">


      <div class="card   bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
        <div class="card-body">
        <h2 class="card-title">Engine and Transmission</h2>
       
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://www.cbfparts.com/wp-content/uploads/2021/10/s02-img3-a.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>Honda</h2>
              <h2>Yahama</h2>
              <h2>CBR</h2>
              <h2>Ducaty</h2>
              <h2>Bajaj</h2>
              
            </div>
          </div>
        </div>
      </div>
      <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
        <div class="card-body">
        <h2 class="card-title">Lighter</h2>
        
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://www.cbfparts.com/wp-content/uploads/2021/10/s02-img5-a.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>Honda</h2>
              <h2>Yahama</h2>
              <h2>CBR</h2>
              <h2>Hero</h2>
              <h2>Roadmaster</h2>
              
            </div>
          </div>
        </div>
      </div>
      <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
        <div class="card-body">
          <h2 class="card-title">Brekings</h2>
        
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://www.cbfparts.com/wp-content/uploads/2021/10/s02-img1-a.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>Honda</h2>
              <h2>Yahama</h2>
              <h2>CBR</h2>
              <h2>Tvs</h2>
              
            </div>
          </div>
        </div>
      </div>
      <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
        <div class="card-body">
        <h2 class="card-title">Wheels</h2>
           
          <div class="flex items-center   ">
            <div>
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                  <img
                    src="https://www.cbfparts.com/wp-content/uploads/2021/10/Motorcycle-Wheels.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="mr-5 ">
              <h2>Honda</h2>
              <h2>Yahama</h2>
              <h2>CBR</h2>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Category;
