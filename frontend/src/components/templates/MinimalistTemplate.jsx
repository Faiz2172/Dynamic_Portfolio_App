import { User, Mail, Phone, MapPin, Briefcase, Code, Star } from 'lucide-react';

const MinimalistTemplate = ({ profile }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-gray-900 rounded-full mx-auto mb-8 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{profile.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-6">{profile.title}</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">{profile.tagline}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{profile.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{profile.email}</span>
                </div>
                {/* Other contact info */}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-900 text-white rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {profile.services && profile.services.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profile.services.map((service, idx) => (
                <div key={idx} className="bg-white rounded shadow p-6">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {profile.projects && profile.projects.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profile.projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded shadow p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  {project.url && (
                    <a href={project.url} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {profile.testimonials && profile.testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Testimonials</h2>
            <div className="space-y-8">
              {profile.testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded shadow p-6">
                  <blockquote className="text-gray-700 italic mb-2">"{testimonial.quote}"</blockquote>
                  <div className="text-sm text-gray-500">
                    — {testimonial.author}, {testimonial.position}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto whitespace-pre-line">
              {profile.message || "Let's work together on your next project!"}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span>{profile.contactEmail || profile.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>{profile.contactPhone || profile.phone}</span>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default MinimalistTemplate;