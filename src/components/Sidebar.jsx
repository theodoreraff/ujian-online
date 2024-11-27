import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChartLine, faClock, faEdit, faFolder, faGraduationCap, faTachometer, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-blue-950 text-white flex flex-col h-screen fixed">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center justify-between">
                    <FontAwesomeIcon icon={faGraduationCap} color='white' />
                    <span className="text-lg font-medium p-2">
                        UJIAN ONLINE
                    </span>
                </div>
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">PRO</span>
            </div>
            <nav className="flex-1">
                <ul className='mx-6'>
                    <div className='border-y border-white'>
                        <a href="/">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faTachometer} color='white' className='mr-2' />
                                <span>Dashboard</span>
                            </li>
                        </a>
                    </div>
                    <div className="border-y border-white">
                        <a href="/mata-pelajaran">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faBook} color='white' className='mr-2' />
                                <span>Mata Pelajaran</span>
                            </li>
                        </a>
                        <a href="/kelas">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faFolder} color='white' className='mr-2' />
                                <span>Kelas</span>
                            </li>
                        </a>
                        <a href="/siswa">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faUserGroup} color='white' className='mr-2' />
                                <span>Siswa</span>
                            </li>
                        </a>
                    </div>
                    <div className="border-y border-white">
                        <a href="/ujian">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faEdit} color='white' className='mr-2' />
                                <span>Ujian</span>
                            </li>
                        </a>
                        <a href="/sesi-ujian">
                            <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                                <FontAwesomeIcon icon={faClock} color='white' className='mr-2' />
                                <span>Sesi Ujian</span>
                            </li>
                        </a>
                    </div>
                    <a href="/laporan-nilai">
                        <li className="flex items-center p-2 my-3 rounded-lg hover:bg-blue-700 cursor-pointer">
                            <FontAwesomeIcon icon={faChartLine} color='white' className='mr-2' />
                            <span>Laporan Nilai</span>
                        </li>
                    </a>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar