import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { SquarePen, MoveLeft, Edit, Trash2, CircleHelp, Plus, FileInput } from 'lucide-react';

const ExamDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Contoh data soal ujian
    const [ questions, setQuestions ] = useState([
        {
            id: 1,
            question: 'Apa itu HTML?',
        },
        {
            id: 2,
            question: 'Jelaskan perbedaan antara CSS dan JavaScript',
        },
        {
            id: 3,
            question: 'Buatlah sebuah program sederhana menggunakan React',
        }
    ]);

    // Dapatkan data ujian yang dikirim melalui navigasi state
    const exam = location.state;

    // Jika tidak ada data, redirect atau tampilkan pesan error
    if (!exam) {
        return (
            <div>
                <p>Ujian tidak ditemukan</p>
                <button
                    onClick={() => navigate("/ujian")}
                    className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MoveLeft className="mr-2" /> Kembali
                </button>
            </div>
        );
    }

    const handleEditQuestion = (question) => {
        // Logika untuk mengedit pertanyaan
        console.log('Edit pertanyaan:', question);
    };

    const handleDeleteQuestion = (questionId) => {
        // Logika untuk menghapus pertanyaan
        setQuestions(questions.filter(q => q.id !== questionId));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => navigate("/ujian")}
                    className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MoveLeft className="mr-2" /> Kembali
                </button>
            </div>

            {/* Detail Ujian */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
                    <thead>
                        <tr className='flex items-center py-2'>
                            <SquarePen />
                            <th className="text-left text-xl font-medium ml-1">Detail Ujian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50 cursor-pointer border" >
                            <td className="p-3 border">Nama Ujian</td>
                            <td className="p-3">{exam.type}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 cursor-pointer border" >
                            <td className="p-3 border">Mata Pelajaran</td>
                            <td className="p-3">{exam.subject}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 cursor-pointer border" >
                            <td className="p-3 border">Kelas</td>
                            <td className="p-3">{exam.class}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 cursor-pointer border" >
                            <td className="p-3 border">Jumlah Soal</td>
                            <td className="p-3">{exam.jumlah}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 cursor-pointer border" >
                            <td className="p-3 border">Durasi</td>
                            <td className="p-3">{exam.duration}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mt-6">
                <div className='flex items-center mb-4 border-b pb-4'>
                    <CircleHelp />
                    <span className="text-left text-xl font-medium ml-1">Detail Ujian</span>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate("/tambah-soal")}
                        className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        <Plus className="mr-2 bg-white p-1 rounded-full" color="blue" /> Tambah
                    </button>
                    <button
                        onClick={() => navigate("/import-soal")}
                        className="flex items-center bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                    >
                        <FileInput className="mr-2" color="white" /> Import
                    </button>
                </div>
                <table className="table-auto w-full border-collapse overflow-hidden rounded-lg mt-4">
                    <thead className="bg-blue-900 text-white border-b rounded-t-lg">
                        <tr>
                            <th className="p-3 text-left">No</th>
                            <th className="p-3 text-left">Soal</th>
                            <th className="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr
                                key={question.id}
                                className="border-b hover:bg-gray-50"
                            >
                                <td className="p-3">{question.id}</td>
                                <td className="p-3">{question.question}</td>
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

export default ExamDetail;