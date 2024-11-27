import React, { useState } from 'react';
import { UserPlus, MoveLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const EnrollStudent = () => {
    const navigate = useNavigate();
    const [ questions, setQuestions ] = useState([
        {
            id: 1,
            name: 'Theodorus Yosia Raffael Gunawan',
            class: 'Teknik Informatika - A',
            jk: 'L',
        },
        {
            id: 2,
            name: 'Akmal Bintang Budiawan',
            class: 'Teknik Informatika - B',
            jk: 'L',
        },
    ]);

    return (
        <div>
            <div className="flex justify-start items-center mb-4">
                <button
                    onClick={() => navigate("/sesi-ujian")}
                    className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MoveLeft className="mr-2" /> Kembali
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="bg-white rounded-lg">
                    <div className='flex items-center mb-4 border-b pb-4'>
                        <UserPlus />
                        <span className="text-left text-xl font-medium ml-1">Enroll Siswa</span>
                    </div>
                    <table className="table-auto w-full border-collapse overflow-hidden rounded-lg mt-4">
                        <thead className="bg-blue-900 text-white border-b rounded-t-lg">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th className="p-3 text-left">No</th>
                                <th className="p-3 text-left">Nama Siswa</th>
                                <th className="p-3 text-left">Kelas</th>
                                <th className="p-3 text-left">Jenis Kelamin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question) => (
                                <tr
                                    key={question.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td scope="col" class="p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="p-3 border">{question.id}</td>
                                    <td className="p-3 border">{question.name}</td>
                                    <td className="p-3 border">{question.class}</td>
                                    <td className="p-3 text-center border">{question.jk}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-start space-x-2 mt-6">
                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Simpan
                        </button>
                        <button
                            className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrollStudent