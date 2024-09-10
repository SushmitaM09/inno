import { Link } from "react-router-dom";
import { FiAirplay } from "react-icons/fi";
import { CiViewTable } from "react-icons/ci";
import { BsFillTabletLandscapeFill } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { IoCube } from "react-icons/io5";
import { BiSolidPyramid } from "react-icons/bi";
import { GrDocumentConfig } from "react-icons/gr";

import { CgProfile } from "react-icons/cg";

import TCard from "./TCard";
  
const Sidebar = () => {
  return (
    <>
      <aside className="fixed-start">
        <div className="sidenav-header">
          <Link className="navbar-brand" to="/pages/dashboard" target="_blank">
            <span className="ms-1 fw-bold"><FiAirplay />Soft UI Dashboard</span>
          </Link>
        </div>
        <hr className="horizontal-divider" />
        <nav className="navbar-nav">
          <ul className="nav-list list-unstyled">
            <li className="nav-item">
              <Link to="/pages/dashboard" className="nav-link">
                <div className="icon"></div><BsFillTabletLandscapeFill />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pages/table" className="nav-link">
                <div className="icon"></div><CiViewTable />
                Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><FaMoneyBills />
                Billing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><IoCube />
                Virtual Reality
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><GrDocumentConfig />
                RTL
              </Link>
            </li>
            <li className="nav-item mt-3">
              <h6 className="section-header ps-4 ms-2 text-uppercase text-xs fw-bold ">
                Account Pages
              </h6>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link">
                <div className="icon"></div><CgProfile />
                Profile
              </Link>
            </li>
          </ul>
          <div className="row">
        <div className=" mb-lg-0 mb-4">
          < TCard
          
            title={"Need help?"}
            sub_title={"Please check our docs"}
            description={
              <button className="Documentation">Documentation</button>
            }
            
          />
        </div>
        </div>
        </nav>
       
      </aside>
    </>
  );
};

export default Sidebar;