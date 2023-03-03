import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./components/PlacesFormPage";
import BookingPage from "./pages/BookingPage";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/bookings" element={<BookingPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
