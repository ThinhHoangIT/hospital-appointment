import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

const ResetPassword = () => {
  const { token } = useParams(); // Lấy token từ URL
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    api
      .confirmForgotPassword(token, data.newPassword) // Sử dụng token để gọi API
      .then(() => {
        setLoading(false);
        toast.success("Password reset successfully!");
        window.location.href = "/login";
      })
      .catch(() => {
        setLoading(false);
        toast.error("Error resetting password");
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Reset Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                placeholder="New Password"
                className="input input-bordered w-full max-w-xs"
                {...register("newPassword", {
                  required: { value: true, message: "Password is Required" },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.newPassword && (
                  <span className="label-text-alt text-red-500">
                    {errors.newPassword.message}
                  </span>
                )}
              </label>
            </div>
            <button
              className="btn w-full max-w-xs text-white bg-primary"
              type="submit"
              disabled={loading}
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
