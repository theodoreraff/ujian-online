import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/admin/Dashboard";
import Subject from "./pages/admin/Subject";
import Classes from "./pages/admin/Classes";
import Students from "./pages/admin/Students";
import Exams from "./pages/admin/Exams";
import ExamSessions from "./pages/admin/ExamSessions";
import SubjectForm from "./components/Forms/SubjectForm";
import ClassesForm from "./components/Forms/ClassesForm";
import StudentsForm from "./components/Forms/StudentsForm";
import ImportStudent from "./components/Forms/ImportStudent";
import ExamsForm from "./components/Forms/ExamsForm";
import ExamDetail from "./components/Forms/ExamDetail";
import QuestionForm from "./components/Forms/QuestionForm";
import ImportQuestion from "./components/Forms/ImportQuestion";
import SessionsForm from "./components/Forms/SessionsForm";
import SessionDetail from "./components/Forms/SessionDetail";
import EnrollStudent from "./components/Forms/EnrollStudent";
import Report from "./pages/admin/Report";

const App = () => {
  // State untuk menyimpan data mata pelajaran
  const [subjects, setSubjects] = useState([
    { id: 1, code: "1", name: "MW-Basis Data Lanjut" },
    { id: 2, code: "2", name: "MW-Konsep Jaringan" },
    { id: 3, code: "3", name: "MW-Metodologi Agile" },
    { id: 4, code: "4", name: "MW-Pemrograman Berorientasi Obyek" },
  ]);

  // Fungsi untuk menambah mata pelajaran
  const addSubject = (subject) => {
    const newId = subjects.length ? subjects[subjects.length - 1].id + 1 : 1;
    const newCode = newId.toString(); // Menggunakan ID untuk nomor urut
    setSubjects((prevSubjects) => [
      ...prevSubjects,
      { id: newId, code: newCode, ...subject },
    ]);
  };

  // Fungsi untuk memperbarui mata pelajaran
  const updateSubject = (id, updatedName) => {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === id ? { ...subject, name: updatedName } : subject
      )
    );
  };

  // Fungsi untuk menghapus mata pelajaran
  const deleteSubject = (id) => {
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== id)
    );
  };

  // State untuk menyimpan data kelas
  const [classes, setClasses] = useState([
    { id: 1, code: "1", class: "Teknik Informatika - B" },
    { id: 2, code: "2", class: "Teknik Informatika - A" },
  ]);

  // Fungsi untuk menambah kelas baru
  const addClass = (newClass) => {
    const newId = classes.length ? classes[classes.length - 1].id + 1 : 1;
    setClasses((prevClasses) => [
      ...prevClasses,
      { id: newId, code: `${newId}`, ...newClass },
    ]);
  };

  // Fungsi untuk memperbarui kelas berdasarkan ID
  const updateClass = (id, updatedClassName) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) =>
        cls.id === id ? { ...cls, class: updatedClassName } : cls
      )
    );
  };

  // Fungsi untuk menghapus kelas
  const deleteClass = (id) => {
    setClasses((prevClasses) => prevClasses.filter((cls) => cls.id !== id));
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-slate-300">
        <Sidebar />
        <div className="ml-64 flex-1 p-6">
          <Header />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            {/* Mata Pelajaran Routes */}
            <Route
              path="/mata-pelajaran"
              exact
              element={
                <Subject subjects={subjects} deleteSubject={deleteSubject} />
              }
            />
            <Route
              path="/tambah-mata-pelajaran"
              exact
              element={<SubjectForm onSubmit={addSubject} />}
            />
            <Route
              path="/edit-mata-pelajaran/:id"
              element={
                <SubjectForm subjects={subjects} onSubmit={updateSubject} />
              }
            />
            {/* Kelas Routes */}
            <Route
              path="/kelas"
              exact
              element={<Classes classes={classes} deleteClass={deleteClass} />}
            />
            <Route
              path="/tambah-kelas"
              exact
              element={<ClassesForm onSubmit={addClass} />}
            />
            <Route
              path="/edit-kelas/:id"
              element={<ClassesForm classes={classes} onSubmit={updateClass} />}
            />
            {/* Routes lainnya */}
            <Route path="/siswa" exact element={<Students />} />
            <Route path="/tambah-siswa" exact element={<StudentsForm />} />
            <Route path="/import-siswa" exact element={<ImportStudent />} />
            <Route path="/ujian" exact element={<Exams />} />
            <Route path="/tambah-ujian" exact element={<ExamsForm />} />
            <Route path="/detail-ujian/:id" element={<ExamDetail />} />
            <Route path="/tambah-soal" exact element={<QuestionForm />} />
            <Route path="/import-soal" exact element={<ImportQuestion />} />
            <Route path="/sesi-ujian" exact element={<ExamSessions />} />
            <Route path="/tambah-sesi-ujian" exact element={<SessionsForm />} />
            <Route path="/detail-sesi/:id" exact element={<SessionDetail />} />
            <Route path="/enroll-siswa" exact element={<EnrollStudent />} />
            <Route path="/laporan-nilai" exact element={<Report />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
