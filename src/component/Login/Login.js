import React from "react";

const Login = () => {
  return (
    <div className="mt-12">
      <div
        class="hero min-h-screen py-10"
        style={{
          backgroundImage: `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/old-motorcycle-shop-mike-mcglothlen.jpg")`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
      <button class="btn btn-primary  mb-5">SignInWith Google</button>
    </div>
      </div>
    </div>
  );
};

export default Login;
