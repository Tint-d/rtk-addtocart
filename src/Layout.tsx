import { ReactNode } from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" ">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
