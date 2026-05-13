import { Header } from '../components/landing/Header';
import Prevention from '../components/landing/Prevention';
import Symptoms from '../components/landing/Symptoms';
import { Faqs } from '../components/landing/Faqs';
import { Lavar } from '../components/landing/Lavar';
import { Download } from '../components/landing/Download';
import { News } from '../components/landing/News';
import { Footer } from '../components/landing/Footer';
import { washSteps, newsData } from '../constants/landingData';

export const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-text-primary bg-neutral-0 w-full overflow-x-hidden">
      <Header />
      <Symptoms />
      <Prevention />
      <Faqs />
      <Lavar steps={washSteps} />
      <Download />
      <News newsData={newsData} />
      <Footer />
    </div>
  );
};