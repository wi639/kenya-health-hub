import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'Managing Hypertension: A Guide for Kenyans',
    excerpt: 'Practical lifestyle changes and dietary tips to control high blood pressure effectively.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/387cdb49-4c47-4c1a-88ff-31040b57fba9/health-blog-1-06c54180-1774850365629.webp',
    author: 'Dr. David Kamau',
    date: 'Oct 12, 2023',
    category: 'Lifestyle',
  },
  {
    title: 'Vaccination Schedule for Your Newborn',
    excerpt: 'Everything you need to know about the Kenya Expanded Programme on Immunization (KEPI).',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f2aa?auto=format&fit=crop&q=80&w=400',
    author: 'Dr. Sarah Njeri',
    date: 'Oct 08, 2023',
    category: 'Pediatrics',
  },
  {
    title: 'The Future of Virtual Care in Nairobi',
    excerpt: 'How telemedicine is bridging the gap between doctors and patients across the country.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/387cdb49-4c47-4c1a-88ff-31040b57fba9/virtual-consultation-cb9ef78a-1774850365503.webp',
    author: 'Admin',
    date: 'Oct 05, 2023',
    category: 'Technology',
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Health Education</h2>
            <h3 className="text-4xl font-bold text-blue-900 mb-4">Latest Health Tips & Insights</h3>
            <p className="text-gray-600 text-lg">
              Stay informed with medical advice and wellness tips from our professional healthcare providers.
            </p>
          </div>
          <Button variant="outline">Read All Articles</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" /> {post.author}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-500 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group/btn">
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};