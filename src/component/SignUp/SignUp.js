import { async } from "@firebase/util";
import React from "react";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import auth from "../../firebase.init";
import Loading from "../Loading/Loading";


const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleUserloading, googleUsererror] =
    useSignInWithGoogle(auth);

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);



  const navigate =useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInrror;
  if (googleUser || user) {
    console.log(user);
    navigate("/")

  }

  if (loading || googleUserloading || updating) {
    return <Loading></Loading>;
  }

  if (error || googleUsererror || updatingError) {
    signInrror = (
      <p className="text-red-500 ">
        {error.message || googleUsererror.message || updatingError.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);

    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });
    navigate("/")
    console.log("update done");
    console.log("update done",data.email,data.displayName);
  };

  return (
//     





<div className="mt-12">
      <div
        className="hero min-h-screen py-10"
        style={{
          backgroundImage: `url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/old-motorcycle-shop-mike-mcglothlen.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h4 className="text-center text-2xl font-bold">Register</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please file the Name field",
                    },
                    
                  })}
                  type="name"
                  placeholder="your email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>






              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please file the Email field",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Please provide correct email ",
                    },
                  })}
                  type="email"
                  placeholder="your email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Paasword</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please file the password field",
                    },
                    minLength: {
                      value: 6,
                      message: "Please provide six more digit  ",
                    },
                  })}
                  type="password"
                  placeholder="your password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input type="submit" className="btn btn-primary" value="Register" />
              {signInrror}
            </form>

            <p>
             <small className="text-primary">
               Already Account?{" "}
              <Link className="btn btn-link text-primary" to="/login">
                 Login
               </Link>
             </small>
           </p>

            <div className="divider">OR</div>

            <button
              className="btn btn-primary  mb-5"
              onClick={() => signInWithGoogle()}
            >
              SignInWith Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
