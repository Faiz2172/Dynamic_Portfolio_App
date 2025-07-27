// components/form/AboutForm.jsx
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe } from 'lucide-react';
import Input from '../common/Input';
import Textarea from '../common/Textarea';

const AboutForm = ({ formik }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
        <p className="text-gray-600">Tell your story and share your contact information</p>
      </div>

      <div className="space-y-6">
        <Textarea
          label="Professional Bio"
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.bio && formik.errors.bio}
          placeholder="Write a compelling bio that tells your professional story, highlights your experience, and showcases what makes you unique..."
          required
          rows={6}
          maxLength={1000}
          helperText="Share your background, experience, and what drives you professionally"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            placeholder="john@example.com"
            required
            icon={<Mail className="w-5 h-5" />}
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone}
            placeholder="+1 (555) 123-4567"
            required
            icon={<Phone className="w-5 h-5" />}
          />
        </div>

        <Input
          label="Location"
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.location && formik.errors.location}
          placeholder="New York, NY, USA"
          required
          icon={<MapPin className="w-5 h-5" />}
          helperText="City, State/Country where you're based"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links (Optional)</h3>
          <div className="space-y-4">
            <Input
              label="LinkedIn Profile"
              name="socialLinks.linkedin"
              type="url"
              value={formik.values.socialLinks.linkedin}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="https://linkedin.com/in/your-profile"
              icon={<Linkedin className="w-5 h-5" />}
            />

            <Input
              label="GitHub Profile"
              name="socialLinks.github"
              type="url"
              value={formik.values.socialLinks.github}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="https://github.com/your-username"
              icon={<Github className="w-5 h-5" />}
            />

            <Input
              label="Twitter Profile"
              name="socialLinks.twitter"
              type="url"
              value={formik.values.socialLinks.twitter}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="https://twitter.com/your-handle"
              icon={<Twitter className="w-5 h-5" />}
            />

            <Input
              label="Personal Website"
              name="socialLinks.website"
              type="url"
              value={formik.values.socialLinks.website}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="https://your-website.com"
              icon={<Globe className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      {/* Preview Card */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {formik.values.bio || 'Your professional bio will appear here...'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{formik.values.email || 'your-email@example.com'}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{formik.values.phone || '+1 (555) 123-4567'}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{formik.values.location || 'Your Location'}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {formik.values.socialLinks.linkedin && (
                <div className="flex items-center space-x-2 text-blue-600">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm truncate">LinkedIn</span>
                </div>
              )}
              {formik.values.socialLinks.github && (
                <div className="flex items-center space-x-2 text-gray-800">
                  <Github className="w-4 h-4" />
                  <span className="text-sm truncate">GitHub</span>
                </div>
              )}
              {formik.values.socialLinks.twitter && (
                <div className="flex items-center space-x-2 text-blue-400">
                  <Twitter className="w-4 h-4" />
                  <span className="text-sm truncate">Twitter</span>
                </div>
              )}
              {formik.values.socialLinks.website && (
                <div className="flex items-center space-x-2 text-green-600">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm truncate">Website</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;