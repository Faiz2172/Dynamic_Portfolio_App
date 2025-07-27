import { User, Mail, Phone, MapPin, Briefcase, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CreativeTemplate = ({ profile }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 font-sans">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-purple-900 mb-4 font-serif">{profile.name}</h1>
          <h2 className="text-2xl text-purple-600 mb-6">{profile.title}</h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">{profile.tagline}</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-900 mb-8 text-center font-serif"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={item}>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{profile.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{profile.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{profile.location}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-900">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {profile.services && profile.services.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-purple-900 mb-12 text-center font-serif"
            >
              My Services
            </motion.h2>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {profile.services.map((service, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {profile.projects && profile.projects.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-purple-900 mb-12 text-center font-serif"
            >
              Featured Projects
            </motion.h2>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {profile.projects.map((project, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Code className="w-12 h-12 text-purple-600" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    {project.url && (
                      <a 
                        href={project.url} 
                        className="text-pink-600 hover:text-pink-800 font-medium flex items-center gap-2"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {profile.testimonials && profile.testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-purple-900 mb-12 text-center font-serif"
            >
              Client Testimonials
            </motion.h2>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {profile.testimonials.map((testimonial, idx) => (
                <motion.div 
                  key={idx} 
                  variants={item}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-purple-900">{testimonial.author}</p>
                    <p className="text-purple-600">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 font-serif">Let's Work Together</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            {profile.message || "Ready to start your project? I'd love to hear about what you're working on!"}
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
        </motion.div>
      </section>
    </div>
  );
};

export default CreativeTemplate;