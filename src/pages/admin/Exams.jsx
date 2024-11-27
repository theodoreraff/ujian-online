import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Exams = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([
    {
      id: 1,
      subject: "MW-Konsep Jaringan",
      type: "UTS",
      class: "Teknik Informatika - B",
      jumlah: "5",
      date: "2024-06-15",
      duration: "90 menit",
      status: "Aktif",
    },
    {
      id: 2,
      subject: "MW-Pemrograman Berorientasi Objek",
      type: "UAS",
      class: "Teknik Informatika - A",
      jumlah: "8",
      date: "2024-07-20",
      duration: "120 menit",
      status: "Dijadwalkan",
    },
    {
      id: 3,
      subject: "MW-Basis Data",
      type: "UAS",
      class: "Teknik Informatika - B",
      jumlah: "5",
      date: "2024-06-25",
      duration: "60 menit",
      status: "Selesai",
    },
    {
      id: 4,
      subject: "MW-Basis Data Lanjut",
      type: "Praktikum",
      class: "Teknik Informatika - A",
      jumlah: "2",
      date: "2024-06-10",
      duration: "90 menit",
      status: "Aktif",
    },
    {
      id: 5,
      subject: "MK-Workshop Desain Web",
      type: "Praktikum",
      class: "Teknik Informatika - A",
      jumlah: "2",
      date: "2024-06-12",
      duration: "100 menit",
      status: "Aktif",
    },
    {
      id: 6,
      subject: "MW-Metodologi Agile",
      type: "Praktikum",
      class: "Teknik Informatika - A",
      jumlah: "2",
      date: "2024-06-09",
      duration: "100 menit",
      status: "Aktif",
    },
    {
      id: 7,
      subject: "MW-Pemrograman Berorientasi Obyek",
      type: "Praktikum",
      class: "Teknik Informatika - B",
      jumlah: "2",
      date: "2024-06-13",
      duration: "100 menit",
      status: "Aktif",
    },
    {
      id: 8,
      subject: "MW-Praktikum Basis Data Lanjut",
      type: "Praktikum",
      class: "Teknik Informatika - A",
      jumlah: "1",
      date: "2024-06-17",
      duration: "100 menit",
      status: "Aktif",
    },
    {
      id: 9,
      subject: "MW-Praktikum Konsep Jaringan",
      type: "Praktikum",
      class: "Teknik Informatika - A",
      jumlah: "1",
      date: "2024-06-13",
      duration: "100 menit",
      status: "Aktif",
    },
    {
      id: 10,
      subject: "MW-Praktikum Pemrograman Berorientasi Obyek",
      type: "Praktikum",
      class: "Teknik Informatika - B",
      jumlah: "2",
      date: "2024-06-14",
      duration: "180 menit",
      status: "Aktif",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExam, setCurrentExam] = useState({
    subject: "",
    type: "",
    class: "",
    jumlah: "",
    date: "",
    duration: "",
    status: "",
  });

  const handleAddExam = () => {
    if (Object.values(currentExam).every((val) => val !== "")) {
      setExams([
        ...exams,
        {
          id: exams.length + 1,
          ...currentExam,
        },
      ]);
      setIsModalOpen(false);
      setCurrentExam({
        subject: "",
        type: "",
        class: "",
        jumlah: "",
        date: "",
        duration: "",
        status: "",
      });
    }
  };

  const handleViewDetail = (exam) => {
    navigate(`/detail-ujian/${exam.id}`, { state: exam });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/tambah-ujian")}
          className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" />{" "}
          Tambah
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead className="bg-blue-600 text-white border-b rounded-t-lg">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Ujian</th>
              <th className="p-3 text-left">Pelajaran</th>
              <th className="p-3 text-left">Kelas</th>
              <th className="p-3 text-left">Jumlah Soal</th>
              <th className="p-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr
                key={exam.id}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleViewDetail(exam)}
              >
                <td className="p-3 text-center">{exam.id}</td>
                <td className="p-3">{exam.type}</td>
                <td className="p-3">{exam.subject}</td>
                <td className="p-3">{exam.class}</td>
                <td className="p-3 text-center">{exam.jumlah}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentExam(exam);
                      setIsModalOpen(true);
                    }}
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExams(exams.filter((e) => e.id !== exam.id));
                    }}
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

export default Exams;
