import { User, Mail, Phone, MapPin, Briefcase, Code, Star } from 'lucide-react';

const CreativeTemplate = ({ profile }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-purple-900 mb-4">{profile.name}</h1>
          <h2 className="text-2xl text-purple-600 mb-6">{profile.title}</h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">{profile.tagline}</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">{profile.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">{profile.email}</span>
                </div>
                {/* Other contact info */}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-purple-900">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
    </div>
  );
};

export default CreativeTemplate;