const HeroSection = ({ formik }) => {
return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Hero Section</h2>
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
        {formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Professional Title</label>
        <input
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Full Stack Developer"
        />
        {formik.errors.title && <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={formik.values.tagline}
          onChange={formik.handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Building amazing web experiences"
        />
        {formik.errors.tagline && <p className="text-red-500 text-sm mt-1">{formik.errors.tagline}</p>}
      </div>
    </div>
  );
}
  
export default HeroSection;