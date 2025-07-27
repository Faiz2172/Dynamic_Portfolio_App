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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
  
        {/* Hero Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative group mb-10">
              <div className="w-36 h-36 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-700 rounded-full mx-auto flex items-center justify-center shadow-2xl ring-8 ring-white/50 ring-offset-4 ring-offset-transparent transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User className="w-20 h-20 text-white drop-shadow-lg" />
                )}
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 font-serif drop-shadow-sm">
              {profile.name}
            </h1>
            <h2 className="text-3xl text-slate-700 mb-8 font-medium">
              {profile.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              {profile.tagline}
            </p>
            
            {/* Social Links */}
            {(profile.socialLinks?.linkedin || profile.socialLinks?.github || profile.socialLinks?.twitter) && (
              <div className="flex justify-center gap-6 mt-10">
                {profile.socialLinks?.linkedin && (
                  <a 
                    href={profile.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Linkedin className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </a>
                )}
                {profile.socialLinks?.github && (
                  <a 
                    href={profile.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Github className="w-7 h-7 text-slate-700 group-hover:text-slate-900 transition-colors" />
                  </a>
                )}
                {profile.socialLinks?.twitter && (
                  <a 
                    href={profile.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Twitter className="w-7 h-7 text-sky-500 group-hover:text-sky-600 transition-colors" />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
  
        {/* About Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-12 text-center font-serif">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <p className="text-slate-700 leading-relaxed mb-8 whitespace-pre-line text-lg font-medium">
                  {profile.bio}
                </p>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{profile.email}</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{profile.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{profile.location}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-4">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-5 py-3 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, 
                          hsl(${210 + (index * 15)}, 70%, 55%), 
                          hsl(${240 + (index * 15)}, 70%, 60%))` 
                      }}
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
          <section className="py-20 px-4 bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent mb-16 text-center font-serif">
                Professional Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {profile.services.filter(service => service.title).map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/80 backdrop-blur-xl p-8 rounded-3xl text-center shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-700 rounded-2xl mx-auto flex items-center justify-center shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <Briefcase className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-indigo-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 whitespace-pre-line font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Projects Section */}
        {profile.projects.some(p => p.title) && (
          <section className="py-20 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-16 text-center font-serif">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {profile.projects.filter(project => project.title).map((project, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-105 transition-all duration-500"
                  >
                    <div className="h-56 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <Code className="w-16 h-16 text-indigo-600 drop-shadow-lg z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-500/20 to-purple-600/20 group-hover:from-blue-400/30 group-hover:to-purple-600/30 transition-all duration-500"></div>
                        </>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-indigo-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 whitespace-pre-line font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Testimonials Section */}
        {profile.testimonials.some(t => t.quote) && (
          <section className="py-20 px-4 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 backdrop-blur-sm relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-purple-800 bg-clip-text text-transparent mb-16 text-center font-serif">
                Client Testimonials
              </h2>
              <div className="space-y-10">
                {profile.testimonials.filter(testimonial => testimonial.quote).map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl text-center shadow-2xl border border-white/50 hover:shadow-3xl hover:scale-102 transition-all duration-500"
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 text-yellow-400 fill-current mx-1 hover:scale-125 transition-transform duration-200" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <blockquote className="text-2xl text-slate-700 italic mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-slate-800 text-xl mb-2">{testimonial.author}</p>
                      <p className="text-indigo-600 font-semibold text-lg">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Contact Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 text-white relative z-10 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-700/20"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold mb-8 font-serif drop-shadow-lg">
              Get In Touch
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto whitespace-pre-line font-medium leading-relaxed">
              {profile.message || "Let's work together on your next project!"}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="group flex items-center justify-center space-x-4 bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <Mail className="w-7 h-7 drop-shadow-sm group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">{profile.contactEmail || profile.email}</span>
              </div>
              <div className="group flex items-center justify-center space-x-4 bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 hover:bg-white/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <Phone className="w-7 h-7 drop-shadow-sm group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">{profile.contactPhone || profile.phone}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ProfessionalTemplate;