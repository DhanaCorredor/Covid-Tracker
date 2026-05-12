import './prevention.css';

export default function Prevention() {
  const steps = [
    { num: 1, title: 'Water and soap', imgSrc: '/images/wash-01.png' },
    { num: 2, title: 'Palm to palm', imgSrc: '/images/wash-02.png' },
    { num: 3, title: 'Between fingers', imgSrc: '/images/wash-03.png' },
    { num: 4, title: 'Focus on thumbs', imgSrc: '/images/wash-04.png' },
    { num: 5, title: 'Back of hands', imgSrc: '/images/wash-05.png' },
    { num: 6, title: 'Focus on wrists', imgSrc: '/images/wash-06.png' },
  ];

  return (
    <>
      <div id="prevention" className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Prevent
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 leading-tight max-w-3xl mx-auto">
            Best way to prevent is avoid virus.
          </h2>

        <div className="flex flex-col gap-12 items-center text-left mb-24">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain" alt="Mujer estornudando" src="/images/carousel-01.png"/>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Personal Contact</h3>
                <p className="text-slate-600">Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain" alt="" src="/images/icon5.png"/>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Social distancing</h3>
                <p className="text-slate-600">Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain" alt="" src="/images/icon6.png" />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Clean And Disinfect</h3>
                <p className="text-slate-600">Fever is a key symptom, experts say. Dont fixate on a number, but know its really not a fever until your temperature reaches at least 100.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain bg-white rounded-xl p-2" alt="" src="/images/wash-01.png" />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Wash hands</h3>
                <p className="text-slate-600">Maintain at least 1 metre (3 feet) distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain" alt="Pulmones" src="/images/carousel-03.svg" />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Respiratory hygiene</h3>
                <p className="text-slate-600">Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <img className="w-16 h-16 object-contain" alt="" src="/images/carousel-02.svg" />
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Wear a Facemask</h3>
                <p className="text-slate-600">Our comprehensive Online Marketing strategy will boost your website traffic hence monthly sales.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="w-full bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Wash
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 leading-tight max-w-3xl mx-auto">
            Wash Your Hands min 20 Second
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="step-circle mb-6">
                  <div className="step-number">{step.num}</div>
                  <img src={step.imgSrc} alt={step.title} className="absolute inset-0 w-full h-full object-contain rounded-full border-4 border-white shadow-sm" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}