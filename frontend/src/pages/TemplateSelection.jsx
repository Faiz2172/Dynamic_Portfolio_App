import { useNavigate } from 'react-router-dom';
import { templates } from '../utils/templates';
import TemplateCard from '../components/TemplateCard';

const TemplateSelection = () => {
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    navigate('/form', { state: { selectedTemplate: templateId } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Portfolio Template
          </h1>
          <p className="text-xl text-gray-600">
            Select a design that matches your style and personality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(templates).map((template) => (
            <TemplateCard 
              key={template.id}
              template={template}
              onSelect={handleTemplateSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;