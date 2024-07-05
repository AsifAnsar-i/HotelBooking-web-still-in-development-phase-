import { useAppContext } from "@/contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Logout = () => {
    const queryClient = useQueryClient()
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(apiClient.logOut, {
    onSuccess: async() => {
       await queryClient.invalidateQueries("validateToken")
      showToast({ message: "Logout Successfully", type: "SUCCESS" });
      navigate("/login");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  const handleLogOut = () => {
    mutation.mutate();
  };
  return (
    <Button variant={"outline"}
      onClick={handleLogOut}
      className="z-50 text-center flex flex-col justify-center cursor-pointer h-[40px] w-[70px] bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-base rounded-md"
    >
      Logout
    </Button>
  );
};

export default Logout;
