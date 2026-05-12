export const News = ({ newsData }) => {
  return (
    <div className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData && newsData.map((item, index) => (
              <div key={index} className="news-card bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col shadow-sm">
                <div className="h-64 w-full relative">
                  <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                      {item.comments}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex-grow leading-tight">
                    {item.title}
                  </h3>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:text-blue-800 transition-colors inline-block mt-auto uppercase text-sm tracking-wide">
                    Continue
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
