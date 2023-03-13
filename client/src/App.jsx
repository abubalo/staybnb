import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./components/PlacesFormPage";
import Rooms from "./pages/Rooms";
import BookingsPage from "./pages/BookingsPage";
import Booking from "./pages/Booking";


function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/rooms/:id" element={<Rooms />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/booking/:id" element={<Booking />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
