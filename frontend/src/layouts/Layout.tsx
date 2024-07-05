import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className=" mt-[85px] flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
