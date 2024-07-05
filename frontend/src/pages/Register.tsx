import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { useAppContext } from "@/contexts/AppContext";

export type RegisterFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};


const Register = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.register, {
    onSuccess: async() => {
      showToast({ message: "Register Successfully", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken")
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>();
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="flex relative gap-6 py-10 justify-around">
        <div className="hidden lg:flex">
          <img
            src="/src/assets/hotelReg.jpeg"
            alt="spotify"
            className="contain-content h-[566px] rounded-ss-full shadow-2xl"
          />
          <img
            src="/src/assets/hotelReg2.jpeg"
            alt="spotify"
            className="contain-content h-[566px] absolute left-[570px]  rounded-ee-full shadow-2xl "
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-gray-700 font-bold text-sm">
            First Name
            <input
              type="text"
              className="border text-base w-full rounded py-1"
              {...register("firstName", { required: "firstName is required" })}
            ></input>
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </label>
          <label className="text-gray-700 font-bold text-sm">
            Last Name
            <input
              type="text"
              className="border text-base w-full rounded py-1"
              {...register("lastName", { required: "lastName is required" })}
            ></input>
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </label>
          <label className="text-gray-700 font-bold text-sm">
            Email
            <input
              type="email"
              className="border text-base w-full rounded py-1"
              {...register("email", { required: "email is required" })}
            ></input>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </label>
          <label className="text-gray-700 font-bold text-sm">
            Password
            <input
              type="password"
              className="border text-base w-full rounded py-1"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters long",
                },
              })}
            ></input>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </label>
          <label className="text-gray-700 font-bold text-sm">
            Confirm Password
            <input
              type="password"
              className="border text-base w-full rounded py-1"
              {...register("confirmPassword", {
                validate: (val) => {
                  if (!val) {
                    return "confirm password is required";
                  } else if (watch("password") !== val) {
                    return "passwords do not match";
                  }
                },
              })}
            ></input>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </label>
          <Button type="submit" className="bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-[#52050a]">Register</Button>
          <p className="text-sm text-gray-700">
            Already Registered?{" "}
            <Link to="/login" className="text-pink-700 text-sm underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
