import ProfileSection from './components/ProfileSection';
import SocialLinks from './components/SocialLinks';
import MainLinks from './components/MainLinks';
import ProgramSection from './components/ProgramSection';
import LpfSection from './components/LpfSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container max-w-3xl mx-auto px-4 py-8 font-sans text-gray-800">
      <div className="flex flex-col items-center justify-center">
        <ProfileSection />
        <SocialLinks />
        <MainLinks />
        <ProgramSection />
        <LpfSection />
        <TestimonialsSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;

