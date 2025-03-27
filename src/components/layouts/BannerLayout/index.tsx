import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const BannerLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BannerLayout;
