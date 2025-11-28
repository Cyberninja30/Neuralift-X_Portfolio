import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Timeline } from './components/Timeline';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { Scene3D } from './components/Scene3D';

export default function App() {
  return (
    <div className="size-full relative">
      <Scene3D />
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <Timeline />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}