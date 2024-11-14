import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../store/app";
import api from "../../services/api";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    api
      .login(data.email, data.password)
      .then((response) => {
        if (response.status !== 200) {
          toast.success('"Đăng nhập thành công"');
        }
        dispatch(setCurrentUser(response.data));
        window.location.href = "/";
      })
      .catch(() => {
        setLoading(false);
        toast.error("Đăng nhập thất bại");
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: { value: true, message: "Email is Required" },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: { value: true, message: "Password is Required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {!loading ? (
              <button
                className="btn w-full max-w-xs text-white bg-primary"
                type="submit"
              >
                Login
              </button>
            ) : (
              <button
                className="btn w-full max-w-xs text-white bg-primary"
                type="submit"
                disabled={loading}
              >
                Loading...
              </button>
            )}
          </form>
          <p className="flex justify-between">
            <small>
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
            <small>
              <Link className="text-primary" to="/forgot-password">
                Forgot Password
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
