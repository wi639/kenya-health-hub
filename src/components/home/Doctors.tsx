import { Star, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. David Kamau',
    specialty: 'Senior Cardiologist',
    education: 'MBChB, MMed (UoN)',
    rating: 4.9,
    reviews: 124,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/387cdb49-4c47-4c1a-88ff-31040b57fba9/doctor-male-1-62e7237a-1774850365917.webp',
  },
  {
    name: 'Dr. Sarah Njeri',
    specialty: 'Pediatric Specialist',
    education: 'MD, PhD (Oxford)',
    rating: 5.0,
    reviews: 89,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/387cdb49-4c47-4c1a-88ff-31040b57fba9/doctor-female-1-9fe82328-1774850365103.webp',
  },
  {
    name: 'Dr. Michael Otieno',
    specialty: 'Neurologist',
    education: 'MBChB, FRCP',
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Amina Yusuf',
    specialty: 'General Surgeon',
    education: 'MBChB, FCS (ECSA)',
    rating: 4.9,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
  },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Team</h2>
            <h3 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Top Specialists</h3>
            <p className="text-gray-600 text-lg">
              Our doctors are internationally trained and committed to providing the best patient-centered care.
            </p>
          </div>
          <Button variant="outline">View All Specialists</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold text-blue-900 shadow-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {doctor.rating}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-1">{doctor.name}</h4>
                <p className="text-emerald-600 font-semibold text-sm mb-2">{doctor.specialty}</p>
                <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">{doctor.education}</p>
                
                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-gray-50">
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 transition-colors">
                    <Phone className="h-5 w-5" />
                  </button>
                  <Button size="sm" className="flex-1 text-sm bg-blue-600 text-white hover:bg-blue-700">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};