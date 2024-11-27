import React from "react";
import { User, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentsForm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/siswa")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <MoveLeft className="mr-2" /> Kembali
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-white border-b rounded-t-lg">
            <tr className="flex items-center">
              <User />
              <th className="p-3 text-left text-xl font-medium">
                Tambah Siswa
              </th>
            </tr>
          </thead>
          <tbody>
            <div className="flex justify-between items-center space-x-4">
              <div className="w-1/2">
                <label className="block mb-2 mt-4">NISN</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Masukkan NISN Siswa"
                />
                <label className="block mb-2 mt-4">Kelas</label>
                <select
                  name="Kelas"
                  id="kelas"
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="A">Teknik Informatika - A</option>
                  <option value="B">Teknik Informatika - B</option>
                </select>
                <label className="block mb-2 mt-4">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Masukkan Password"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 mt-4">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Masukkan Nama Siswa"
                />
                <label className="block mb-2 mt-4">Jenis Kelamin</label>
                <select
                  name="Kelas"
                  id="kelas"
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="L">L</option>
                  <option value="P">P</option>
                </select>
                <label className="block mb-2 mt-4">Konfirmasi Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Masukkan Konfirmasi Password"
                />
              </div>
            </div>
            <div className="flex justify-start space-x-2 mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Simpan
              </button>
              <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                Reset
              </button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsForm;
