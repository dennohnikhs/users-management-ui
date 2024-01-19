import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/user/UsersList";
import CreateUser from "./components/user/CreateUser";
import RetrieveUser from "./components/user/RetrieveUser";
import EditUser from "./components/user/EditUser";
import RemoveUser from "./components/user/RemoveUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />}></Route>
        <Route path="/create-user" element={<CreateUser />}></Route>
        <Route path="/:userId" element={<RetrieveUser />}></Route>
        <Route path="/edit/:userId" element={<EditUser />}></Route>
        <Route path="/remove/:userId" element={<RemoveUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
