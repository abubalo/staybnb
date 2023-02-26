import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = ({active}) => {
  return (
    active && (<div className="absolute w-max right-10 top-[12%] space-y-2 p-4 bg-slate-50 drop-shadow-md">
    <div className="flex  flex-col border-b-2 border-slate-300 ">
      <Link className="px-4 py-2 hover:text-primary" to="/login">Login</Link>
      <Link className="px-4 py-2 hover:text-primary" to="/register">Sign up</Link>
    </div>

    <div className=" flex flex-col">
      <Link className="px-4 py-2 hover:text-primary">Airlmb your home</Link>
      <Link className="px-4 py-2 hover:text-primary">Host experience</Link>
      <Link className="px-4 py-2 hover:text-primary">Help</Link>
    </div>
  </div>)
  );
};

export default ProfileMenu;
