import { Header } from '../components/landing/Header';
import Prevention from '../components/landing/Prevention';
import Symptoms from '../components/landing/Symptoms';
import { Faqs } from '../components/landing/Faqs';
import { Lavar } from '../components/landing/Lavar';
import { Download } from '../components/landing/Download';
import { News } from '../components/landing/News';
import { Footer } from '../components/landing/Footer';

export const LandingPage = () => {
  const steps = [
    { num: 1, title: 'Water and soap', imgSrc: '/images/wash-01.png' },
    { num: 2, title: 'Palm to palm', imgSrc: '/images/wash-02.png' },
    { num: 3, title: 'Between fingers', imgSrc: '/images/wash-03.png' },
    { num: 4, title: 'Focus on thumbs', imgSrc: '/images/wash-04.png' },
    { num: 5, title: 'Back of hands', imgSrc: '/images/wash-05.png' },
    { num: 6, title: 'Focus on wrists', imgSrc: '/images/wash-06.png' },
  ];

  const newsData = [
    {
      date: '9 Sept 2020',
      comments: '2 Comment',
      title: 'What should I do if I have COVID-19 symptoms',
      imgSrc: '/images/news-virus.png',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'
    },
    {
      date: '8 Sept 2020',
      comments: '20 Comment',
      title: 'What you need to know About Coronavirus',
      imgSrc: '/images/news-lab.png',
      link: 'https://www.who.int/health-topics/coronavirus'
    },
    {
      date: '7 Sept 2020',
      comments: '2 Comment',
      title: 'Seek immediate care if you have difficulty breathing',
      imgSrc: '/images/news-mask.png',
      link: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html#emergency-warning-signs'
    }
  ];

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      <Header />
      <Symptoms />
      <Prevention />
      <Faqs />
      <Lavar steps={steps} />
      <Download />
      <News newsData={newsData} />
      <Footer />
    </div>
  );
};
