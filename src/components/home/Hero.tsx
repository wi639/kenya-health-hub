import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Video, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px]" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <ShieldCheck className="h-4 w-4" />
              Kenya's Most Trusted Digital Health Partner
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-6">
              World-Class Healthcare, <br />
              <span className="text-emerald-600">Closer Than Ever.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Access top Kenyan specialists from the comfort of your home. Book virtual consultations or in-person visits at our Nairobi state-of-the-art facility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="flex items-center gap-2 group bg-blue-600 hover:bg-blue-700 text-white">
                <CalendarCheck className="h-5 w-5" />
                Book In-Person
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white">
                <Video className="h-5 w-5" />
                Virtual Consultation
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-3xl font-bold text-blue-900">50+</p>
                <p className="text-gray-500 text-sm">Expert Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">10k+</p>
                <p className="text-gray-500 text-sm">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">24/7</p>
                <p className="text-gray-500 text-sm">Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/387cdb49-4c47-4c1a-88ff-31040b57fba9/hospital-reception-5a76ad27-1774850365560.webp"
                alt="Modern Kenya Hospital Reception"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Video className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Next Virtual Slot</p>
                  <p className="text-sm text-gray-500">Today, 2:30 PM</p>
                </div>
              </div>
              <Button size="sm" className="w-full bg-blue-600 text-white">Join Now</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};