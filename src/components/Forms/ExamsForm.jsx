import React from "react";
import { SquarePen, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExamsForm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/ujian")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <MoveLeft className="mr-2" /> Kembali
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-white border-b rounded-t-lg">
            <tr className="flex items-center">
              <SquarePen />
              <th className="p-3 text-left text-xl font-medium">
                Tambah Ujian
              </th>
            </tr>
          </thead>
          <tbody>
            <div>
              <label className="block mb-2 mt-4">Nama Ujian</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                placeholder="Masukkan Nama Ujian"
              />
              <div className="flex items-center space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2 mt-4">Mata Pelajaran</label>
                  <select
                    name="Kelas"
                    id="kelas"
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                  >
                    <option value="WDW">Workshop Desain Web</option>
                    <option value="PBO">Pemrograman Berorientasi Objek</option>
                    <option value="BD">Basis Data</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 mt-4">Kelas</label>
                  <select
                    name="Kelas"
                    id="kelas"
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                  >
                    <option value="A">Teknik Informatika - A</option>
                    <option value="B">Teknik Informatika - B</option>
                  </select>
                </div>
              </div>

              <form>
                <label className="block mb-2 mt-4">Deskripsi</label>
                <div className="w-full mb-4 border border-gray-300 rounded-lg bg-white">
                  <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                        {/* Button icons for text actions */}
                        <button
                          type="button"
                          className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                        >
                          {/* SVG for Attach File */}
                        </button>
                        {/* Additional buttons */}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white rounded-b-lg">
                    <label htmlFor="editor" className="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      rows="8"
                      className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
              </form>
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

export default ExamsForm;
