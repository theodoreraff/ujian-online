import React, { useState, useEffect } from "react";
import { Bookmark, MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const SubjectForm = ({ onSubmit, subjects }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    if (id) {
      const subjectToEdit = subjects.find(
        (subject) => subject.id === parseInt(id)
      );
      if (subjectToEdit) {
        setName(subjectToEdit.name);
      }
    }
  }, [id, subjects]);

  const handleSubmit = () => {
    if (id) {
      onSubmit(parseInt(id), name);
    } else {
      onSubmit({ name });
    }
    navigate("/mata-pelajaran");
  };

  return (
    <div>
      <div className="flex justify-start items-center mb-4">
        <button
          onClick={() => navigate("/mata-pelajaran")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <MoveLeft className="mr-2" /> Kembali
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-white border-b rounded-t-lg">
            <tr className="flex items-center">
              <Bookmark />
              <th className="p-3 text-left text-xl font-medium">
                Tambah Pelajaran
              </th>
            </tr>
          </thead>
          <tbody>
            <div>
              <label className="block mb-2 mt-4">Nama Pelajaran</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Masukkan Nama Pelajaran"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-start space-x-2 mt-6">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Simpan
              </button>
              <button
                className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => setName("")}
              >
                Reset
              </button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectForm;
