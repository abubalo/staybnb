import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import ProfilePageInfo from "../components/ProfilePageInfo";
import { UserContext } from "../UserContext";
import AccountNav from "../components/AccountNav";
import Loader from "../components/Loader";

const ProfilePage = () => {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return <Loader />
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="">
      <AccountNav />
      {subpage === "profile" && (
        <ProfilePageInfo
          logout={logout}
          firstName={user.firstName}
          email={user.email}
        />
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;
