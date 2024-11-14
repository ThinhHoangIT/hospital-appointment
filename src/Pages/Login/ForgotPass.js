import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    api
      .forgotPassword(data.email)
      .then((response) => {
        toast.success("Reset Email Sent");
      })
      .catch(() => {
        toast.success("Reset Email Sent");
      });
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Forgot Password</h2>
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
            <button
              className="btn w-full max-w-xs text-white bg-primary"
              type="submit"
            >
              Send Reset Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
