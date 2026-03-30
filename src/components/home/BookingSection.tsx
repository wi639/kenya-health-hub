import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Video, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

export const BookingSection = () => {
  const [type, setType] = useState<'physical' | 'virtual'>('physical');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Appointment request sent! We will contact you shortly.', {
        description: 'Check your email for confirmation details.',
      });
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-800 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3">Seamless Care</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Book Your Appointment In Minutes</h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Skip the long queues. Choose your preferred doctor and time slot. We support both physical visits and virtual consultations for your convenience.
            </p>

            <div className="space-y-6">
              {[
                'Instant booking confirmation',
                '24/7 online support for patients',
                'Access to digital health records',
                'Flexible cancellation and rescheduling'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-emerald-500/20 p-1 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-blue-50 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl"
          >
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => setType('physical')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  type === 'physical' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <MapPin className="h-4 w-4" />
                Hospital Visit
              </button>
              <button
                type="button"
                onClick={() => setType('virtual')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  type === 'virtual' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Video className="h-4 w-4" />
                Virtual Consult
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4" /> Full Name
                </label>
                <Input placeholder="e.g. Jane Doe" required className="h-11" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Phone className="h-4 w-4" /> Phone Number
                  </label>
                  <Input placeholder="+254 7..." required className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Select Service
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-11">
                      <SelectValue placeholder="General Checkup" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Checkup</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Preferred Date
                  </label>
                  <Input type="date" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Preferred Time
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-11">
                      <SelectValue placeholder="09:00 AM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">02:00 PM</SelectItem>
                      <SelectItem value="16:00">04:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 text-lg font-bold mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLoading ? 'Processing...' : 'Schedule Appointment'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};