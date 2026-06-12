import React from "react";

const PlotSection = ({ plot }) => {
  if (!plot || plot === "N/A") return null;

  return (
    <div className="bg-gray-900/40 p-6 rounded-2xl border border-white/5">
      <h3 className="text-xl font-bold mb-3 text-blue-400">Plot</h3>
      <p className="text-gray-300 leading-relaxed text-lg italic">"{plot}"</p>
    </div>
  );
};

export default PlotSection;
