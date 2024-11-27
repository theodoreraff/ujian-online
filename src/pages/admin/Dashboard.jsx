import React from "react";
import { Users, Layers, SquarePen, AlarmClock } from "lucide-react";

const AdminDashboard = () => {
  const dashboardCards = [
    {
      title: "Kelas",
      value: "10",
      icon: Layers,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Siswa",
      value: "10",
      icon: Users,
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      title: "Ujian",
      value: "10",
      icon: SquarePen,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Sesi Ujian",
      value: "10",
      icon: AlarmClock,
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Ikon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-lg ${card.bgColor}`}
            >
              <card.icon size={28} className={`${card.iconColor}`} />
            </div>
            {/* Detail */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-700">
                {card.title}
              </h3>
              <p className="text-xl font-bold text-gray-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
