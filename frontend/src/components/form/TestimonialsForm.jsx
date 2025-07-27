import { Plus, X } from 'lucide-react';

const TestimonialsForm = ({ formik }) => {
  const addTestimonial = () => {
    formik.setFieldValue('testimonials', [
      ...formik.values.testimonials,
      { quote: '', author: '', position: '' }
    ]);
  };

  const removeTestimonial = (index) => {
    const testimonials = [...formik.values.testimonials];
    testimonials.splice(index, 1);
    formik.setFieldValue('testimonials', testimonials);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Client Testimonials</h2>
      
      {formik.values.testimonials.map((testimonial, index) => (
        <div key={index} className="p-4 border rounded-lg relative">
          <h3 className="font-medium mb-3">Testimonial {index + 1}</h3>
          
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeTestimonial(index)}
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
            >
              <X size={18} />
            </button>
          )}

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Testimonial Quote</label>
              <textarea
                name={`testimonials.${index}.quote`}
                value={testimonial.quote}
                onChange={formik.handleChange}
                rows="3"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="What your client said..."
              />
              {formik.errors.testimonials?.[index]?.quote && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.testimonials[index].quote}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name</label>
                <input
                  type="text"
                  name={`testimonials.${index}.author`}
                  value={testimonial.author}
                  onChange={formik.handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="John Smith"
                />
                {formik.errors.testimonials?.[index]?.author && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.testimonials[index].author}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Client Position</label>
                <input
                  type="text"
                  name={`testimonials.${index}.position`}
                  value={testimonial.position}
                  onChange={formik.handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="CEO at Company"
                />
                {formik.errors.testimonials?.[index]?.position && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.testimonials[index].position}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addTestimonial}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus size={18} />
        Add Another Testimonial
      </button>
    </div>
  );
};

export default TestimonialsForm;