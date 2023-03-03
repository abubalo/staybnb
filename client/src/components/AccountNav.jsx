import { Link, useLocation } from "react-router-dom";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

  if (subpage == undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes =
      "inline-flex justify-center items-center gap-1 px-4 py-2 text-sm font-medium rounded-full";
    if (type === subpage) {
      classes += " bg-primary text-white hover:bg-primaryLight";
    } else {
      classes += " bg-gray-200 text-slate-600 hover:bg-gray-300";
    }

    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-4 gap-2">
      <Link to={"/account"} className={linkClasses("profile")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        My profile
      </Link>
      <Link to={"/account/bookings"} className={linkClasses("bookings")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
          />
        </svg>
        My booking
      </Link>
      <Link to={"/account/places"} className={linkClasses("places")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
        My accommodations
      </Link>
    </nav>
  );
};

export default AccountNav;
