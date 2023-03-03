import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Logo from "../assets/staybnb.svg";
import { useEffect } from "react";

const Header = ({ active, setActive }) => {
  const { user } = useContext(UserContext);
  const activeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeRef.current && !activeRef.current.contains(e.target)) {
        setActive(false)
      }
    };

    window.addEventListener("click", handleClickOutside)
    return () =>{
      window.removeEventListener("click", handleClickOutside)
    }
  }, [setActive, activeRef]);

  return (
    <div className="w-full flex justify-between p-4 border-b border-slate-100">
      <Link to={"/"} className="flex justify-center items-center space-x-1">
        <span  className="w-6 h-6">
          <img src={Logo} alt="" />
        </span>
        <h1 className="text-xl font-semibold text-primary">staybnb</h1>
      </Link>

      <div className="flex border  border-slate-200 px-4 py-2 items-center justify-between space-x-3 rounded-full">
        <div className="cursor-pointer text-sm font-medium">Anywhere</div>
        <div className="border h-full text-sm font-medium"></div>
        <div className="cursor-pointer text-sm font-medium">Any week</div>
        <div className="border h-full"></div>
        <div className="text-slate-400 cursor-pointer text-sm font-medium">Add Guests</div>
        <div className="border h-full"></div>
        <button className=" bg-primary p-2 text-white rounded-full box-border rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#e63946"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div
        ref={activeRef}
        className="flex justify-center items-center border border-slate-300 px-4 py-1 space-x-3 rounded-full cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {user && <div className="font-semibold">{user.firstName}</div>}
      </div>
    </div>
  );
};

export default Header;
