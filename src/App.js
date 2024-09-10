import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Sidebar from "./Component/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Dashboard from "./Pages/Dashboard";
import Table from "./Pages/Table";
import NavigationBar from "./Component/NavigationBar";
import { useState } from "react";

function App() {
  const [showSidebar, setSidebar] = useState(false);
  const sidebarHandler = () => {
    setSidebar(!showSidebar);
  };

  return (
    <>
      <div className="container-fluid py-4">
        <BrowserRouter>
          <div
            className={
              showSidebar
                ? "sidebar-main ps showSidebar my-3"
                : "sidebar-main ps"
            }
          >
            <Sidebar />
          </div>
          <div className="main-content ps-2 pe-2">
            <NavigationBar sidebarHandler={sidebarHandler} tag="Dashboard" />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pages/dashboard" element={<Dashboard />} />
              <Route path="/pages/table" element={<Table />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
