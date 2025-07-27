// components/form/SkillsForm.jsx
import React, { useState } from 'react';
import { Plus, X, Code, Palette, Lightbulb } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';

const SkillsForm = ({ formik }) => {
  const [newSkill, setNewSkill] = useState('');

  const popularSkills = [
    // Technical Skills
    'React', 'JavaScript', 'Python', 'Node.js', 'TypeScript', 'HTML/CSS', 'MongoDB', 'PostgreSQL',
    'Git', 'Docker', 'AWS', 'GraphQL', 'Next.js', 'Vue.js', 'Angular', 'Express.js',
    // Design Skills
    'UI/UX Design', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Sketch', 'Prototyping',
    'Wireframing', 'User Research', 'Adobe XD', 'InVision',
    // Marketing/Business
    'Digital Marketing', 'SEO', 'Content Marketing', 'Google Analytics', 'Social Media Marketing',
    'Email Marketing', 'Project Management', 'Agile', 'Scrum', 'Data Analysis',
    // Soft Skills
    'Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Creative Thinking',
    'Time Management', 'Public Speaking', 'Mentoring'
  ];

  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !formik.values.skills.includes(trimmedSkill)) {
      const updatedSkills = [...formik.values.skills, trimmedSkill];
      formik.setFieldValue('skills', updatedSkills);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    const updatedSkills = formik.values.skills.filter(skill => skill !== skillToRemove);
    formik.setFieldValue('skills', updatedSkills);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(newSkill);
    }
  };

  const getSkillColor = (index) => {
    const colors = [
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-purple-100 text-purple-800',
      'bg-orange-100 text-orange-800',
      'bg-pink-100 text-pink-800',
      'bg-indigo-100 text-indigo-800',
      'bg-red-100 text-red-800',
      'bg-yellow-100 text-yellow-800'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills & Expertise</h2>
        <p className="text-gray-600">Showcase your technical and professional skills</p>
      </div>

      <div className="space-y-6">
        {/* Add New Skill */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Add Skills <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <Input
              name="newSkill"
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="e.g., React, UI Design, Project Management"
              className="flex-1"
              icon={<Code className="w-5 h-5" />}
            />
            <Button
              type="button"
              onClick={() => addSkill(newSkill)}
              disabled={!newSkill.trim()}
              icon={<Plus className="w-5 h-5" />}
            >
              Add
            </Button>
          </div>
          {formik.touched.skills && formik.errors.skills && (
            <p className="text-sm text-red-600 mt-1 flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {formik.errors.skills}
            </p>
          )}
        </div>

        {/* Current Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Your Skills ({formik.values.skills.length})
          </label>
          {formik.values.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {formik.values.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(index)}`}
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Code className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>No skills added yet. Add some skills to showcase your expertise!</p>
            </div>
          )}
        </div>

        {/* Popular Skills Suggestions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Popular Skills (Click to Add)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {popularSkills
              .filter(skill => !formik.values.skills.includes(skill))
              .slice(0, 20)
              .map((skill, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => addSkill(skill)}
                  className="text-left px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors border border-gray-200 hover:border-gray-300"
                >
                  {skill}
                </button>
              ))}
          </div>
        </div>

        {/* Skill Categories Help */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-3 flex items-center">
            <Lightbulb className="w-4 h-4 mr-2" />
            Skill Categories to Consider
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Technical Skills</h4>
              <p className="text-blue-700">Programming languages, frameworks, tools, software</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Creative Skills</h4>
              <p className="text-blue-700">Design, writing, multimedia, artistic abilities</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Soft Skills</h4>
              <p className="text-blue-700">Leadership, communication, problem-solving, teamwork</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Card */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Palette className="w-5 h-5 text-purple-600 mr-2" />
          Preview
        </h3>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Skills & Expertise</h4>
          {formik.values.skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {formik.values.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(index)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">Your skills will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;