import axios from "axios";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProfileMenu = ({ active }) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    await axios.post("/logout") 
    setUser(null)
  };

  return (
    active && (
      <div className="absolute w-max right-10 top-[12%] space-y-2 p-4 bg-white drop-shadow-lg">
        <div className="flex  flex-col border-b-2 border-slate-300 ">
          {user ? (
            <>
              <Link className="px-4 py-2 hover:text-primary" to={"/account"}>
                My account
              </Link>
              <Link
                className="px-4 py-2 hover:text-primary"
                onClick={handleLogout}
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link className="px-4 py-2 hover:text-primary" to={"/login"}>
                Login
              </Link>
              <Link className="px-4 py-2 hover:text-primary" to={"/register"}>
                Sign up
              </Link>
            </>
          )}
        </div>

        <div className=" flex flex-col">
          <Link className="px-4 py-2 hover:text-primary">Airlmb your home</Link>
          <Link className="px-4 py-2 hover:text-primary">Host experience</Link>
          <Link className="px-4 py-2 hover:text-primary">Help</Link>
        </div>
      </div>
    )
  );
};

export default ProfileMenu;
