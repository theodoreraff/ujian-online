import React from 'react';
import { AlarmClock, MoveLeft, Calendar } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SessionsForm = () => {
    const navigate = useNavigate();

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
                <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
                    <thead className="bg-white border-b rounded-t-lg">
                        <tr className='flex items-center'>
                            <AlarmClock />
                            <th className="p-3 text-left text-xl font-medium">Tambah Sesi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div className='flex justify-between items-center space-x-4'>
                            <div className='w-1/2'>
                                <label className="block mb-2 mt-4">Nama Sesi</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Masukkan Nama Sesi"
                                />
                                <label class="block mb-2 mt-4">Waktu Mulai</label>
                                <div class="flex">
                                    <span class="inline-flex items-center px-3 text-sm text-gray-900 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <Calendar className='p-1'/>
                                    </span>
                                    <input type="text" id="website-admin" class="p-2 border rounded-none rounded-e-lg text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:text-white"/>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                <label className="block mb-2 mt-4">Ujian</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded-lg"
                                />
                                <label class="block mb-2 mt-4">Waktu Selesai</label>
                                <div class="flex">
                                    <span class="inline-flex items-center px-3 text-sm text-gray-900 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <Calendar className='p-1'/>
                                    </span>
                                    <input type="text" id="website-admin" class="p-2 border rounded-none rounded-e-lg text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 dark:text-white"/>
                                </div>
                            </div>
                        </div>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SessionsForm