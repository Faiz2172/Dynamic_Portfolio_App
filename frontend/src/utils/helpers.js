// utils/helpers.js

// Generate unique ID for profiles
export const generateId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };
  
  // Format date for display
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Truncate text to specified length
  export const truncateText = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };
  
  // Validate email format
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate phone format
  export const isValidPhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s|-|\(|\)/g, ''));
  };
  
  // Clean and format phone number
  export const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };
  
  // Extract first name from full name
  export const getFirstName = (fullName) => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
  };
  
  // Generate initials from name
  export const getInitials = (name) => {
    if (!name) return 'UN';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substr(0, 2);
  };
  
  // Check if URL is valid
  export const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  
  // Generate slug from text
  export const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };
  
  // Filter profiles by search term
  export const filterProfiles = (profiles, searchTerm) => {
    if (!searchTerm) return profiles;
    
    const term = searchTerm.toLowerCase();
    return profiles.filter(profile =>
      profile.name.toLowerCase().includes(term) ||
      profile.title.toLowerCase().includes(term) ||
      profile.bio.toLowerCase().includes(term) ||
      profile.skills.some(skill => skill.toLowerCase().includes(term)) ||
      profile.location.toLowerCase().includes(term)
    );
  };
  
  // Sort profiles by creation date
  export const sortProfilesByDate = (profiles, ascending = false) => {
    return [...profiles].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return ascending ? dateA - dateB : dateB - dateA;
    });
  };
  
  // Get profile statistics
  export const getProfileStats = (profile) => {
    return {
      skillsCount: profile.skills?.length || 0,
      servicesCount: profile.services?.filter(s => s.title).length || 0,
      projectsCount: profile.projects?.filter(p => p.title).length || 0,
      testimonialsCount: profile.testimonials?.filter(t => t.quote).length || 0
    };
  };
  
  // Default form values
  export const getDefaultFormValues = () => ({
    template: 'minimalist',
    // Hero
    name: '',
    title: '',
    tagline: '',
    profileImage: '',
    // About
    bio: '',
    email: '',
    phone: '',
    location: '',
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: '',
      website: ''
    },
    // Skills
    skills: [],
    // Services
    services: [
      { title: '', description: '' },
      { title: '', description: '' },
      { title: '', description: '' }
    ],
    // Projects
    projects: [
      { title: '', description: '', image: '', url: '' },
      { title: '', description: '', image: '', url: '' },
      { title: '', description: '', image: '', url: '' }
    ],
    // Testimonials
    testimonials: [
      { quote: '', author: '', position: '', company: '' }
    ],
    // Contact
    contactEmail: '',
    contactPhone: '',
    message: ''
  });
  
  export default {
    generateId,
    formatDate,
    truncateText,
    isValidEmail,
    isValidPhone,
    formatPhoneNumber,
    getFirstName,
    getInitials,
    isValidUrl,
    generateSlug,
    filterProfiles,
    sortProfilesByDate,
    getProfileStats,
    getDefaultFormValues
  };