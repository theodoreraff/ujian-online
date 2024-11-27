import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChartLine,
  faClock,
  faEdit,
  faFolder,
  faGraduationCap,
  faTachometer,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Update active link when route changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <aside className="w-64 bg-blue-800 text-white flex flex-col h-screen fixed">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-between">
          <FontAwesomeIcon icon={faGraduationCap} color="white" />
          <span className="text-lg font-medium p-2">UJIAN ONLINE</span>
        </div>
        <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          PRO
        </span>
      </div>
      <nav className="flex-1">
        <ul className="mx-6">
          <div className="border-y border-white">
            <a href="/" onClick={() => setActiveLink("/")}>
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faTachometer}
                  color="white"
                  className="mr-2"
                />
                <span>Dashboard</span>
              </li>
            </a>
          </div>
          <div className="border-y border-white">
            <a
              href="/mata-pelajaran"
              onClick={() => setActiveLink("/mata-pelajaran")}
            >
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/mata-pelajaran" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon icon={faBook} color="white" className="mr-2" />
                <span>Mata Pelajaran</span>
              </li>
            </a>
            <a href="/kelas" onClick={() => setActiveLink("/kelas")}>
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/kelas" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  color="white"
                  className="mr-2"
                />
                <span>Kelas</span>
              </li>
            </a>
            <a href="/siswa" onClick={() => setActiveLink("/siswa")}>
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/siswa" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color="white"
                  className="mr-2"
                />
                <span>Siswa</span>
              </li>
            </a>
          </div>
          <div className="border-y border-white">
            <a href="/ujian" onClick={() => setActiveLink("/ujian")}>
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/ujian" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon icon={faEdit} color="white" className="mr-2" />
                <span>Ujian</span>
              </li>
            </a>
            <a href="/sesi-ujian" onClick={() => setActiveLink("/sesi-ujian")}>
              <li
                className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                  activeLink === "/sesi-ujian" ? "bg-blue-700" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faClock}
                  color="white"
                  className="mr-2"
                />
                <span>Sesi Ujian</span>
              </li>
            </a>
          </div>
          <a
            href="/laporan-nilai"
            onClick={() => setActiveLink("/laporan-nilai")}
          >
            <li
              className={`flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
                activeLink === "/laporan-nilai" ? "bg-blue-700" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={faChartLine}
                color="white"
                className="mr-2"
              />
              <span>Laporan Nilai</span>
            </li>
          </a>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
