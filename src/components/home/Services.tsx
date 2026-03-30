import { 
  Stethoscope, 
  Heart, 
  Activity, 
  FlaskConical, 
  Baby, 
  Eye, 
  Brain, 
  Microscope 
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'General Practice',
    description: 'Comprehensive healthcare for common ailments and routine checkups.',
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Cardiology',
    description: 'Advanced heart care focusing on prevention, diagnosis, and treatment.',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    icon: Baby,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Diagnostics',
    description: 'State-of-the-art laboratory and imaging services for accurate results.',
    icon: Microscope,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Neurology',
    description: 'Expert care for disorders of the nervous system and brain health.',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Ophthalmology',
    description: 'Complete eye care from vision testing to advanced surgeries.',
    icon: Eye,
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Oncology',
    description: 'Compassionate cancer care with modern therapeutic approaches.',
    icon: Activity,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Internal Medicine',
    description: 'Adult medicine focusing on prevention and treatment of complex diseases.',
    icon: FlaskConical,
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-6">Specialized Medical Services</h3>
          <p className="text-gray-600 text-lg">
            We offer a wide range of medical services tailored to meet the unique health needs of our Kenyan community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};