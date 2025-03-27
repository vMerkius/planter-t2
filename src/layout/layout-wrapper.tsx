import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
