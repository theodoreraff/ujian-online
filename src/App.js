import React from "react";
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
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-300">
        <Sidebar />
        <div className="ml-64 flex-1 p-6">
          <Header />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/mata-pelajaran" exact element={<Subject />} />
            <Route
              path="/tambah-mata-pelajaran"
              exact
              element={<SubjectForm />}
            />
            <Route path="/kelas" exact element={<Classes />} />
            <Route path="/tambah-kelas" exact element={<ClassesForm />} />
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
