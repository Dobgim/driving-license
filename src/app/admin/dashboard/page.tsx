export default function AdminDashboard() {
  const stats = [
    { label: "Total Proofs", value: "45", trend: "+12%" },
    { label: "Pending Inquiries", value: "8", trend: "-5%" },
    { label: "Active Clients", value: "32", trend: "+18%" },
    { label: "Success Rate", value: "94%", trend: "+2%" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
        <p className="text-dark/70 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <span className="text-sm font-medium text-dark/60 mb-2">{stat.label}</span>
            <div className="flex items-end justify-between mt-auto">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-accent' : 'text-red-500'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-primary mb-4">Recent Inquiries</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                <div>
                  <p className="font-medium text-dark">Sarah Johnson</p>
                  <p className="text-sm text-dark/60">UK Theory Test Coaching</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                  Pending
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-primary mb-4">Recently Added Proofs</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-md mr-3"></div>
                  <div>
                    <p className="font-medium text-dark">Practical Test - London</p>
                    <p className="text-sm text-dark/60">Added 2 hours ago</p>
                  </div>
                </div>
                <span className="text-xs bg-accent/20 text-[#388e3c] px-2 py-1 rounded-full font-medium">
                  Published
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
