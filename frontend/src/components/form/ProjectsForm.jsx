import { Plus } from 'lucide-react';

const ProjectsForm = ({ formik }) => {
  const addProject = () => {
    if (formik.values.projects.length < 5) {
      formik.setFieldValue('projects', [
        ...formik.values.projects,
        { title: '', description: '', image: '' }
      ]);
    }
  };

  const removeProject = (index) => {
    const projects = [...formik.values.projects];
    projects.splice(index, 1);
    formik.setFieldValue('projects', projects);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Portfolio Projects</h2>
      
      {formik.values.projects.map((project, index) => (
        <div key={index} className="p-4 border rounded-lg relative">
          <h3 className="font-medium mb-3">Project {index + 1}</h3>
          
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          )}

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name={`projects.${index}.title`}
                value={project.title}
                onChange={formik.handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Project title"
              />
              {formik.errors.projects?.[index]?.title && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.projects[index].title}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name={`projects.${index}.description`}
                value={project.description}
                onChange={formik.handleChange}
                rows="3"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Project description"
              />
              {formik.errors.projects?.[index]?.description && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.projects[index].description}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                name={`projects.${index}.image`}
                value={project.image}
                onChange={formik.handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
        </div>
      ))}

      {formik.values.projects.length < 5 && (
        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Plus size={18} />
          Add Another Project
        </button>
      )}
    </div>
  );
};

export default ProjectsForm;