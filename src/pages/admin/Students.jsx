import React, { useState } from "react";
import { Plus, FileInput, Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();
  const [students] = useState([
    {
      id: 1,
      code: "1",
      nisn: "3120511402",
      name: "Yofi Ramadhani",
      kelas: "Teknik Informatika - A",
      jk: "L",
      password: "Yofi1234",
    },
    {
      id: 2,
      code: "2",
      nisn: "3121510110",
      name: "Aryo Danang Kesowo",
      kelas: "Teknik Informatika - B",
      jk: "L",
      password: "Aryo1234",
    },
    {
      id: 3,
      code: "3",
      nisn: "3121510303",
      name: "Ahmad Saputra",
      kelas: "Teknik Informatika - B",
      jk: "L",
      password: "Ahmad1234",
    },
    {
      id: 4,
      code: "4",
      nisn: "3121510410",
      name: "Edi Kurniawan",
      kelas: "Teknik Informatika - B",
      jk: "L",
      password: "Edi1234",
    },
    {
      id: 5,
      code: "5",
      nisn: "3121511501",
      name: "Muhammad Yova Andrianto",
      kelas: "Teknik Informatika - B",
      jk: "L",
      password: "Yova1234",
    },
    {
      id: 6,
      code: "6",
      nisn: "3123510301",
      name: "Dimas Nugroho Aulia Alhaq",
      kelas: "Teknik Informatika - C",
      jk: "L",
      password: "Dimas1234",
    },
    {
      id: 7,
      code: "7",
      nisn: "3123510303",
      name: "Charisma Velentina",
      kelas: "Teknik Informatika - C",
      jk: "P",
      password: "Charisma1234",
    },
    {
      id: 8,
      code: "8",
      nisn: "3123510304",
      name: "Gilber Juan Doli Manulang",
      kelas: "Teknik Informatika - C",
      jk: "L",
      password: "Gilber1234",
    },
    {
      id: 9,
      code: "9",
      nisn: "3123510305",
      name: "Mochamad Daffa Maulana",
      kelas: "Teknik Informatika - C",
      jk: "L",
      password: "Daffa1234",
    },
    {
      id: 10,
      code: "10",
      nisn: "3123510308",
      name: "Theodorus Yosia Raffael Gunawan",
      kelas: "Teknik Informatika - C",
      jk: "L",
      password: "Theodorus1234",
    },
  ]);

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/tambah-siswa")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mr-4"
        >
          <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" />{" "}
          Tambah
        </button>
        <button
          onClick={() => navigate("/import-siswa")}
          className="flex items-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          <FileInput className="mr-2" color="white" /> Import
        </button>
        <div class="ml-4 relative w-1/2">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-lg"
            placeholder="Masukan kata kunci dan enter..."
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-blue-600 text-white border-b rounded-t-lg">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">NISN</th>
              <th className="p-3 text-left">Nama</th>
              <th className="p-3 text-left">Kelas</th>
              <th className="p-3 text-left">Jenis Kelamin</th>
              <th className="p-3 text-left">Password</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-center">{student.code}</td>
                <td className="p-3 text-center">{student.nisn}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3 text-center">{student.kelas}</td>
                <td className="p-3 text-center">{student.jk}</td>
                <td className="p-3 text-center">{student.password}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-600">
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

export default Students;
