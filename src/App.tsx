import { Navbar } from './components/layout/Navbar';
import { EmergencyBanner } from './components/home/EmergencyBanner';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Doctors } from './components/home/Doctors';
import { BookingSection } from './components/home/BookingSection';
import { Insurance } from './components/home/Insurance';
import { Blog } from './components/home/Blog';
import { Testimonials } from './components/home/Testimonials';
import { Footer } from './components/layout/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Toaster position="top-right" richColors />
      <Navbar />
      <div className="pt-20 lg:pt-24">
        <EmergencyBanner />
        <main>
          <Hero />
          <Services />
          <Insurance />
          <Doctors />
          <BookingSection />
          <Testimonials />
          <Blog />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;