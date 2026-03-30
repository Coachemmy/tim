import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Banda M.",
      role: "Member since 2020",
      content: "Total Invasion Ministries has transformed my walk with Christ. The community is loving, the teaching is sound, and I've grown more than I ever imagined.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop"
    },
    {
      name: "Lilongwe K.",
      role: "Youth Leader",
      content: "The youth ministry here is incredible. It's not just about programs—it's about genuine relationships and spiritual growth. I'm grateful for this church family.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop"
    },
    {
      name: "Mary T.",
      role: "New Believer",
      content: "I walked in as a seeker and found a home. The warmth, the truth, and the love I've experienced here has changed my life forever.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote size={48} className="mx-auto mb-8 opacity-50" />
        
        <div className="relative">
          <div className="transition-all duration-500">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white/20 object-cover"
            />
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
              `{testimonials[currentIndex].content}`
            </p>
            <h4 className="font-serif text-xl font-semibold mb-1">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-primary-200 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;