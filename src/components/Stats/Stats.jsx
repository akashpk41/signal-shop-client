import React from 'react';

const Stats = () => {
     return (
          <div>

          {/* Live Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "15,247", label: "Active Users", icon: "👥" },
              { value: "99.9%", label: "Success Rate", icon: "⚡" },
              {
                value: currentTime.toLocaleTimeString(),
                label: "Live Now",
                icon: "🔴",
              },
              { value: "24/7", label: "Support", icon: "💬" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>


          </div>
     );
};

export default Stats;