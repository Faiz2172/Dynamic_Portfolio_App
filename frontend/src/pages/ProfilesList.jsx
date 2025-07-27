// pages/ProfilesList.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Filter, Search, SortAsc, User, AlertCircle } from 'lucide-react';
import useLocalStorage from '../hooks/useLocalStorage';
import { filterProfiles, sortProfilesByDate } from '../utils/helpers';
import ProfileCard from '../components/ProfileCard';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const ProfilesList = () => {
  const location = useLocation();
  const [profiles, setProfiles] = useLocalStorage('portfolioProfiles', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showMessage, setShowMessage] = useState(false);

  const message = location.state?.message;
  const newProfileId = location.state?.newProfileId;

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const filteredAndSortedProfiles = React.useMemo(() => {
    let filtered = filterProfiles(profiles, searchTerm);
    
    switch (sortOrder) {
      case 'newest':
        filtered = sortProfilesByDate(filtered, false);
        break;
      case 'oldest':
        filtered = sortProfilesByDate(filtered, true);
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    return filtered;
  }, [profiles, searchTerm, sortOrder]);

  const handleEdit = (profileId) => {
    console.log('Edit profile:', profileId);
    // In a real app, you'd navigate to an edit form with pre-filled data
    alert('Edit functionality would be implemented here');
  };

  const handleDelete = (profileId) => {
    if (window.confirm('Are you sure you want to delete this portfolio?')) {
      const updatedProfiles = profiles.filter(profile => profile.id !== profileId);
      setProfiles(updatedProfiles);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Message */}
      {showMessage && message && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">{message}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setShowMessage(false)}
                className="text-green-400 hover:text-green-600"
              >
                <span className="sr-only">Dismiss</span>
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Portfolios</h1>
            <p className="text-gray-600 mt-2">
              Manage and view your created portfolios ({profiles.length} total)
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link to="/">
              <Button
                icon={<Plus className="w-5 h-5" />}
                size="lg"
              >
                Create New Portfolio
              </Button>
            </Link>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by name, title, skills, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search className="w-5 h-5" />}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name A-Z</option>
              </select>
              
              <Button
                variant="outline"
                icon={<Filter className="w-4 h-4" />}
              >
                Filter
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {profiles.length}
              </div>
              <div className="text-sm text-gray-600">Total Portfolios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {profiles.filter(p => !p.isDraft).length}
              </div>
              <div className="text-sm text-gray-600">Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {profiles.filter(p => p.isDraft).length}
              </div>
              <div className="text-sm text-gray-600">Drafts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {filteredAndSortedProfiles.length}
              </div>
              <div className="text-sm text-gray-600">Showing</div>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredAndSortedProfiles.length === 0 ? (
          <div className="text-center py-16">
            <User className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            
            {profiles.length === 0 ? (
              <>
                <h3 className="text-2xl font-semibold text-gray-500 mb-4">
                  No portfolios yet
                </h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Create your first portfolio to showcase your skills and experience. 
                  It only takes a few minutes to get started.
                </p>
                <Link to="/">
                  <Button
                    size="lg"
                    icon={<Plus className="w-5 h-5" />}
                  >
                    Create Your First Portfolio
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-gray-500 mb-4">
                  No portfolios match your search
                </h3>
                <p className="text-gray-400 mb-8">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSortOrder('newest');
                  }}
                >
                  Clear Search
                </Button>
              </>
            )}
          </div>
        ) : (
          <>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {searchTerm 
                  ? `Found ${filteredAndSortedProfiles.length} portfolio${filteredAndSortedProfiles.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                  : `Showing ${filteredAndSortedProfiles.length} portfolio${filteredAndSortedProfiles.length !== 1 ? 's' : ''}`
                }
              </p>
              
              {newProfileId && (
                <div className="text-sm text-green-600 font-medium">
                  ✨ New portfolio created!
                </div>
              )}
            </div>

            {/* Profiles Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className={`transform transition-all duration-200 ${
                    profile.id === newProfileId ? 'scale-105 ring-2 ring-green-400' : ''
                  }`}
                >
                  <ProfileCard
                    profile={profile}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Load More Button (if you want pagination) */}
        {filteredAndSortedProfiles.length >= 9 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Portfolios
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilesList;