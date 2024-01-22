import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import RemoveUser from "./components/user/RemoveUser";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/create-user" element={<CreateUser />}></Route>
        <Route path="/:userId" element={<RetrieveUser />}></Route>
        <Route path="/edit/:userId" element={<EditUser />}></Route>
        <Route path="/remove/:userId" element={<RemoveUser />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
