import React from "react";

const TemplateCard = ({ template, onSelect }) => {
    return (
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
        onClick={() => onSelect(template.id)}
      >
        <div className={`h-40 ${template.colors.background} ${template.colors.accent} bg-opacity-10 flex items-center justify-center`}>
          <div className="text-center">
            <div className={`w-16 h-16 ${template.colors.accent} rounded-full mx-auto mb-2 opacity-20`}></div>
            <h3 className={`text-lg font-semibold ${template.colors.primary}`}>
              {template.name}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
          <p className="text-gray-600 mb-4">{template.preview}</p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Select Template
          </button>
        </div>
      </div>
    );
  };
  
  export default TemplateCard;