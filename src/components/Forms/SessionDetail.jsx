import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  AlarmClock,
  MoveLeft,
  Edit,
  Trash2,
  UserPlus,
  Plus,
  FileInput,
} from "lucide-react";

const SessionDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Contoh data soal ujian
  const [questions, setQuestions] = useState([
    {
      id: 1,
      name: "Fahmi Andika Setiono",
      class: "Teknik Informatika - B",
      jk: "L",
    },
    {
      id: 2,
      name: "Alfi Akmal Faiz",
      class: "Teknik Informatika - B",
      jk: "L",
    },
  ]);

  // Dapatkan data ujian yang dikirim melalui navigasi state
  const session = location.state;

  // Jika tidak ada data, redirect atau tampilkan pesan error
  if (!session) {
    return (
      <div>
        <p>Ujian tidak ditemukan</p>
        <button
          onClick={() => navigate("/sesi-ujian")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <MoveLeft className="mr-2" /> Kembali
        </button>
      </div>
    );
  }

  const handleEditQuestion = (question) => {
    // Logika untuk mengedit pertanyaan
    console.log("Edit pertanyaan:", question);
  };

  const handleDeleteQuestion = (questionId) => {
    // Logika untuk menghapus pertanyaan
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/sesi-ujian")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <MoveLeft className="mr-2" /> Kembali
        </button>
      </div>

      {/* Detail Ujian */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead>
            <tr className="flex items-center py-2">
              <AlarmClock />
              <th className="text-left text-xl font-medium ml-1">
                Detail Sesi Ujian
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Nama Ujian</td>
              <td className="p-3">{session.exam}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Mata Pelajaran</td>
              <td className="p-3">{session.subject}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Kelas</td>
              <td className="p-3">{session.class}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Sesi</td>
              <td className="p-3">{session.sesi}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Mulai</td>
              <td className="p-3">{session.start}</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 cursor-pointer border">
              <td className="p-3 border">Selesai</td>
              <td className="p-3">{session.end}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex items-center mb-4 border-b pb-4">
          <UserPlus />
          <span className="text-left text-xl font-medium ml-1">
            Enroll Siswa
          </span>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/enroll-siswa")}
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            <UserPlus className="mr-2 p-1" /> Enroll Siswa
          </button>
        </div>
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg mt-4">
          <thead className="bg-blue-600 text-white border-b rounded-t-lg">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Nama Siswa</th>
              <th className="p-3 text-left">Kelas</th>
              <th className="p-3 text-left">Jenis Kelamin</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{question.id}</td>
                <td className="p-3">{question.name}</td>
                <td className="p-3">{question.class}</td>
                <td className="p-3">{question.jk}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEditQuestion(question)}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteQuestion(question.id)}
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

export default SessionDetail;
