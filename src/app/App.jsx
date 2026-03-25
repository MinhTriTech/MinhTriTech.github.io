import { LanguageProvider } from '../shared/context/LanguageContext';
import PortfolioPage from '../pages/portfolio/PortfolioPage';

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioPage />
    </LanguageProvider>
  );
}
