import {
  EarthIcon,
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  MailIcon,
  Phone,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col lg:flex-row justify-around bg-[#fce3e4] shadow-2xl">
        <div className="flex flex-col gap-4 ">
          <img
            src="/src/assets/hlogo.svg"
            alt="instagram"
            className="w-[140px] h-[160px] "
          />
          <div className="flex gap-2 -mt-8 lg:-mt-0  lg:ml-4 ml-10 ">
            <MailIcon size={24} className="text-[#52050a]" />
            <p className="text-[#52050a] text-base">
              2000mohdasifansari@gmail.com
            </p>
          </div>
          <div className="flex gap-2 lg:ml-4 ml-10 ">
            <Phone size={24} className="text-[#52050a]" />
            <p className="text-[#52050a] text-base">+91 9721234420</p>
          </div>
          <div className="flex gap-2 lg:ml-4 ml-10  lg:mb-7">
            <HomeIcon size={24} className="text-[#52050a]" />
            <p className="text-[#52050a] text-base">
              201206,Muradnagar Ghaziabad.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-7 lg:mt-14 gap-4">
          <h1 className="text-3xl mb-4 ml-4 lg:ml-0 lg:mb-16  underline">
            USEFULL LINK
          </h1>
          <div className="flex gap-14 justify-start ml-10 lg:ml-0 text-[#52050a]">
            <p className="text-base font-normal">About Us</p>
            <p className="text-base font-normal">Contact</p>
          </div>
          <div className="flex gap-[70px] justify-start ml-10 lg:ml-0 text-[#52050a]">
            <p className="text-base font-normal">Rooms</p>
            <p className="text-base font-normal">Gallery</p>
          </div>
          <div className="flex gap-[70px] justify-start ml-10 lg:ml-0 text-[#52050a]">
            <p className="text-base font-normal">Service</p>
            <p className="text-base font-normal">Blog</p>
          </div>
        </div>
        <div className="flex flex-col mt-7 lg:mt-14">
          <h1 className="text-3xl mb-4 ml-4 lg:ml-0 lg:mb-16 underline">
            STAY IN TOUCH
          </h1>
          <div className="flex mt-4 ml-10 lg:ml-0 ">
            <input
              placeholder="Enter your email"
              className=" rounded-l-md px-1 z-20 py-2"
            />
            <Button className="py-2 -ml-2 bg-gradient-to-r from-[#ed488c] to-[#eaa211] text-[#52050a]  ">SUBSCRIBE</Button>
          </div>
          <div className="flex gap-6 mt-6 ml-10 lg:ml-0">
            <FacebookIcon
              size={36}
              className="border border-[#52050a] text-[#52050a] rounded-full p-2"
            />
            <TwitterIcon
              size={36}
              className="border border-[#52050a] text-[#52050a] rounded-full p-2"
            />
            <InstagramIcon
              size={36}
              className="border border-[#52050a] text-[#52050a] rounded-full p-2"
            />
            <YoutubeIcon
              size={36}
              className="border border-[#52050a] text-[#52050a] rounded-full p-2"
            />
          </div>
        </div>
        <br />
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-10 bg-gradient-to-r from-[#ed488c] to-[#eaa211]">
        <p className="text-white text-base mx-auto lg:mx-0 font-normal">
          © 2024 developed by asif. All rights reserved.
        </p>
        <div className="flex gap-2 mx-auto lg:mx-0 items-center">
          <EarthIcon size={15} className="text-white" />
          <span className="text-white text-base font-normal">English</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
