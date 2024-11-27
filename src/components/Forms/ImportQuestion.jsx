import React from 'react';
import { CircleHelp, MoveLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ImportQuestion = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-start items-center mb-4">
                <button
                    onClick={() => navigate("/ujian")}
                    className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    <MoveLeft className="mr-2" /> Kembali
                </button>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <table className="table-auto w-full border-collapse overflow-hidden rounded-lg">
                    <thead className="bg-white border-b rounded-t-lg">
                        <tr className='flex items-center'>
                            <CircleHelp />
                            <th className="p-3 text-left text-xl font-medium">Import Soal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div className='mt-4'>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">File Excel</label>
                            <input class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                        <div className="flex justify-start space-x-2 mt-6">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Upload
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

export default ImportQuestion