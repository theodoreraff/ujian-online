import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Classes = ({ classes, deleteClass }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State untuk search term

  // Fungsi untuk mengarahkan ke halaman tambah kelas
  const handleAddClass = () => {
    navigate("/tambah-kelas");
  };

  // Fungsi untuk mengarahkan ke halaman edit kelas
  const handleEditClass = (id) => {
    navigate(`/edit-kelas/${id}`);
  };

  // Fungsi untuk menghapus kelas
  const handleDeleteClass = (id) => {
    deleteClass(id);
  };

  // Fungsi untuk menangani perubahan pada input pencarian
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter kelas berdasarkan searchTerm
  const filteredClasses = classes.filter(
    (cls) =>
      cls.class.toLowerCase().includes(searchTerm.toLowerCase()) || // Mencocokkan nama kelas
      cls.code.includes(searchTerm) // Mencocokkan kode kelas
  );

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={handleAddClass}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" />{" "}
          Tambah
        </button>
        <div className="ml-4 relative w-1/2">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-lg"
            placeholder="Masukan kata kunci dan enter..."
            value={searchTerm} // Hubungkan input dengan state searchTerm
            onChange={handleSearchChange} // Update searchTerm saat input berubah
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
              <th className="p-3 text-left">NAMA KELAS</th>
              <th className="p-3 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((cls) => (
              <tr key={cls.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-center">{cls.code}</td>
                <td className="p-3">{cls.class}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    onClick={() => handleEditClass(cls.id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteClass(cls.id)}
                    className="text-red-500 hover:text-red-700"
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

export default Classes;
