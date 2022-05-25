import { FC } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="relative h-screen">
      <Navbar className="flex w-full justify-between bg-dark fixed" />
      {children}
      <Footer
        className="flex flex-col md:flex-row-reverse md:justify-between w-full fixed bottom-0 px-5 py-5 bg-dark"
        id="contact"
      />
    </div>
  );
};

export default Layout;
