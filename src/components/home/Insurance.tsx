import { ShieldCheck } from 'lucide-react';

export const Insurance = () => {
  return (
    <section id="insurance" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="inline-flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-sm font-bold mb-4">
              <ShieldCheck className="h-4 w-4" />
              Insurance Partners
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Cashless Medical Services</h3>
            <p className="text-gray-600">
              We partner with all major health insurance providers in Kenya to ensure you get seamless care without financial hurdles.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
             {['NHIF', 'Jubilee', 'APA', 'Britam', 'Madison', 'Old Mutual'].map((name) => (
               <div key={name} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-xl font-black text-gray-400 tracking-tighter">{name}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};