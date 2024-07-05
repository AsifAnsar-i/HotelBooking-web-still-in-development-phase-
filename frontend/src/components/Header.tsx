import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useAppContext } from "@/contexts/AppContext";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { isLoggedIn } = useAppContext();

  return (
    <div className="relative">
      <div
        className={`py-5 px-2.5 lg:px-0 z-50 w-full h-[70px] lg:h-[85px]  bg-[#ffffff] bg-opacity-75 fixed ${
          shadow ? "drop-shadow-2xl" : ""
        } transition duration-700 ease-in-out`}
      >
        <div className="flex items-center justify-between lg:justify-around">
          <Link to="/">
            <img
              src="/src/assets/hlogo.svg"
              alt="logo"
              className="-mt-3.5 lg:-mt-1.5 h-[60px] w-[80px] "
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7 -mt-1.5">
            <div className="ml-4 font-semibold text-[17px]">Home</div>
            <div className="ml-4 text-[17px] text-muted-foreground">
              About Us
            </div>
            <div className="ml-4 text-[17px] text-muted-foreground">Room</div>
            <div className="ml-4 text-[17px] text-muted-foreground">
              Service
            </div>
            <div className="ml-4 text-[17px] text-muted-foreground">Blog</div>
            <div className="ml-4 text-[17px] text-muted-foreground">
              Gallery
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-5 -mt-1.5">
            <div className=" flex flex-col justify-center items-center h-[40px]  w-[40px] bg-transparent  border border-solid rounded-md">
              <ShoppingCartIcon className="text-slate-600" />
            </div>

            {isLoggedIn ? (
              <Logout />
            ) : (
              <Link
                to="/login"
                variant={"outline"}
                className="h-[40px] w-[70px] flex flex-col text-center justify-center bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-base font-semibold rounded-md"
              >
                Login
              </Link>
            )}
          </div>
          <MenuIcon
            className="lg:hidden -mt-3 "
            onClick={() => setOpen(!open)}
            size={34}
          />
        </div>
      </div>
      <div className="lg:hidden">
        <MobileNav open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
