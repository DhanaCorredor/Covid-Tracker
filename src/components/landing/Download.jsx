import './Download.css';

export const Download = () => {
  return (
    <>
      {/* App Banner (Image 4) */}
      <div className="w-full max-w-6xl px-4 md:px-8 mt-16 mb-24 mx-auto">
        <div className="app-banner w-full flex flex-row items-center justify-between p-8 md:p-16 text-white overflow-hidden relative gap-6">
          <div className="z-10 w-3/5 flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
              Get the simple app for latest news
            </h2>
            <p className="text-blue-100 text-sm sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed font-medium">
              Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
            </p>
            <button className="bg-white text-slate-800 font-bold py-2 px-6 md:py-3 md:px-8 rounded hover:bg-slate-50 transition-colors shadow-lg tracking-wide text-sm md:text-base">
              DOWNLOAD NOW
            </button>
          </div>
          {/* Mockup Placeholder */}
          <div className="z-10 w-2/5 flex flex-col items-center justify-center relative shrink-0">
            <img src="/images/phone_mockup.png" className="w-full max-h-[60vh] object-contain drop-shadow-2xl" alt="App Mockup" />
          </div>
        </div>
      </div>
    </>
  );
};