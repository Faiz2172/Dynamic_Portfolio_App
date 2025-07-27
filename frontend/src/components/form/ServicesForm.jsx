// components/form/ServicesForm.jsx
import React from 'react';
import { Briefcase, Plus, Trash2, Lightbulb, Star, CheckCircle } from 'lucide-react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Button from '../common/Button';

const ServicesForm = ({ formik }) => {
  const addService = () => {
    const currentServices = formik.values.services || [];
    if (currentServices.length < 5) {
      formik.setFieldValue('services', [
        ...currentServices,
        { title: '', description: '' }
      ]);
    }
  };

  const removeService = (index) => {
    const currentServices = formik.values.services || [];
    if (currentServices.length > 1) {
      const updatedServices = currentServices.filter((_, i) => i !== index);
      formik.setFieldValue('services', updatedServices);
    }
  };

  const getServiceIcon = (index) => {
    const icons = [
      <Briefcase className="w-6 h-6" />,
      <Star className="w-6 h-6" />,
      <CheckCircle className="w-6 h-6" />,
      <Lightbulb className="w-6 h-6" />,
      <Plus className="w-6 h-6" />
    ];
    return icons[index % icons.length];
  };

  const serviceExamples = [
    {
      category: "Development",
      services: [
        { title: "Web Development", description: "Custom websites and web applications built with modern technologies" },
        { title: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android" },
        { title: "E-commerce Solutions", description: "Complete online store setup with payment integration and inventory management" }
      ]
    },
    {
      category: "Design",
      services: [
        { title: "UI/UX Design", description: "User-centered design solutions that enhance user experience and engagement" },
        { title: "Brand Identity", description: "Complete brand packages including logos, color schemes, and style guides" },
        { title: "Web Design", description: "Responsive and modern website designs that convert visitors into customers" }
      ]
    },
    {
      category: "Marketing",
      services: [
        { title: "Digital Marketing", description: "Comprehensive online marketing strategies to grow your business" },
        { title: "SEO Optimization", description: "Search engine optimization to improve your website's visibility" },
        { title: "Content Creation", description: "Engaging content that tells your story and connects with your audience" }
      ]
    }
  ];

  const fillExampleService = (service, index) => {
    if (index < formik.values.services.length) {
      formik.setFieldValue(`services.${index}.title`, service.title);
      formik.setFieldValue(`services.${index}.description`, service.description);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Services & Offerings</h2>
        <p className="text-gray-600">Showcase what you do and how you help your clients</p>
      </div>

      {/* Services List */}
      <div className="space-y-6">
        {formik.values.services?.map((service, index) => (
          <div
            key={index}
            className="relative p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors bg-white"
          >
            {/* Service Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {getServiceIcon(index)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service {index + 1}</h3>
                  <p className="text-sm text-gray-500">
                    {service.title || 'Untitled Service'}
                  </p>
                </div>
              </div>
              
              {/* Remove Button */}
              {formik.values.services.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeService(index)}
                  icon={<Trash2 className="w-4 h-4" />}
                  className="text-red-600 border-red-300 hover:bg-red-50"
                >
                  Remove
                </Button>
              )}
            </div>

            {/* Service Fields */}
            <div className="space-y-4">
              <Input
                label="Service Title"
                name={`services.${index}.title`}
                type="text"
                value={service.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.services?.[index]?.title && 
                  formik.errors.services?.[index]?.title
                }
                placeholder="e.g., Web Development, UI Design, Digital Marketing"
                required
                icon={<Briefcase className="w-5 h-5" />}
              />

              <Textarea
                label="Service Description"
                name={`services.${index}.description`}
                value={service.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.services?.[index]?.description && 
                  formik.errors.services?.[index]?.description
                }
                placeholder="Describe what this service includes, the benefits to clients, and what makes your approach unique..."
                required
                rows={4}
                maxLength={500}
                helperText="Focus on benefits and outcomes for your clients"
              />
            </div>

            {/* Quick Fill Examples */}
            {(!service.title || !service.description) && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Quick Fill Examples:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceExamples.map((category) =>
                    category.services.slice(0, 2).map((example, exampleIndex) => (
                      <button
                        key={`${category.category}-${exampleIndex}`}
                        type="button"
                        onClick={() => fillExampleService(example, index)}
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      >
                        {example.title}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add Service Button */}
        {formik.values.services.length < 5 && (
          <div className="text-center">
            <Button
              type="button"
              variant="outline"
              onClick={addService}
              icon={<Plus className="w-5 h-5" />}
              className="border-dashed border-2 hover:border-blue-300 hover:bg-blue-50"
            >
              Add Another Service
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              You can add up to 5 services ({formik.values.services.length}/5)
            </p>
          </div>
        )}
      </div>

      {/* Service Examples Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2" />
          Service Examples by Category
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceExamples.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="font-medium text-blue-800 mb-3">{category.category}</h4>
              <div className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white p-3 rounded-lg border border-blue-100">
                    <h5 className="font-medium text-gray-900 text-sm mb-1">
                      {service.title}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-green-900 mb-3 flex items-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          Tips for Great Service Descriptions
        </h3>
        <ul className="text-sm text-green-800 space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Focus on client benefits, not just features</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Include specific outcomes and results</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Mention your unique approach or methodology</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>Keep descriptions concise but informative</span>
          </li>
        </ul>
      </div>

      {/* Preview Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="w-5 h-5 text-yellow-600 mr-2" />
          Services Preview
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formik.values.services
            ?.filter(service => service.title || service.description)
            .map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {getServiceIcon(index)}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {service.title || 'Service Title'}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.description || 'Service description will appear here...'}
                </p>
              </div>
            ))}
        </div>
        {formik.values.services?.every(service => !service.title && !service.description) && (
          <p className="text-gray-500 italic text-center py-8">
            Your services will be previewed here as you fill them out...
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesForm;