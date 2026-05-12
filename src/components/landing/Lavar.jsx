export const Lavar = ({ steps }) => {
  return (
    <div className="w-full bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-4 block">
            Wash
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-16 leading-tight max-w-3xl mx-auto">
            Wash Your Hands min 20 Second
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps && steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="step-circle mb-6 relative w-24 h-24">
                  <div className="step-number absolute z-10 top-0 right-0">{step.num}</div>
                  <img src={step.imgSrc} alt={step.title} className="absolute inset-0 w-full h-full object-contain rounded-full border-4 border-white shadow-sm" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};