import { useParams, Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import MinimalistTemplate from '../components/templates/MinimalistTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';
import ProfessionalTemplate from '../components/templates/ProfessionalTemplate';

const PortfolioPage = () => {
  const { id } = useParams();
  const [profiles] = useLocalStorage('portfolioProfiles', []);
  
  // Compare as strings to support string IDs
  const profile = profiles.find(p => String(p.id) === String(id));

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Not Found</h1>
          <Link to="/profiles" className="text-blue-600 hover:underline">
            Back to Profiles
          </Link>
        </div>
      </div>
    );
  }

  // Add console log to verify data
  console.log('Loaded profile:', profile);

  const renderTemplate = () => {
    try {
      switch (profile.template) {
        case 'creative':
          return <CreativeTemplate profile={profile} />;
        case 'professional':
          return <ProfessionalTemplate profile={profile} />;
        default:
          return <MinimalistTemplate profile={profile} />;
      }
    } catch (error) {
      console.error('Error rendering template:', error);
      return <MinimalistTemplate profile={profile} />;
    }
  };

  return renderTemplate();
};

export default PortfolioPage;