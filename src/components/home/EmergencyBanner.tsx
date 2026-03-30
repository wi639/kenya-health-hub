import { AlertTriangle, Phone, MapPin } from 'lucide-react';

export const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-4 sticky top-[72px] md:top-[88px] z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          <AlertTriangle className="h-4 w-4 animate-pulse" />
          <span>Medical Emergency? Call 24/7 Hotline: </span>
          <a href="tel:+254700000000" className="underline font-bold hover:text-red-100 transition-colors">+254 700 000 000</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Upper Hill, Nairobi, Kenya
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            Ambulance: 999 / 112
          </span>
        </div>
      </div>
    </div>
  );
};