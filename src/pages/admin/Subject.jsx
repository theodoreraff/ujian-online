import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Subject = ({ subjects, deleteSubject }) => {
  const navigate = useNavigate();

  // State untuk menyimpan input pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Filter mata pelajaran berdasarkan search query
  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const editSubject = (id) => {
    navigate(`/edit-mata-pelajaran/${id}`);
  };

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/tambah-mata-pelajaran")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" />{" "}
          Tambah
        </button>

        {/* Search Bar */}
        <div className="ml-4 relative w-1/2">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-lg dark:bg-white dark:placeholder-gray-400 dark:text-black"
            placeholder="Masukkan kata kunci dan enter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
              <th className="p-3 text-left">NO</th>
              <th className="p-3 text-left">NAMA MATA PELAJARAN</th>
              <th className="p-3 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {/* Render mata pelajaran yang telah difilter */}
            {filteredSubjects.map((subject) => (
              <tr key={subject.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-center">{subject.code}</td>
                <td className="p-3">{subject.name}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => editSubject(subject.id)}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteSubject(subject.id)}
                  >
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

export default Subject;
