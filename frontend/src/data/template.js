// data/templates.js
export const templates = {
    minimalist: {
      id: 'minimalist',
      name: 'Minimalist',
      preview: 'Clean, simple design with plenty of whitespace',
      colors: {
        primary: 'text-gray-900',
        secondary: 'text-gray-600',
        accent: 'bg-gray-900',
        background: 'bg-white',
        section: 'bg-gray-50'
      },
      style: {
        borderRadius: 'rounded-lg',
        shadow: 'shadow-md',
        spacing: 'space-y-8'
      }
    },
    creative: {
      id: 'creative',
      name: 'Creative',
      preview: 'Bold colors and modern design elements',
      colors: {
        primary: 'text-purple-900',
        secondary: 'text-purple-600',
        accent: 'bg-gradient-to-r from-purple-500 to-pink-500',
        background: 'bg-gradient-to-br from-purple-50 to-pink-50',
        section: 'bg-white'
      },
      style: {
        borderRadius: 'rounded-xl',
        shadow: 'shadow-lg',
        spacing: 'space-y-12'
      }
    },
    professional: {
      id: 'professional',
      name: 'Professional',
      preview: 'Corporate-friendly design with blue accents',
      colors: {
        primary: 'text-blue-900',
        secondary: 'text-blue-600',
        accent: 'bg-blue-600',
        background: 'bg-blue-50',
        section: 'bg-white'
      },
      style: {
        borderRadius: 'rounded-lg',
        shadow: 'shadow-lg',
        spacing: 'space-y-10'
      }
    }
  };
  
  export default templates;