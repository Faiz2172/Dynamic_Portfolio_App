import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Briefcase, 
    Code, 
    Star, 
    Linkedin, 
    Github, 
    Twitter 
  } from 'lucide-react';
  
  const ProfessionalTemplate = ({ profile }) => {
    return (
      <div className="min-h-screen bg-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              {profile.profileImage ? (
                <img 
                  src={profile.profileImage} 
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-white" />
              )}
            </div>
            <h1 className="text-5xl font-bold text-blue-900 mb-4">{profile.name}</h1>
            <h2 className="text-2xl text-blue-600 mb-6">{profile.title}</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">{profile.tagline}</p>
            
            {/* Social Links */}
            {(profile.socialLinks?.linkedin || profile.socialLinks?.github || profile.socialLinks?.twitter) && (
              <div className="flex justify-center gap-4 mt-6">
                {profile.socialLinks?.linkedin && (
                  <a 
                    href={profile.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {profile.socialLinks?.github && (
                  <a 
                    href={profile.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Github size={24} />
                  </a>
                )}
                {profile.socialLinks?.twitter && (
                  <a 
                    href={profile.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Twitter size={24} />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
  
        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                  {profile.bio}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{profile.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{profile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{profile.location}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-900">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services Section */}
        {profile.services.some(s => s.title) && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Professional Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {profile.services.filter(service => service.title).map((service, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Projects Section */}
        {profile.projects.some(p => p.title) && (
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {profile.projects.filter(project => project.title).map((project, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Code className="w-12 h-12 text-blue-600" />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Testimonials Section */}
        {profile.testimonials.some(t => t.quote) && (
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Client Testimonials</h2>
              <div className="space-y-8">
                {profile.testimonials.filter(testimonial => testimonial.quote).map((testimonial, index) => (
                  <div key={index} className="bg-blue-50 p-8 rounded-lg text-center">
                    <Star className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <blockquote className="text-xl text-gray-700 italic mb-6 max-w-2xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-blue-900">{testimonial.author}</p>
                      <p className="text-blue-600">{testimonial.position}</p>
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
  
  export default ProfessionalTemplate;