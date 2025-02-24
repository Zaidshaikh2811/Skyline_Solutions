import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={

              <>
                <Hero />
                <Services />
                <Industries />
                <CaseStudies />
                <ContactCTA />
              </>
            } />
            <Route path="/services/:serviceId" element={<ServicePage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;