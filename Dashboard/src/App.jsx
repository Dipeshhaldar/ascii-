import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//import "./App.css";
import Navbar from "./components/Navbar";
import AddBlogForm from "./pages/AddBlogForm";
import AddEventForm from "./pages/AddEventForm";
import AddImage from "./pages/AddImage";
import ContactTable from "./pages/ContactTable";
import MembershipTable from "./pages/MembershipTable";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBlogForm />} />
        <Route path="/addevent" element={<AddEventForm />} />
        <Route path="/addimage" element={<AddImage />} />
        <Route path="/contacttable" element={<ContactTable />} />
        <Route path="/membershiptable" element={<MembershipTable />} />
      </Routes>
    </>
  );
}

export default App;
