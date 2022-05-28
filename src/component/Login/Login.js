import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTools from "../../hooks/useTools";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  let signInrror;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const [token] = useToken(user || userGoogle)

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  // useEffect(()=>{

  //   if (token) {
  //     // console.log(user);
  //     navigate(from, { replace: true });
  
  //   }
  // },[token,from,navigate])

  if (token) {
    // navigate("/")
    // console.log(userGoogle);
    navigate(from, { replace: true });
  }
  if (errorGoogle || error) {
    signInrror = (
      <p className="text-red-500 ">{errorGoogle?.message || error?.message}</p>
    );
  }
  if (loading || loadingGoogle) {
    return <Loading></Loading>;
  }

  return (
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
            <h4 className="text-center text-2xl font-bold">Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <input type="submit" className="btn btn-primary" value="Login" />
              {signInrror}
            </form>

            <p>
              <small className="text-primary">
                New to this site?{" "}
                <Link className="btn btn-link text-primary" to="/signup">
                  Create New Account
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

export default Login;
