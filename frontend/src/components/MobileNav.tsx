import {  Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "@/contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";

interface openProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileNav = ({ open, setOpen }: openProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const { isLoggedIn } = useAppContext();
  const mutation = useMutation(apiClient.logOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logout Successfully", type: "SUCCESS" });
      navigate("/login");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });
  return (
    <div
      className={`fixed z-50    px-7 py-14  bg-white h-full w-screen  ${
        open ? "hidden" : "block"
      }`}
    >
      <div className="-mt-9 -ml-[18px] flex justify-between">
        <img
          src="/src/assets/hlogo.svg"
          alt="logo"
          className="-mt-3.5 lg:-mt-1.5 h-[60px] w-[80px] "
        />
        <Plus size={34} onClick={() => setOpen(!open)} className="-mr-4" />
      </div>
      <ul className="py-2 -ml-6 mt-4">
        <div className="lg:flex flex-col items-center gap-7 -mt-1.5">
          <div className="ml-4 mt-2 font-semibold text-[17px]">Home</div>
          <div className="ml-4 mt-2 text-[17px] text-muted-foreground">
            About Us
          </div>
          <div className="ml-4 mt-2 text-[17px] text-muted-foreground">
            Room
          </div>
          <div className="ml-4 mt-2 text-[17px] text-muted-foreground">
            Service
          </div>
          <div className="ml-4 mt-2 text-[17px] text-muted-foreground">
            Blog
          </div>
          <div className="ml-4 mt-2 text-[17px] text-muted-foreground">
            Gallery
          </div>
        </div>
      </ul>
      {isLoggedIn ? (
        <Button
          onClick={() => {
            mutation.mutate();
            setOpen(true);
          }}
          variant={"outline"}
          className="text-center flex flex-col justify-center cursor-pointer h-[40px] w-[70px] bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-base rounded-md -ml-[18px] mt-3"
        >
         Logout
        </Button>
      ) : (
        <Link to="/login">
          <Button
            onClick={() => setOpen(true)}
            variant={"outline"}
            className="text-center flex flex-col justify-center cursor-pointer h-[40px] w-[70px] bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-base rounded-md -ml-[18px] mt-3"
          >
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
