const ContactForm = ({ formik }) => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        
        <div>
          <label className="block text-sm font-medium mb-1">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={formik.values.contactEmail}
            onChange={formik.handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="contact@example.com"
          />
          {formik.errors.contactEmail && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.contactEmail}</p>
          )}
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Contact Phone</label>
          <input
            type="tel"
            name="contactPhone"
            value={formik.values.contactPhone}
            onChange={formik.handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="+1 (555) 123-4567"
          />
          {formik.errors.contactPhone && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.contactPhone}</p>
          )}
        </div>
  
        <div>
          <label className="block text-sm font-medium mb-1">Welcome Message</label>
          <textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Let's work together to bring your ideas to life!"
          />
          {formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default ContactForm;