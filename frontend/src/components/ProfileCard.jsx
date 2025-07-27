// components/ProfileCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Eye, Edit3, Calendar } from 'lucide-react';
import { formatDate, truncateText, getProfileStats } from '../utils/helpers';

const ProfileCard = ({ profile, onEdit }) => {
  const navigate = useNavigate();
  const stats = getProfileStats(profile);

  const handleViewPortfolio = () => {
    navigate(`/portfolio/${profile.id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(profile.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <User className="w-8 h-8 text-white" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 truncate">
              {profile.name}
            </h3>
            <p className="text-gray-600 truncate">{profile.title}</p>
            <p className="text-sm text-gray-500">
              {profile.template.charAt(0).toUpperCase() + profile.template.slice(1)} Template
            </p>
          </div>
        </div>

        {/* Tagline */}
        {profile.tagline && (
          <p className="text-sm text-gray-700 italic mb-4">
            "{truncateText(profile.tagline, 80)}"
          </p>
        )}

        {/* Bio */}
        <p className="text-gray-700 mb-4 line-clamp-3">
          {truncateText(profile.bio, 120) || 'No bio provided'}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {profile.skills.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{profile.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{stats.skillsCount}</div>
            <div className="text-xs text-gray-600">Skills</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{stats.servicesCount}</div>
            <div className="text-xs text-gray-600">Services</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{stats.projectsCount}</div>
            <div className="text-xs text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-gray-900">{stats.testimonialsCount}</div>
            <div className="text-xs text-gray-600">Reviews</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{profile.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{profile.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs">Created {formatDate(profile.createdAt)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleViewPortfolio}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Portfolio</span>
          </button>
          <button
            onClick={handleEdit}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
            title="Edit Profile"
          >
            <Edit3 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;