import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const AboutPreview = () => {
  const values = [
    "Biblical Truth & Teaching",
    "Authentic Worship & Prayer",
    "Community & Fellowship",
    "Compassionate Outreach",
    "Discipleship & Growth"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&auto=format&fit=crop" 
                alt="About Total Invasion Ministries" 
                className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-600 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary-200 rounded-3xl -z-10"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
              About Us
            </span>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle mb-8">
              Total Invasion Ministries is a vibrant Christian community committed to 
              spreading the Gospel, nurturing believers, and serving our community 
              with Christ-like love and compassion.
            </p>
            
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary inline-flex items-center">
              Learn More About Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;