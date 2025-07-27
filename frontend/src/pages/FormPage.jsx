// pages/FormPage.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { ChevronLeft, ChevronRight, Plus, X, Save } from 'lucide-react';
import { validationSchemas } from '../utils/formValidation';
import { getDefaultFormValues, generateId } from '../utils/helpers';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Textarea from '../components/common/Textarea';

// Form step components
import HeroSection from '../components/form/HeroSection';
import AboutForm from '../components/form/AboutForm';
import SkillsForm from '../components/form/SkillsForms';
import ServicesForm from '../components/form/ServicesForm';
import ProjectsForm from '../components/form/ProjectsForm';
import TestimonialsForm from '../components/form/TestimonialsForm';
import ContactForm from '../components/form/ContactForm';

const FormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [profiles, setProfiles] = useLocalStorage('portfolioProfiles', []);
  const [isSaving, setIsSaving] = useState(false);
  
  const selectedTemplate = location.state?.selectedTemplate || 'minimalist';
  
  const steps = [
    { id: 'hero', title: 'Hero Section', component: HeroSection },
    { id: 'about', title: 'About Me', component: AboutForm },
    { id: 'skills', title: 'Skills', component: SkillsForm },
    { id: 'services', title: 'Services', component: ServicesForm },
    { id: 'projects', title: 'Projects', component: ProjectsForm },
    { id: 'testimonials', title: 'Testimonials', component: TestimonialsForm },
    { id: 'contact', title: 'Contact', component: ContactForm }
  ];

  const currentStepId = steps[currentStep].id;
  const CurrentStepComponent = steps[currentStep].component;

  const formik = useFormik({
    initialValues: {
      ...getDefaultFormValues(),
      template: selectedTemplate
    },
    validationSchema: validationSchemas[currentStepId],
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      if (currentStep < steps.length - 1) {
        // Move to next step
        setCurrentStep(currentStep + 1);
      } else {
        // Final submission
        setIsSaving(true);
        try {
          const newProfile = {
            id: generateId(),
            ...values,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          const updatedProfiles = [...profiles, newProfile];
          setProfiles(updatedProfiles);
          
          // Simulate saving delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          navigate('/profiles', { 
            state: { 
              message: 'Portfolio created successfully!',
              newProfileId: newProfile.id 
            }
          });
        } catch (error) {
          console.error('Error saving profile:', error);
        } finally {
          setIsSaving(false);
        }
      }
    }
  });

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    formik.handleSubmit();
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      const draftProfile = {
        id: generateId(),
        ...formik.values,
        isDraft: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      const updatedProfiles = [...profiles, draftProfile];
      setProfiles(updatedProfiles);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      navigate('/profiles', { 
        state: { message: 'Draft saved successfully!' }
      });
    } catch (error) {
      console.error('Error saving draft:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Create Portfolio</h1>
              <p className="text-sm text-gray-600 mt-1">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSaveDraft}
                loading={isSaving}
                icon={<Save className="w-4 h-4" />}
              >
                Save Draft
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
                icon={<X className="w-4 h-4" />}
              >
                Cancel
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {/* Step indicators */}
            <div className="flex justify-between mt-3">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex flex-col items-center cursor-pointer transition-colors duration-200 ${
                    index <= currentStep ? 'text-blue-600' : 'text-gray-400'
                  }`}
                  onClick={() => index < currentStep && setCurrentStep(index)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border-2 transition-colors duration-200 ${
                      index < currentStep
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : index === currentStep
                        ? 'border-blue-600 text-blue-600'
                        : 'border-gray-300 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-xs mt-1 text-center max-w-16 leading-tight">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <CurrentStepComponent formik={formik} />
            </form>
          </div>

          {/* Navigation Footer */}
          <div className="px-8 py-6 bg-gray-50 border-t flex items-center justify-between rounded-b-lg">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              icon={<ChevronLeft className="w-4 h-4" />}
            >
              Previous
            </Button>

            <div className="flex items-center space-x-3">
              {currentStep === steps.length - 1 && (
                <Button
                  variant="secondary"
                  onClick={handleSaveDraft}
                  loading={isSaving}
                  icon={<Save className="w-4 h-4" />}
                >
                  Save as Draft
                </Button>
              )}
              
              <Button
                onClick={handleNext}
                loading={isSaving}
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {currentStep === steps.length - 1 ? 'Create Portfolio' : 'Next Step'}
              </Button>
            </div>
          </div>
        </div>

        {/* Form Help */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">
            💡 Tips for {steps[currentStep].title}
          </h3>
          <div className="text-sm text-blue-700">
            {currentStep === 0 && "Make a strong first impression with a compelling tagline that summarizes what you do."}
            {currentStep === 1 && "Write a bio that tells your story and highlights your unique value proposition."}
            {currentStep === 2 && "Add 5-10 relevant skills that showcase your expertise and match your target roles."}
            {currentStep === 3 && "Describe 2-3 key services you offer with clear benefits for potential clients."}
            {currentStep === 4 && "Showcase your best work with detailed descriptions of your role and impact."}
            {currentStep === 5 && "Include testimonials that highlight specific results and client satisfaction."}
            {currentStep === 6 && "Make it easy for visitors to contact you with a clear call-to-action message."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;