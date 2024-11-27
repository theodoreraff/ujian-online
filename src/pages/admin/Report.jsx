import React, { useState } from "react";
import { Filter, ChartLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  // Perbaikan: Gunakan useState dengan benar dan simpan data laporan
  const [reports, setReports] = useState([
    {
      id: 1,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Aryo Danang Kesowo",
      class: "Teknik Informatika - A",
      subject: "MW-Basis Data Lanjut",
    },
    {
      id: 2,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Ahmad Saputra",
      class: "Teknik Informatika - A",
      subject: "MW-Konsep Jaringan",
    },
    {
      id: 3,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Edi Kurniawan",
      class: "Teknik Informatika - A",
      subject: "MW-Metodologi Agile",
    },
    {
      id: 4,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Muhammad Yova Andrianto",
      class: "Teknik Informatika - A",
      subject: "MW-Pemrograman Berorientasi Obyek",
    },
    {
      id: 5,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Dimas Nugroho Aulia Alhaq",
      class: "Teknik Informatika - A",
      subject: "MW-Praktikum Basis Data Lanjut",
    },
    {
      id: 6,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Charisma Velentina",
      class: "Teknik Informatika - A",
      subject: "MW-Praktikum Konsep Jaringan",
    },
    {
      id: 7,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Gilber Juan Doli Manulang",
      class: "Teknik Informatika - A",
      subject: "MW-Praktikum Pemrograman Berorientasi Obyek",
    },
    {
      id: 8,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Mochamad Daffa Maulana",
      class: "Teknik Informatika - A",
      subject: "MW-Sistem Pendukung Keputusan",
    },
    {
      id: 9,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Theodorus Yosia Raffael Gunawan",
      class: "Teknik Informatika - A",
      subject: "MW-Statistik dan Probabilitas",
    },
    {
      id: 10,
      exam: "Ujian Tengah Semester (UTS)",
      sesi: "Sesi 1",
      name: "Aryo Danang Kesowo",
      class: "Teknik Informatika - A",
      subject: "MW-Workshop Aplikasi Berbasis Web",
    },
  ]);

  // State untuk filter
  const [selectedExam, setSelectedExam] = useState("");

  // Fungsi filter laporan
  const filteredReports = selectedExam
    ? reports.filter((report) => report.exam.includes(selectedExam))
    : reports;

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
          <thead>
            <tr className="flex items-center py-2">
              <Filter />
              <th className="text-left text-xl font-medium ml-1">
                Filter Nilai Ujian
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="flex justify-between items-end gap-4">
              <td className="w-full">
                <label className="block mb-2">Ujian</label>
                <select
                  value={selectedExam}
                  onChange={(e) => setSelectedExam(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option value="">Semua Ujian</option>
                  <option value="UTS">UTS Teknik Informatika</option>
                  <option value="UAS">UAS Pemrograman Web</option>
                  <option value="Kuis">Kuis Basis Data</option>
                </select>
              </td>
              <td className="w-1/2">
                <button
                  onClick={() => navigate("/ujian")}
                  className="flex items-center justify-center bg-blue-600 text-white w-full p-2.5 rounded-lg hover:bg-blue-700"
                >
                  <Filter className="mr-2" /> Filter
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex items-center mb-4 border-b pb-4">
          <ChartLine />
          <span className="text-left text-xl font-medium ml-1">
            Detail Ujian
          </span>
        </div>
        <table className="table-auto w-full border-collapse overflow-hidden rounded-lg mt-4">
          <thead className="bg-blue-600 text-white border-b rounded-t-lg">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Ujian</th>
              <th className="p-3 text-center">Sesi</th>
              <th className="p-3 text-center">Nama Siswa</th>
              <th className="p-3 text-center">Kelas</th>
              <th className="p-3 text-center">Pelajaran</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{report.id}</td>
                <td className="p-3">{report.exam}</td>
                <td className="p-3">{report.sesi}</td>
                <td className="p-3">{report.name}</td>
                <td className="p-3">{report.class}</td>
                <td className="p-3">{report.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
