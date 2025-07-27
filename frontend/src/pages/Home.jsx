// pages/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { templates } from '../data/template';
import Button from '../components/common/Button';

const Home = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [hoveredTemplate, setHoveredTemplate] = useState('');

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    navigate('/form', { state: { selectedTemplate: templateId } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Create Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Perfect Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build a stunning professional portfolio in minutes with our customizable templates. 
              No coding required – just fill in your details and watch your portfolio come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/profiles')}
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Portfolio Builder?
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to create a professional portfolio that stands out
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                Simple 7-step form guides you through creating your portfolio. No technical skills needed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Templates</h3>
              <p className="text-gray-600">
                Choose from beautifully designed templates that work for any industry or profession.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Results</h3>
              <p className="text-gray-600">
                See your portfolio come to life instantly as you fill in your information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Template Selection Section */}
      <div id="templates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Template
            </h2>
            <p className="text-xl text-gray-600">
              Select a design that matches your style and personality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(templates).map((template) => (
              <div
                key={template.id}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedTemplate === template.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate('')}
                onClick={() => handleTemplateSelect(template.id)}
              >
                {/* Template Preview */}
                <div className={`h-48 ${template.colors.background} ${template.colors.accent} bg-opacity-10 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className={`w-20 h-20 ${template.colors.accent} rounded-full mx-auto opacity-20`}></div>
                      <div className="space-y-2">
                        <div className={`h-3 ${template.colors.accent} opacity-30 rounded mx-auto`} style={{width: '120px'}}></div>
                        <div className={`h-2 ${template.colors.accent} opacity-20 rounded mx-auto`} style={{width: '80px'}}></div>
                      </div>
                      <div className="space-y-1">
                        <div className={`h-2 ${template.colors.accent} opacity-15 rounded mx-auto`} style={{width: '100px'}}></div>
                        <div className={`h-2 ${template.colors.accent} opacity-15 rounded mx-auto`} style={{width: '90px'}}></div>
                        <div className={`h-2 ${template.colors.accent} opacity-15 rounded mx-auto`} style={{width: '70px'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  {hoveredTemplate === template.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Button variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                        Select Template
                      </Button>
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{template.name}</h3>
                    {selectedTemplate === template.id && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{template.preview}</p>
                  
                  {/* Color Palette */}
                  <div className="flex space-x-2 mb-4">
                    <div className={`w-4 h-4 rounded-full ${template.colors.accent.replace('bg-gradient-to-r from-purple-500 to-pink-500', 'bg-purple-500')}`}></div>
                    <div className={`w-4 h-4 rounded-full ${template.colors.background}`} style={{border: '1px solid #e5e7eb'}}></div>
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  </div>

                  <Button
                    className="w-full"
                    variant={selectedTemplate === template.id ? 'primary' : 'outline'}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTemplateSelect(template.id);
                    }}
                  >
                    {selectedTemplate === template.id ? 'Selected' : 'Choose Template'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't decide? You can always change your template later.
            </p>
            <Button
              size="lg"
              onClick={() => handleTemplateSelect('minimalist')}
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
            >
              Start with Minimalist
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Portfolio?</h3>
          <p className="text-gray-400 mb-6">
            Join thousands of professionals who have created stunning portfolios with our platform.
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Home;