import React from 'react';
import { Layers2, MoveLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ClassesForm = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-start items-center mb-4">
                <button
                    onClick={() => navigate("/kelas")}
                    className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MoveLeft className="mr-2" /> Kembali
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
                    <thead className="bg-white border-b rounded-t-lg">
                        <tr className='flex items-center'>
                            <Layers2 />
                            <th className="p-3 text-left text-xl font-medium">Tambah Kelas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                            <label className="block mb-2 mt-4">Nama Kelas</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg"
                                placeholder="Masukkan Nama Kelas"
                            />
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

export default ClassesForm