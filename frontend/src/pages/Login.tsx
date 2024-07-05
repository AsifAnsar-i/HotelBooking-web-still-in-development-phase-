import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import { useAppContext } from "@/contexts/AppContext";

export type LoginFormProps = {
  email: string;
  password: string;
};

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const mutation = useMutation(apiClient.login, {
    onSuccess: async () => {
      showToast({ message: "Login Successfully", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>();
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="flex relative gap-6 py-10 justify-center">
        <div className="hidden lg:flex">
          <img
            src="/src/assets/arlene.png"
            alt="spotify"
            className="contain-content h-[566px] rounded-se-full shadow-2xl"
          />
        </div>

        <div className="flex flex-col gap-4">
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

          <Button
            type="submit"
            className="bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-[#52050a]"
          >
            Login
          </Button>
          <p className="text-sm text-gray-700">
            Not Registered yet?{" "}
            <Link to="/register" className="text-pink-700 text-sm underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
