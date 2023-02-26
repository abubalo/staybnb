import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="w-max flex flex-col space-y-2 p-4 bg-red-200 drop-shadow-md">
      <div className="flex  flex-col border-b-2 border-slate-300 ">
        <Link className="px-4 py-2">Sing up</Link>
        <Link className="px-4 py-2">Login</Link>
      </div>

      <div className=" flex flex-col">
        <Link className="px-4 py-2">Airlmb your home</Link>
        <Link className="px-4 py-2">Host experience</Link>
        <Link className="px-4 py-2">Help</Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
