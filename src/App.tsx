import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import AccessibilityWidget from './components/AccessibilityWidget';
import WhatsAppButton from './components/WhatsAppButton';
import CompareBar from './components/CompareBar';
import { FavoritesProvider } from './context/FavoritesContext';
import { CompareProvider } from './context/CompareContext';

// Import Pages
import Home from './pages/Home';
import OurProperties from './pages/OurProperties';
import PropertyDetail from './pages/PropertyDetail';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import Offices from './pages/Offices';
import AboutUs from './pages/AboutUs';
import InTheMedia from './pages/InTheMedia';
import ContactUs from './pages/ContactUs';
import SavedProperties from './pages/SavedProperties';
import ComparePage from './pages/ComparePage';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';

// Scroll to Top lifecycle helper on route transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename="/the-oppenheim-group-real-estate">
      {/* Scroll Reset behavior */}
      <ScrollToTop />

      <FavoritesProvider>
        <CompareProvider>
          <div className="bg-brand-black min-h-screen text-white antialiased selection:bg-accent-red selection:text-white">

            {/* Navigation Bar */}
            <Navbar />

            {/* Fixed vertical social sidebar on the right side */}
            <SocialSidebar />

            {/* Dynamic Route views */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<OurProperties />} />
                <Route path="/properties/:id" element={<PropertyDetail />} />
                <Route path="/buyers" element={<Buyers />} />
                <Route path="/sellers" element={<Sellers />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/media" element={<InTheMedia />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/saved" element={<SavedProperties />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:id" element={<InsightDetail />} />
              </Routes>
            </main>

            {/* Global Accessibility Widget floating bottom-left */}
            <AccessibilityWidget />

            {/* Global Footer */}
            <Footer />

            {/* Floating WhatsApp quick-contact button */}
            <WhatsAppButton />

            {/* Floating compare bar, appears once 1+ properties are selected for comparison */}
            <CompareBar />

          </div>
        </CompareProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
