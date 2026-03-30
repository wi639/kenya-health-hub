import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "The virtual consultation was so smooth. I didn't have to travel all the way from Mombasa to see a specialist. Highly recommended!",
    author: "Fatuma W.",
    location: "Mombasa",
    rating: 5,
  },
  {
    content: "Excellent facility and very professional staff. Dr. Kamau explained everything clearly and made me feel at ease during my procedure.",
    author: "Peter O.",
    location: "Nairobi",
    rating: 5,
  },
  {
    content: "I booked an appointment for my daughter and the pediatrician was wonderful. The environment is very child-friendly and clean.",
    author: "Mercy K.",
    location: "Kiambu",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-4xl font-bold text-blue-900 mb-6">What Our Patients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl relative">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-8">
                <Quote className="text-white h-5 w-5" />
              </div>
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-blue-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};