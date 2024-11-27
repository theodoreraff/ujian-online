import React from 'react';
import { 
  Users,  
  Layers, 
  SquarePen, 
  AlarmClock,
} from 'lucide-react';

const AdminDashboard = () => {
  const dashboardCards = [
    { 
      title: 'Kelas', 
      value: '0', 
      icon: Layers, 
      color: 'bg-blue-500' 
    },
    { 
      title: 'Siswa', 
      value: '0', 
      icon: Users, 
      color: 'bg-green-500' 
    },
    { 
      title: 'Ujian', 
      value: '0', 
      icon: SquarePen, 
      color: 'bg-purple-500' 
    },
    { 
      title: 'Sesi Ujian', 
      value: '0', 
      icon: AlarmClock, 
      color: 'bg-orange-500' 
    }
  ];

  return (
    <div className="p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card, index) => (
          <div 
            key={index} 
            className={`bg-white text-white rounded-lg p-6 shadow-md flex items-center justify-start`}
          >
            <card.icon size={48} className={`${card.color} p-3 rounded-lg`} />
            <div className='ml-2'>
              <h3 className="text-lg text-gray-700 font-semibold">{card.title}</h3>
              <p className="text-xl text-gray-900 font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;