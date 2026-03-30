import { HeartPulse, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Afya<span className="text-emerald-400">Care</span>
              </span>
            </div>
            <p className="text-blue-100 leading-relaxed opacity-80">
              Providing accessible, affordable, and high-quality healthcare services to all Kenyans. Your health is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100/80">
              {['Home', 'About Us', 'Services', 'Doctors', 'Health Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-400 flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100/80">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>Afya Center, 5th Floor, Upper Hill, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/80">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/80">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span>contact@afyacare.co.ke</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Emergency</h4>
            <div className="bg-red-600/20 border border-red-500/30 p-6 rounded-2xl">
              <p className="text-sm font-medium mb-3">Available 24/7 for medical emergencies</p>
              <a href="tel:999" className="text-2xl font-bold flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <Phone className="h-6 w-6" /> 999 / 112
              </a>
              <Button variant="destructive" className="w-full mt-4 bg-red-600 hover:bg-red-700">
                Call Ambulance
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-100/50">
          <p>© 2023 AfyaCare Kenya. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white flex items-center gap-1">
              Portal Login <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};