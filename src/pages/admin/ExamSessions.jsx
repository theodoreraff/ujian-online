import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExamSessions = () => {
  const navigate = useNavigate();
  const [sessions] = useState([
    {
      id: 1,
      code: "1",
      exam: "Ujian Akhir Semester (UAS)",
      subject: "Pemrograman Web",
      class: "Teknik Informatika - A",
      sesi: "Sesi 1",
      siswa: "10",
      start: "2024-11-27 09:00:00",
      end: "2024-11-27 10:00:00",
    },
    {
      id: 2,
      code: "2",
      exam: "Ujian Tengah Semester (UTS)",
      subject: "Basis Data",
      class: "Teknik Informatika - B",
      sesi: "Sesi 3",
      siswa: "8",
      start: "2024-11-27 14:00:00",
      end: "2024-11-27 14:30:00",
    },
    {
      id: 3,
      code: "3",
      exam: "Ujian Akhir Semester (UAS)",
      subject: "Sistem Operasi",
      class: "Teknik Informatika - A",
      sesi: "Sesi 2",
      siswa: "12",
      start: "2024-11-27 15:00:00",
      end: "2024-11-27 16:00:00",
    },
    {
      id: 4,
      code: "4",
      exam: "Ujian Tengah Semester (UTS)",
      subject: "Jaringan Komputer",
      class: "Teknik Informatika - C",
      sesi: "Sesi 2",
      siswa: "7",
      start: "2024-11-27 17:00:00",
      end: "2024-11-27 17:30:00",
    },
    {
      id: 5,
      code: "5",
      exam: "Ujian Akhir Semester (UAS)",
      subject: "Algoritma dan Pemrograman",
      class: "Teknik Informatika - A",
      sesi: "Sesi 1",
      siswa: "6",
      start: "2024-11-27 18:00:00",
      end: "2024-11-27 19:00:00",
    },
  ]);

  const handleSessionsDetail = (session) => {
    navigate(`/detail-sesi/${session.id}`, { state: session });
  };

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/tambah-sesi-ujian")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" />{" "}
          Tambah
        </button>
        <div className="ml-4 relative w-1/2">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-lg placeholder-gray-400 dark:placeholder-gray-400 dark:text-black dark:bg-white"
            placeholder="Masukkan kata kunci dan enter..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-blue-600 text-white border-b rounded-t-lg">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Ujian</th>
              <th className="p-3 text-left">Sesi</th>
              <th className="p-3 text-left">Siswa</th>
              <th className="p-3 text-left">Mulai</th>
              <th className="p-3 text-left">Selesai</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr
                key={session.id}
                className="border-b hover:bg-gray-50"
                onClick={() => handleSessionsDetail(session)}
              >
                <td className="p-3 text-center">{session.code}</td>
                <td className="p-3">{session.exam}</td>
                <td className="p-3 text-center">{session.sesi}</td>
                <td className="p-3 text-center">{session.siswa}</td>
                <td className="p-3 text-center">{session.start}</td>
                <td className="p-3 text-center">{session.end}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamSessions;
