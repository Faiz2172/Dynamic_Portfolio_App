import { User, Mail, Phone, MapPin, Briefcase, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MinimalistTemplate = ({ profile }) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-300/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center rounded-3xl shadow-2xl bg-white/25 backdrop-blur-xl p-10 border border-white/20"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 shadow-2xl ring-8 ring-white/40 ring-offset-4 ring-offset-transparent"
          >
            <User className="w-24 h-24 text-white drop-shadow-lg" />
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 rounded-full blur opacity-75 animate-pulse"></div>
          </motion.div>
          <motion.h1 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-7xl font-serif font-bold mb-4 bg-gradient-to-r from-orange-400 via-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm"
          >
            {profile.name}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl text-gray-800 font-semibold italic mb-6 drop-shadow-sm"
          >
            {profile.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-700 font-medium"
          >
            {profile.tagline}
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/25 rounded-3xl shadow-2xl p-10 backdrop-blur-xl border border-white/20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-10 text-center font-serif bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm"
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
              <p className="text-gray-800 leading-relaxed mb-8 text-lg font-medium">{profile.bio}</p>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-4 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Mail className="w-6 h-6 text-blue-600 drop-shadow-sm" />
                  <span className="text-gray-800 font-medium">{profile.email}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Phone className="w-6 h-6 text-purple-600 drop-shadow-sm" />
                  <span className="text-gray-800 font-medium">{profile.phone}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-4 bg-gradient-to-r from-green-400/30 to-emerald-400/30 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <MapPin className="w-6 h-6 text-green-600 drop-shadow-sm" />
                  <span className="text-gray-800 font-medium">{profile.location}</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Skills</h3>
              <div className="flex flex-wrap gap-4">
                {profile.skills.map((skill, index) => (
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: [-5, 5, -5, 0] }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className="px-5 py-3 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow border border-white/20"
                    style={{ 
                      background: `linear-gradient(45deg, 
                        hsl(${(index * 360) / profile.skills.length}, 70%, 60%), 
                        hsl(${((index + 1) * 360) / profile.skills.length}, 70%, 60%))` 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {profile.services && profile.services.length > 0 && (
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm"
            >
              Services
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
                  whileHover={{ 
                    scale: 1.08, 
                    y: -8, 
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)" 
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/30 rounded-3xl shadow-2xl p-8 border border-white/30 backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-xl"
                  >
                    <Briefcase className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 relative z-10">{service.title}</h3>
                  <p className="text-gray-700 font-medium relative z-10">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {profile.projects && profile.projects.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-br from-cyan-400/20 via-purple-400/20 to-pink-400/20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm"
            >
              Projects
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
                  whileHover={{ 
                    scale: 1.05, 
                    rotateX: 5,
                    boxShadow: "0 30px 60px rgba(139, 92, 246, 0.3)" 
                  }}
                  className="bg-white/40 rounded-3xl shadow-2xl border border-white/30 overflow-hidden backdrop-blur-xl"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <Code className="w-16 h-16 text-white drop-shadow-lg z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 via-pink-500/50 to-purple-600/50"></div>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-700 mb-6 font-medium">{project.description}</p>
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
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
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm"
            >
              Testimonials
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
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" 
                  }}
                  className="bg-white/30 p-10 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl"
                >
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-800 italic mb-8 font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-purple-600 font-semibold">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative z-10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-400/30"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-5xl font-bold mb-8 font-serif drop-shadow-lg"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium"
          >
            {profile.message || "Let's work together on your next project!"}
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center space-x-4 bg-white/20 p-6 rounded-2xl backdrop-blur-xl border border-white/30 shadow-xl"
            >
              <Mail className="w-7 h-7 drop-shadow-sm" />
              <span className="font-semibold text-lg">{profile.contactEmail || profile.email}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center space-x-4 bg-white/20 p-6 rounded-2xl backdrop-blur-xl border border-white/30 shadow-xl"
            >
              <Phone className="w-7 h-7 drop-shadow-sm" />
              <span className="font-semibold text-lg">{profile.contactPhone || profile.phone}</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MinimalistTemplate;